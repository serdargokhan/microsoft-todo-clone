import { useEffect, useState } from "react";
// CSS
import wrapperClass from "styles/Pages/Sections.module.scss";
import classes from "styles/Pages/CustomList.module.scss";
// Hooks
import useWindowDimension from "components/hooks/useWindowDimension";
import Options from "../Options/OptionsMenu";

function CustomList({ title }: any) {
    const [optionModal, setOptionModal] = useState(false);
    const [sortModal, setSortModal] = useState(false);

    const width = useWindowDimension();

    const smallSize = width <= 768;

    function optionsClickHandler() {
        setOptionModal((prev) => !prev);
    }

    function sortClickHandler() {
        setSortModal((prev) => !prev);
    }

    return (
        <div className={classes.container}>
            <div className={wrapperClass.topFlex}>
                <p className={classes.title}>{title} </p>
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
                            addedMyDay={true}
                        />
                    )}
                </div>
                <div className={classes.flex}>
                    {!smallSize && (
                        <span className={classes.shareTooltip}>Share</span>
                    )}
                    <span className={classes["mdl2-share"]}></span>
                    {!smallSize && <span>Share</span>}
                </div>
            </div>
        </div>
    );
}

export default CustomList;
