import wrapperClass from "styles/Sections.module.scss";
import classes from "styles/Planned.module.scss";

function Planned() {
    return (
        <div className={wrapperClass.container}>
            <div className={wrapperClass.topFlex}>
                <p className={classes.title}>Planned</p>
                <span className={wrapperClass["mdl2-dots"]}></span>
            </div>
        </div>
    );
}

export default Planned;
