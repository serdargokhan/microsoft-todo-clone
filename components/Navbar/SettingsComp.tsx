import React, { useEffect, useState } from "react";
import classes from "styles/Settings.module.scss";

interface Props {
    item: {
        _id: string;
        check: boolean;
        header: string;
    };
    onClick: (e: boolean) => void;
}

function SettingsComp({ item, onClick }: Props) {
    const [changes, setChanges] = useState<any>([]);
    const [click, setClick] = useState(false);

    useEffect(() => {
        onClick(click);
    }, [click]);

    useEffect(() => {
        async function sendSettings() {
            await fetch(`/api/settings/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    change: changes[item._id],
                    id: item._id,
                }),
            });
        }
        if (changes[item._id] !== undefined) sendSettings();
    }, [click]);

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setChanges({
            ...changes,
            [e.target.id]: e.target.checked,
        });
        setClick((prev) => !prev);
    }

    return (
        <div className={classes.align}>
            <label className={classes.block} htmlFor={item._id}>
                {item.header}
            </label>
            <input
                onChange={changeHandler}
                type="checkbox"
                // @ts-ignore
                checked={item[item._id] ? true : false}
                id={item._id}
                className={classes.check}
            />

            <label htmlFor={item._id}>
                {
                    // @ts-ignore
                    item[item._id] ? "On" : "Off"
                }
            </label>
        </div>
    );
}

export default SettingsComp;
