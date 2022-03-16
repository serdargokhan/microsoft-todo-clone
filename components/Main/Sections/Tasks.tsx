import { useState } from "react";
// CSS
import wrapperClass from "styles/Pages/Sections.module.scss";
import classes from "styles/Pages/Tasks.module.scss";
// Hooks
import useWindowDimension from "components/hooks/useWindowDimension";
// Components
import Options from "../Options/OptionsMenu";

function Tasks() {
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
            <div className={wrapperClass.topFlex}>
                <p className={classes.title}>Tasks</p>
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
                            theme={true}
                            onCloseModal={setOptionModal}
                            listStatus={true}
                            sortStatus={false}
                        />
                    )}
                </div>
            </div>

            <div className={wrapperClass.modal}>
                <div onClick={sortClickHandler} className={wrapperClass.flex}>
                    {!smallSize && (
                        <span className={wrapperClass.sortTooltip}>Sort</span>
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
                        addedMyDay={true}
                    />
                )}
            </div>
        </div>
    );
}

export default Tasks;
