import useWindowDimension from "components/hooks/useWindowDimension";
import wrapperClass from "styles/Pages/Sections.module.scss";
import classes from "styles/Pages/Tasks.module.scss";

function Tasks() {
    const width = useWindowDimension();

    const smallSize = width <= 768;

    return (
        <div className={classes.container}>
            <div className={wrapperClass.topFlex}>
                <p className={classes.title}>Tasks</p>
                <div className={wrapperClass["mdl2-dots"]}>
                    <span className={wrapperClass.listTooltip}>
                        List options menu
                    </span>
                </div>
            </div>

            <div className={wrapperClass.flex}>
                {!smallSize && (
                    <span className={wrapperClass.sortTooltip}>Sort</span>
                )}
                <span className={wrapperClass["mdl2-sort"]}></span>
                {!smallSize && <span>Sort</span>}
            </div>
        </div>
    );
}

export default Tasks;
