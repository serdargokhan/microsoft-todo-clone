import wrapperClass from "styles/Pages/Sections.module.scss";
import classes from "styles/Pages/Completed.module.scss";

function Completed() {
    return (
        <div className={wrapperClass.container}>
            <div className={wrapperClass.topFlex}>
                <p className={classes.title}>Completed</p>
                <div className={wrapperClass["mdl2-dots"]}>
                    <span className={wrapperClass.listTooltip}>
                        List options menu
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Completed;
