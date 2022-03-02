import Button from "components/utils/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// CSS
import classes from "styles/Settings.module.scss";
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
    const [changes, setChanges] = useState<
        { _id: string; check: boolean; header: string }[]
    >([]);
    const [click, setClick] = useState(false);
    function closeHandler() {
        onCloseSettings(false);
    }

    useEffect(() => {
        async function getSettings() {
            const res = await fetch("/api/settings");
            const data = await res.json();
            if (data) setChanges(data);
        }
        getSettings();
    }, [click]);

    function detectClick(e: boolean) {
        setClick(e);
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
                <div className={classes.minh}>
                    <p className={classes.section}>General</p>

                    {changes.map((item) => {
                        return (
                            <SettingsComp
                                item={item}
                                key={item._id}
                                onClick={detectClick}
                            />
                        );
                    })}
                </div>

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

export default React.memo(Settings);
