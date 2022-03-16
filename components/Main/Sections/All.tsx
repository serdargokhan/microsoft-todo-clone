import { useState } from "react";
// CSS
import wrapperClass from "styles/Pages/Sections.module.scss";
import classes from "styles/Pages/All.module.scss";
// Components
import Options from "../Options/OptionsMenu";

function All() {
    const [optionModal, setOptionModal] = useState(false);

    function optionsClickHandler() {
        setOptionModal((prev) => !prev);
    }

    return (
        <div className={wrapperClass.container}>
            <div className={wrapperClass.topFlex}>
                <p className={classes.title}>All</p>
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
                            title="Options"
                            theme={true}
                            onCloseModal={setOptionModal}
                            listStatus={true}
                            sortStatus={false}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default All;
