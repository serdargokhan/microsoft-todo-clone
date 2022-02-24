import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
// CSS
import classes from "styles/Signup.module.scss";
// Context
import { useCtx } from "components/context/AuthContext";
// Components
import SignLayout from "components/User/Layout/SignLayout";
import Input from "components/utils/Input";
import SigninContinue from "./SigninContinue";
import EmailWrapper from "components/User/Layout/EmailWrapper";

function Signin() {
    const { dispatch, state } = useCtx();

    const inputRef = useRef<HTMLInputElement>(null);

    // Focus to the input field on mount
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    // Event handlers
    function emailSigninHandler(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: "SET_EMAIL", payload: e.target.value });
    }

    function signinEmailSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch({ type: "SET_EMAIL_CLICK", payload: true });
    }

    function resetError() {
        dispatch({ type: "SET_EMAIL_CLICK", payload: false });
        dispatch({
            type: "SET_EMAIL_ERROR",
            payload: { errorStatus: false, errorMessage: "" },
        });
    }

    return (
        <>
            <Head>
                <title>Sign in to your Microsoft account</title>
            </Head>
            {!state.nextPage && (
                <SignLayout onSubmitHandler={signinEmailSubmitHandler}>
                    <EmailWrapper error={state.emailError} emailTitle="Sign in">
                        <Input
                            className={`${classes.email} ${
                                state.emailError.errorStatus
                                    ? classes.errorBorder
                                    : ""
                            }`}
                            type="text"
                            onChange={emailSigninHandler}
                            value={state.inputMail}
                            placeholder="Email, phone, or Skype"
                            ref={inputRef}
                        />
                        <div className={classes.gotoSignup}>
                            <p>No account?</p>
                            <Link href="/signup">
                                <a
                                    onClick={resetError}
                                    className={classes.link}
                                >
                                    Create one!
                                </a>
                            </Link>
                        </div>
                    </EmailWrapper>
                </SignLayout>
            )}
            {state.nextPage && <SigninContinue />}
        </>
    );
}

export default Signin;
