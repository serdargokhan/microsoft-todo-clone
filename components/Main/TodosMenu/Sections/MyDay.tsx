import { useState } from "react";
// CSS
import classes from "styles/Pages/Myday.module.scss";
import wrapperClass from "styles/Pages/Sections.module.scss";
// Hooks
import useWindowDimension from "components/hooks/useWindowDimension";
// utils
import { whichDay, whichMonth } from "components/utils/Date";
// Components
import ListOptions from "./ListOptions";

function MyDay() {
    const [click, setClick] = useState(false);

    const width = useWindowDimension();

    const smallSize = width <= 768;

    function listOptionsClickHandler() {
        setClick((prev) => !prev);
    }

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.leftFlex}>
                    <p>My Day</p>
                    <div
                        onClick={listOptionsClickHandler}
                        className={wrapperClass["mdl2-dots"]}
                    >
                        <span className={wrapperClass.listTooltip}>
                            List options menu
                        </span>
                    </div>
                    {click && <ListOptions />}
                </div>

                <p
                    className={classes.date}
                >{`${whichDay()}, ${whichMonth()} ${new Date().getDate()}`}</p>
            </div>

            <div className={classes.right}>
                <div className={classes.flex}>
                    {!smallSize && (
                        <span className={classes.sortTooltip}>Sort</span>
                    )}
                    <span className={wrapperClass["mdl2-sort"]}></span>
                    {!smallSize && <span>Sort</span>}
                </div>
                <div className={classes.flex}>
                    {!smallSize && (
                        <span className={classes.suggestionsTooltip}>
                            Suggestions
                        </span>
                    )}
                    <span className={classes["mdl2-suggestions"]}></span>
                    {!smallSize && <span>Suggestions</span>}
                </div>
            </div>
        </div>
    );
}

export default MyDay;
