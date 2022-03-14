// CSS
import classes from "styles/Myday.module.scss";
// Hooks
import useWindowDimension from "components/hooks/useWindowDimension";
// utils
import { whichDay, whichMonth } from "components/utils/Date";

function MyDay() {
    const width = useWindowDimension();

    const smallSize = width <= 768;

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.leftFlex}>
                    <p>My Day</p>
                    <span className={classes["mdl2-dots"]}></span>
                </div>

                <p
                    className={classes.date}
                >{`${whichDay()}, ${whichMonth()} ${new Date().getDate()}`}</p>
            </div>

            <div className={classes.right}>
                <div className={classes.flex}>
                    <span className={classes["mdl2-sort"]}></span>
                    {!smallSize && <span>Sort</span>}
                </div>
                <div className={classes.flex}>
                    <span className={classes["mdl2-suggestions"]}></span>
                    {!smallSize && <span>Suggestions</span>}
                </div>
            </div>
        </div>
    );
}

export default MyDay;
