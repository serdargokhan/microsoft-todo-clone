import React, { useEffect, useState } from "react";
// Context
import { useCtx } from "components/context/SettingsContext";
// CSS
import classes from "styles/Navbar/Settings.module.scss";

interface Props {
    item: {
        _id: string;
        check: boolean;
        header: string;
    };
}

function SettingsComp({ item }: Props) {
    const [changes, setChanges] = useState<any>([]);
    const [click, setClick] = useState(false);
    const { setFetchChange } = useCtx();

    useEffect(() => {
        async function sendSettings() {
            try {
                await fetch(`/api/todos/`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        _id: localStorage.getItem("userUid"),
                        change: changes[item._id],
                        id: item._id,
                    }),
                });
                setFetchChange(true);
            } catch (err) {
                console.error(err);
            } finally {
                setFetchChange(false);
            }
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

            <label className={classes.toggle} htmlFor={item._id}>
                {
                    // @ts-ignore
                    item[item._id] ? "On" : "Off"
                }
            </label>
        </div>
    );
}

export default SettingsComp;
