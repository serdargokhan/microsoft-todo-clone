import { useState } from "react";
// CSS
import classes from "styles/Pages/Myday.module.scss";
import wrapperClass from "styles/Pages/Sections.module.scss";
// Hooks
import useWindowDimension from "components/hooks/useWindowDimension";
// utils
import { whichDay, whichMonth } from "components/utils/Date";
// Components
import Options from "../Options/OptionsMenu";

function MyDay() {
    const [optionModal, setOptionModal] = useState(false);
    const [sortModal, setSortModal] = useState(false);

    function optionsClickHandler() {
        setOptionModal((prev) => !prev);
    }

    function sortClickHandler() {
        setSortModal((prev) => !prev);
    }

    const width = useWindowDimension();

    const smallSize = width <= 768;

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.leftFlex}>
                    <p>My Day</p>
                    <div className={wrapperClass.modal}>
                        <div
                            onClick={optionsClickHandler}
                            className={wrapperClass["mdl2-dots"]}
                        >
                            <span className={wrapperClass.listTooltip}>
                                List options menu
                            </span>
                        </div>
                        {optionModal && (
                            <Options
                                title="List options"
                                onCloseModal={setOptionModal}
                                listStatus={true}
                                sortStatus={false}
                            />
                        )}
                    </div>
                </div>

                <p
                    className={classes.date}
                >{`${whichDay()}, ${whichMonth()} ${new Date().getDate()}`}</p>
            </div>

            <div className={classes.right}>
                <div className={classes.modal}>
                    <div onClick={sortClickHandler} className={classes.flex}>
                        {!smallSize && (
                            <span className={classes.sortTooltip}>Sort</span>
                        )}
                        <span className={wrapperClass["mdl2-sort"]}></span>
                        {!smallSize && <span>Sort</span>}
                    </div>
                    {sortModal && (
                        <Options
                            title="Sort by"
                            onCloseModal={setSortModal}
                            listStatus={false}
                            sortStatus={true}
                        />
                    )}
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
