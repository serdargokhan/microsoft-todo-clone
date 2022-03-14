import wrapperClass from "styles/Sections.module.scss";
import classes from "styles/Tasks.module.scss";

function Tasks() {
    return (
        <div className={wrapperClass.container}>
            <div className={wrapperClass.topFlex}>
                <p className={classes.title}>Tasks</p>
                <span className={wrapperClass["mdl2-dots"]}></span>
            </div>
        </div>
    );
}

export default Tasks;
