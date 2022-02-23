export interface IStoreState {
    inputMail: string;
    inputPassword: string;
    emailValid: boolean;
    passwordValid: boolean;
    emailError: {
        errorStatus: boolean;
        errorMessage: string;
    };
    passwordError: {
        errorStatus: boolean;
        errorMessage: string;
    };
    nextPage: boolean;
    emailClick: boolean;
    passwordClick: boolean;
}

export const initialState: IStoreState = {
    inputMail: "",
    inputPassword: "",
    emailValid: false,
    passwordValid: false,
    emailError: {
        errorStatus: false,
        errorMessage: "",
    },
    passwordError: {
        errorStatus: false,
        errorMessage: "",
    },
    nextPage: false,
    emailClick: false,
    passwordClick: false,
};

export type Actions =
    | { type: "SET_EMAIL"; payload: string }
    | { type: "SET_PASSWORD"; payload: string }
    | { type: "SET_EMAIL_VALID"; payload: boolean }
    | { type: "SET_PASSWORD_VALID"; payload: boolean }
    | {
          type: "SET_EMAIL_ERROR";
          payload: {
              errorStatus: boolean;
              errorMessage: string;
          };
      }
    | {
          type: "SET_PASSWORD_ERROR";
          payload: {
              errorStatus: boolean;
              errorMessage: string;
          };
      }
    | { type: "SET_NEXT_PAGE"; payload: boolean }
    | { type: "SET_EMAIL_CLICK"; payload: boolean }
    | { type: "SET_PASSWORD_CLICK"; payload: boolean };

export interface ContextType {
    dispatch: React.Dispatch<Actions>;
    state: IStoreState;
}
