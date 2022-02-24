import React, { ReactNode } from "react";
import Image from "next/image";
// CSS
import classes from "styles/Signup.module.scss";
// Images
import MicrosoftLogo from "public/microsoftLogo.svg";

interface Props {
    children: ReactNode;
    onSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

function SignLayout({ children, onSubmitHandler }: Props) {
    return (
        <div className={classes.background}>
            <form onSubmit={onSubmitHandler} className={classes.container}>
                <div className={classes.logoImage}>
                    <Image src={MicrosoftLogo} alt="logo" />
                </div>
                <div className={classes.pageAnimation}>{children}</div>
            </form>
        </div>
    );
}

export default SignLayout;
