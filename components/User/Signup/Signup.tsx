import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
// Context
import { useCtx } from "components/context/AuthContext";
// CSS
import classes from "styles/Signup.module.css";
// Components
import Input from "components/utils/Input";
import SignupContinue from "./SignupContinue";
import SignLayout from "components/User/Layout/SignLayout";
import EmailWrapper from "components/User/Layout/EmailWrapper";

function Signup() {
    const { dispatch, state } = useCtx();

    const inputRef = useRef<HTMLInputElement>(null);

    // Focus to the input field on mount
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    // Event handlers
    function emailSignupHandler(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: "SET_EMAIL", payload: e.target.value });
    }

    function signupEmailSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
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
                <title>Create account</title>
            </Head>
            {!state.nextPage && (
                <SignLayout onSubmitHandler={signupEmailSubmitHandler}>
                    <EmailWrapper
                        error={state.emailError}
                        emailTitle="Create account"
                    >
                        <Input
                            className={`${classes.email} ${
                                state.emailError.errorStatus
                                    ? classes.errorBorder
                                    : ""
                            }`}
                            type="text"
                            onChange={emailSignupHandler}
                            value={state.inputMail}
                            placeholder="someone@example.com"
                            ref={inputRef}
                        />
                        <Link href="/signin">
                            <a onClick={resetError} className={classes.link}>
                                Use your email instead
                            </a>
                        </Link>
                    </EmailWrapper>
                </SignLayout>
            )}
            {state.nextPage && <SignupContinue />}
        </>
    );
}

export default Signup;
