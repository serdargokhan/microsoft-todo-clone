import wrapperClass from "styles/Sections.module.scss";
import classes from "styles/Important.module.scss";

function Important() {
    return (
        <div className={wrapperClass.container}>
            <div className={wrapperClass.topFlex}>
                <p className={classes.title}>Important</p>
                <span className={wrapperClass["mdl2-dots"]}></span>
            </div>
        </div>
    );
}

export default Important;
