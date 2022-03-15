import Image from "next/image";
// CSS
import classes from "styles/Pages/Assignedtome.module.scss";
import wrapperClass from "styles/Pages/Sections.module.scss";
// Images
import AssignedIcon from "public/Assigned.svg";

function AssignedToMe() {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.topFlex}>
                    <p>Assigned to me</p>
                    <div className={wrapperClass["mdl2-dots"]}>
                        <span className={wrapperClass.listTooltip}>
                            List options menu
                        </span>
                    </div>
                </div>
            </div>
            <div className={classes.bottomFlex}>
                <Image src={AssignedIcon} width={250} height={250} />
                <p>Task assigned to you in To Do or Planner show up here</p>
            </div>
        </>
    );
}

export default AssignedToMe;
