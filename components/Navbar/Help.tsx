import React from "react";
// CSS
import classes from "styles/Help.module.scss";
// Components
import Button from "components/utils/Button";
import BgLayout from "./BgLayout";

interface Props {
    onCloseHelp: React.Dispatch<React.SetStateAction<boolean>>;
}

function Help({ onCloseHelp }: Props) {
    function closeHandler() {
        onCloseHelp((prev) => !prev);
    }

    return (
        <BgLayout>
            <div className={classes.container}>
                <div className={classes.wideFlex}>
                    <h4>Help</h4>
                    <span
                        onClick={closeHandler}
                        className={classes["mdl2-cancel"]}
                    ></span>
                </div>
                <Button className={classes.btnLink} title="Get support" />
                <div className={classes.flex}>
                    <Button className={classes.btn} title="Sync" />
                    <p>Up to date</p>
                </div>
            </div>
        </BgLayout>
    );
}

export default Help;
