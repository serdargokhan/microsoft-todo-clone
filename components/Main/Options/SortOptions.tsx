// CSS
import classes from "styles/Layout/Options.module.scss";

interface Props {
    addedMyDay?: boolean;
}

function SortOptions({ addedMyDay }: Props) {
    return (
        <div className={classes.listFlex}>
            <div className={classes.childFlex}>
                <span className={classes["mdl2-importance"]}></span>
                <span className={classes.info}>Importance</span>
            </div>
            <div className={classes.childFlex}>
                <span className={classes["mdl2-calendar"]}></span>
                <span className={classes.info}>Due date</span>
            </div>
            {addedMyDay && (
                <div className={classes.childFlex}>
                    <span className={classes["mdl2-light"]}></span>
                    <span className={classes.info}>Added to My Day</span>
                </div>
            )}
            <div className={classes.childFlex}>
                <span className={classes["mdl2-sort"]}></span>
                <span className={classes.info}>Alphabetically</span>
            </div>

            <div className={classes.childFlex}>
                <span className={classes["mdl2-date"]}></span>
                <span className={classes.info}>Creation date</span>
            </div>
        </div>
    );
}

export default SortOptions;
