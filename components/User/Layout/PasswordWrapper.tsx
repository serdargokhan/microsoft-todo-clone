import Image from "next/image";
// CSS
import classes from "styles/Signup.module.scss";
// Components
import ErrorMessage from "components/UI/ErrorMessage";
// Images
import LeftArrow from "public/User/leftArrow.svg";

interface Props {
    email: string;
    error: {
        errorStatus: boolean;
        errorMessage: string;
    };
    additionalInfo: JSX.Element;
    previousPageHandler: () => void;
}

function PasswordWrapper({
    previousPageHandler,
    email,
    additionalInfo,
    error,
}: Props) {
    return (
        <>
            <div className={classes.emailInfoWrapper}>
                <div onClick={previousPageHandler} className={classes.arrow}>
                    <Image src={LeftArrow} />
                </div>
                <span className={classes.emailInfo}>{email}</span>
            </div>
            {additionalInfo}
            {error.errorStatus && (
                <ErrorMessage
                    className={classes.errorMessage}
                    description={error.errorMessage}
                />
            )}
        </>
    );
}

export default PasswordWrapper;
