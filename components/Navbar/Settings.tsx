import Button from "components/utils/Button";
import Image from "next/image";
import React from "react";
// CSS
import classes from "styles/Settings.module.css";
// Components
import BgLayout from "./BgLayout";
import SettingsComp from "./SettingsComp";
// Images
import TwitterIcon from "public/Settings/Twitter.svg";
import FacebookIcon from "public/Settings/Facebook.svg";
import HeartIcon from "public/Settings/Heart.svg";

interface Props {
    onCloseSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

function Settings({ onCloseSettings }: Props) {
    function closeHandler() {
        onCloseSettings(false);
    }

    return (
        <BgLayout>
            <div className={classes.container}>
                <div className={classes.flex}>
                    <h4>Settings</h4>
                    <span
                        onClick={closeHandler}
                        className={classes["mdl2-cancel"]}
                    ></span>
                </div>
                <p className={classes.section}>General</p>
                <SettingsComp id="confirm" header="Confirm before deleting" />
                <SettingsComp id="add" header="Add new tasks on top" />
                <SettingsComp id="move" header="Move starred tasks to top" />
                <SettingsComp id="play" header="Play completion sound" />
                <SettingsComp id="click" header="Show right-click menus" />
                <SettingsComp
                    id="notification"
                    header="Turn on reminder notifications"
                />
                <SettingsComp
                    id="showImportant"
                    header="Show tasks that seem important in My Day"
                />
                <p className={classes.section}>My Day</p>
                <SettingsComp
                    id="potential"
                    header="Show potential tasks in My Day"
                />
                <SettingsComp
                    id="suggestions"
                    header="Show due tasks suggestions"
                />
                <p className={classes.section}>Smart Lists</p>
                <SettingsComp id="important" header="Important" />
                <SettingsComp id="planned" header="Planned" />
                <SettingsComp id="all" header="All" />
                <SettingsComp id="completed" header="Completed" />
                <SettingsComp id="assigned" header="Assigned to me" />
                <SettingsComp id="hide" header="Auto-hide empty  smart lists" />
                <p className={classes.section}>Connected Apps</p>
                <SettingsComp id="planner" header="Planner" />
                <SettingsComp id="flagged" header="Flagged email" />
                <p className={classes.section}>Connect</p>
                <div className={classes.footer}>
                    <Image src={TwitterIcon} width={24} height={24} />
                    <Button
                        title="Follow us on Twitter"
                        className={classes.btn}
                    />
                </div>
                <div className={classes.footer}>
                    <Image src={FacebookIcon} width={24} height={24} />
                    <Button
                        title="Like us on Facebook"
                        className={classes.btn}
                    />
                </div>
                <div className={classes.footer}>
                    <Image src={HeartIcon} width={24} height={24} />
                    <Button title="Spread the word" className={classes.btn} />
                </div>
            </div>
        </BgLayout>
    );
}

export default Settings;
