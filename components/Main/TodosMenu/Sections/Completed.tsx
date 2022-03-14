import wrapperClass from "styles/Sections.module.scss";
import classes from "styles/Completed.module.scss";

function Completed() {
    return (
        <div className={wrapperClass.container}>
            <div className={wrapperClass.topFlex}>
                <p className={classes.title}>Completed</p>
                <span className={wrapperClass["mdl2-dots"]}></span>
            </div>
        </div>
    );
}

export default Completed;
