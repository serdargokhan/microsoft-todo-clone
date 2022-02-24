import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
// CSS
import classes from "styles/Signup.module.scss";
// Context
import { useCtx } from "components/context/AuthContext";
// Components
import SignLayout from "components/User/Layout/SignLayout";
import Button from "components/utils/Button";
import Input from "components/utils/Input";
import Signin from "./Signin";
import PasswordWrapper from "components/User/Layout/PasswordWrapper";
// Firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "components/firebase/Firebase";

function SigninContinue() {
    const [click, setClick] = useState(false);
    const [loading, setLoading] = useState(false);

    const { state, dispatch } = useCtx();

    const router = useRouter();

    const inputRef = useRef<HTMLInputElement>(null);

    // Focus to the input field on mount
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    function reset() {
        dispatch({ type: "SET_NEXT_PAGE", payload: false });
        dispatch({ type: "SET_EMAIL_CLICK", payload: false });
        dispatch({ type: "SET_PASSWORD_CLICK", payload: false });
        dispatch({
            type: "SET_EMAIL_ERROR",
            payload: { errorMessage: "", errorStatus: false },
        });
        dispatch({
            type: "SET_PASSWORD_ERROR",
            payload: { errorMessage: "", errorStatus: false },
        });
        dispatch({ type: "SET_EMAIL_VALID", payload: false });
        dispatch({ type: "SET_PASSWORD_VALID", payload: false });
        dispatch({ type: "SET_PASSWORD", payload: "" });
    }

    // Event handlers
    function previousPageHandler() {
        reset();
        setClick(true);
    }

    function signinPasswordHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch({ type: "SET_PASSWORD_CLICK", payload: true });
    }

    function passwordSigninHandler(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: "SET_PASSWORD", payload: e.target.value });
    }

    useEffect(() => {
        const auth = getAuth(app);
        if (state.passwordClick && state.passwordValid) {
            setLoading(true);
            signInWithEmailAndPassword(
                auth,
                state.inputMail,
                state.inputPassword
            )
                .then((userCredentials) => {
                    const user = userCredentials.user;
                    console.log(user);
                    if (user) {
                        setLoading(false);
                        router.push("/");
                        reset();
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode);

                    setLoading(false);
                    if (
                        errorCode === "auth/wrong-password" ||
                        errorCode === "auth/user-not-found"
                    ) {
                        dispatch({
                            type: "SET_PASSWORD_VALID",
                            payload: false,
                        });
                        dispatch({ type: "SET_PASSWORD", payload: "" });
                        dispatch({
                            type: "SET_PASSWORD_ERROR",
                            payload: {
                                errorMessage:
                                    "Your account or password is incorrect",
                                errorStatus: true,
                            },
                        });
                        dispatch({
                            type: "SET_PASSWORD_CLICK",
                            payload: false,
                        });
                    }
                });
        }
    }, [state.passwordClick, state.passwordValid]);

    return (
        <>
            <Head>
                <title>Sign in to your Microsoft account</title>
            </Head>
            {click && <Signin />}
            {!click && (
                <SignLayout onSubmitHandler={signinPasswordHandler}>
                    <div className={loading ? classes.loading : ""}></div>
                    <PasswordWrapper
                        additionalInfo={
                            <p className={classes.title}>Enter password</p>
                        }
                        error={state.passwordError}
                        previousPageHandler={previousPageHandler}
                        email={state.inputMail}
                    />
                    <Input
                        className={`${classes.password} ${
                            state.passwordError.errorStatus
                                ? classes.errorBorder
                                : ""
                        }`}
                        type="password"
                        onChange={passwordSigninHandler}
                        value={state.inputPassword}
                        placeholder="Create password"
                        ref={inputRef}
                    />
                    <p className={classes.forgotPassword}>Forgot password?</p>
                    <Button className={classes.btn} title="Sign in" />
                </SignLayout>
            )}
        </>
    );
}

export default SigninContinue;
