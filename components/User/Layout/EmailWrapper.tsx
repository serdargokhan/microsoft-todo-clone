import { ReactNode } from "react";
// CSS
import classes from "styles/Signup.module.scss";
// Components
import Button from "components/utils/Button";
import ErrorMessage from "components/UI/ErrorMessage";

interface Props {
    children: ReactNode;
    error: {
        errorStatus: boolean;
        errorMessage: string;
    };
    emailTitle: string;
}

function EmailWrapper({ children, error, emailTitle }: Props) {
    return (
        <>
            <p className={classes.title}>{emailTitle}</p>
            {error.errorStatus && (
                <ErrorMessage
                    className={classes.errorMessage}
                    description={error.errorMessage}
                />
            )}
            {children}
            <Button className={classes.btn} title="Next" />
        </>
    );
}

export default EmailWrapper;
