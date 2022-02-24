import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
// CSS
import classes from "styles/Signup.module.scss";
// Context
import { useCtx } from "components/context/AuthContext";
// Components
import Button from "components/utils/Button";
import Input from "components/utils/Input";
import Signup from "./Signup";
import SignLayout from "components/User/Layout/SignLayout";
import PasswordWrapper from "components/User/Layout/PasswordWrapper";
// Firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "components/firebase/Firebase";

function SignupContinue() {
    const [showPassword, setShowPassword] = useState(false);
    const [click, setClick] = useState(false);
    const [loading, setLoading] = useState(false);

    const { dispatch, state } = useCtx();

    const router = useRouter();

    const inputRef = useRef<HTMLInputElement>(null);

    // Focus to the input field on mount
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    function passwordSignupHandler(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: "SET_PASSWORD", payload: e.target.value });
    }

    function signupPasswordSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch({ type: "SET_PASSWORD_CLICK", payload: true });
    }

    function showPasswordHandler() {
        setShowPassword((prev) => !prev);
    }

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

    function previousPageHandler() {
        reset();
        setClick(true);
    }

    useEffect(() => {
        const auth = getAuth(app);
        if (state.passwordClick && state.passwordValid) {
            setLoading(true);
            createUserWithEmailAndPassword(
                auth,
                state.inputMail,
                state.inputPassword
            )
                .then((userCredentials) => {
                    const user = userCredentials.user;
                    console.log(user);
                    if (user) {
                        setLoading(false);
                        router.push("/signin");
                        reset();
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    setLoading(false);
                    if (errorCode === "auth/email-already-in-use") {
                        dispatch({
                            type: "SET_PASSWORD_VALID",
                            payload: false,
                        });
                        dispatch({ type: "SET_PASSWORD", payload: "" });
                        dispatch({
                            type: "SET_PASSWORD_ERROR",
                            payload: {
                                errorMessage:
                                    "This email address is already exists",
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
                <title>Create account</title>
            </Head>
            {click && <Signup />}
            {!click && (
                <SignLayout onSubmitHandler={signupPasswordSubmitHandler}>
                    <div className={loading ? classes.loading : ""}></div>
                    <PasswordWrapper
                        additionalInfo={
                            <>
                                <p className={classes.title}>
                                    Create a password
                                </p>
                                <p className={classes.description}>
                                    Enter the password you would like to use
                                    with your account.
                                </p>
                            </>
                        }
                        email={state.inputMail}
                        error={state.passwordError}
                        previousPageHandler={previousPageHandler}
                    />
                    <Input
                        className={`${classes.password} ${
                            state.passwordError.errorStatus
                                ? classes.errorBorder
                                : ""
                        }`}
                        type={showPassword ? "text" : "password"}
                        onChange={passwordSignupHandler}
                        value={state.inputPassword}
                        placeholder="Create password"
                        ref={inputRef}
                    />
                    <div className={classes.checkboxContainer}>
                        <Input
                            className={classes.checkbox}
                            type="checkbox"
                            onChange={showPasswordHandler}
                        />
                        <label className={classes.checkboxDescription}>
                            Show password
                        </label>
                    </div>
                    <div className={classes.checkboxContainer}>
                        <Input className={classes.checkbox} type="checkbox" />
                        <label className={classes.checkboxDescription}>
                            I would like information, tips, and offers about
                            Microsoft products and services.
                        </label>
                    </div>
                    <p className={classes.info}>
                        Choosing <span className={classes.strong}>Next</span>{" "}
                        means that you agree to the{" "}
                        <span className={classes.infoColor}>
                            Microsoft Services Agreement
                        </span>{" "}
                        and{" "}
                        <span className={classes.infoColor}>
                            privacy and cookies statement.
                        </span>
                    </p>
                    <Button className={classes.btn} title="Next" />
                </SignLayout>
            )}
        </>
    );
}

export default SignupContinue;
