import wrapperClass from "styles/Sections.module.scss";
import classes from "styles/All.module.scss";

function All() {
    return (
        <div className={wrapperClass.container}>
            <div className={wrapperClass.topFlex}>
                <p className={classes.title}>All</p>
                <span className={wrapperClass["mdl2-dots"]}></span>
            </div>
        </div>
    );
}

export default All;
