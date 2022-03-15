import wrapperClass from "styles/Pages/Sections.module.scss";
import classes from "styles/Pages/Planned.module.scss";

function Planned() {
    return (
        <div className={wrapperClass.container}>
            <div className={wrapperClass.topFlex}>
                <p className={classes.title}>Planned</p>
                <div className={wrapperClass["mdl2-dots"]}>
                    <span className={wrapperClass.listTooltip}>
                        List options menu
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Planned;
