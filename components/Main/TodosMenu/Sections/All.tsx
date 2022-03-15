import wrapperClass from "styles/Pages/Sections.module.scss";
import classes from "styles/Pages/All.module.scss";

function All() {
    return (
        <div className={wrapperClass.container}>
            <div className={wrapperClass.topFlex}>
                <p className={classes.title}>All</p>
                <div className={wrapperClass["mdl2-dots"]}>
                    <span className={wrapperClass.listTooltip}>
                        List options menu
                    </span>
                </div>
            </div>
        </div>
    );
}

export default All;
