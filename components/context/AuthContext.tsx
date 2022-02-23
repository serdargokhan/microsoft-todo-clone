import { useRouter } from "next/router";
import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useReducer,
} from "react";
// Types
import { initialState, IStoreState, Actions, ContextType } from "./AuthTypes";

const AuthContext = createContext<ContextType>({
    dispatch: () => {},
    state: initialState,
});

function reducerfn(state: IStoreState, action: Actions): IStoreState {
    switch (action.type) {
        case "SET_EMAIL":
            return {
                ...state,
                inputMail: action.payload,
            };
        case "SET_EMAIL_VALID":
            return {
                ...state,
                emailValid: action.payload,
            };
        case "SET_EMAIL_ERROR":
            return {
                ...state,
                emailError: {
                    errorStatus: action.payload.errorStatus,
                    errorMessage: action.payload.errorMessage,
                },
            };
        case "SET_NEXT_PAGE":
            return {
                ...state,
                nextPage: action.payload,
            };
        case "SET_EMAIL_CLICK":
            return {
                ...state,
                emailClick: action.payload,
            };
        case "SET_PASSWORD":
            return {
                ...state,
                inputPassword: action.payload,
            };
        case "SET_PASSWORD_VALID":
            return {
                ...state,
                passwordValid: action.payload,
            };
        case "SET_PASSWORD_ERROR":
            return {
                ...state,
                passwordError: {
                    errorStatus: action.payload.errorStatus,
                    errorMessage: action.payload.errorMessage,
                },
            };
        case "SET_PASSWORD_CLICK":
            return {
                ...state,
                passwordClick: action.payload,
            };

        default:
            throw Error("Action could not find.");
    }
}

function AuthContextProvider({ children }: React.PropsWithChildren<ReactNode>) {
    const [state, dispatch] = useReducer(reducerfn, initialState);

    const router = useRouter();

    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const trimmedInput = state.inputMail.trim().length;

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const trimmedPassword = state.inputPassword.trim().length;

    useEffect(() => {
        // email validation
        if (trimmedInput === 0 && state.emailClick) {
            if (router.pathname === "/signin") {
                dispatch({
                    type: "SET_EMAIL_ERROR",
                    payload: {
                        ...state.emailError,
                        errorStatus: true,
                        errorMessage:
                            "Enter a valid email address, phone number, or Skype name.",
                    },
                });
            }

            if (router.pathname === "/signup") {
                dispatch({
                    type: "SET_EMAIL_ERROR",
                    payload: {
                        ...state.emailError,
                        errorStatus: true,
                        errorMessage: "An email address is required",
                    },
                });
            }
        }
        if (trimmedInput >= 1) {
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload: { errorStatus: false, errorMessage: "" },
            });
        }
        if (trimmedInput >= 1 && state.emailClick) {
            dispatch({ type: "SET_EMAIL", payload: state.inputMail });
            dispatch({
                type: "SET_EMAIL_VALID",
                payload: emailRegex.test(state.inputMail),
            });
        }
        if (!state.emailValid && state.emailClick && trimmedInput >= 1) {
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload: {
                    ...state.emailError,
                    errorStatus: true,
                    errorMessage:
                        "Enter the email address in the format someone@example.com.",
                },
            });
        }
        if (state.emailValid)
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload: { errorStatus: false, errorMessage: "" },
            });
        if (
            state.emailValid &&
            state.emailClick &&
            !state.emailError.errorStatus
        ) {
            dispatch({ type: "SET_NEXT_PAGE", payload: true });
        }

        // password validation
        if (trimmedPassword === 0 && state.passwordClick) {
            dispatch({
                type: "SET_PASSWORD_ERROR",
                payload: {
                    errorStatus: true,
                    errorMessage: "A password is required",
                },
            });
        }
        if (trimmedPassword >= 1) {
            dispatch({
                type: "SET_PASSWORD_ERROR",
                payload: { errorStatus: false, errorMessage: "" },
            });
        }
        if (trimmedPassword >= 1 && state.passwordClick) {
            dispatch({ type: "SET_PASSWORD", payload: state.inputPassword });
            dispatch({
                type: "SET_PASSWORD_VALID",
                payload: passwordRegex.test(state.inputPassword),
            });
        }
        if (
            !state.passwordValid &&
            state.passwordClick &&
            trimmedPassword >= 1
        ) {
            dispatch({
                type: "SET_PASSWORD_ERROR",
                payload: {
                    errorStatus: true,
                    errorMessage:
                        "Passwords must have at least 8 characters and contain at least two of the following: uppercase letters, lowercase letters, numbers, and symbols.",
                },
            });
        }
        if (state.passwordValid) {
            dispatch({
                type: "SET_PASSWORD_ERROR",
                payload: { errorStatus: false, errorMessage: "" },
            });
        }
    }, [
        state.emailClick,
        state.inputMail,
        state.inputPassword,
        state.passwordClick,
        state.emailError.errorStatus,
        state.passwordError.errorStatus,
        state.emailValid,
        state.passwordValid,
    ]);

    useEffect(() => {
        dispatch({ type: "SET_EMAIL_CLICK", payload: false });
    }, [state.inputMail]);

    useEffect(() => {
        dispatch({ type: "SET_PASSWORD_CLICK", payload: false });
    }, [state.inputPassword]);

    const values = {
        dispatch,
        state,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
}

export default AuthContextProvider;

export function useCtx() {
    const authCtx = useContext(AuthContext);
    if (authCtx === undefined)
        throw new Error("Context must be used within the provider");

    return authCtx;
}
