import { useState } from "react";
import Image from "next/image";
// CSS
import classes from "styles/Pages/Assignedtome.module.scss";
import wrapperClass from "styles/Pages/Sections.module.scss";
// Components
import Options from "../Options/OptionsMenu";
// Images
import AssignedIcon from "public/Assigned.svg";

function AssignedToMe() {
    const [optionModal, setOptionModal] = useState(false);

    function optionsClickHandler() {
        setOptionModal((prev) => !prev);
    }

    return (
        <>
            <div className={classes.container}>
                <div className={classes.topFlex}>
                    <p>Assigned to me</p>
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
                                complete={true}
                                onCloseModal={setOptionModal}
                                listStatus={true}
                                sortStatus={false}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className={classes.bottomFlex}>
                <Image src={AssignedIcon} width={250} height={250} />
                <p>Tasks assigned to you in To Do or Planner show up here</p>
            </div>
        </>
    );
}

export default AssignedToMe;
