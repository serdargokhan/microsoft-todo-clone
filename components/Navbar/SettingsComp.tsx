import React, { useState } from "react";
import classes from "styles/Settings.module.css";

interface Props {
    id: string;
    header: string;
}

function SettingsComp({ id, header }: Props) {
    const [changes, setChanges] = useState({
        confirm: true,
        add: true,
        show: true,
        showImportant: true,
        click: true,
        move: true,
        play: true,
        notification: true,
        potential: true,
        suggestions: true,
        planned: true,
        all: true,
        completed: true,
        important: true,
        assigned: true,
        hide: false,
        planner: true,
        flagged: false,
    });

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setChanges({
            ...changes,
            [e.target.id]: e.target.checked,
        });
    }

    return (
        <div className={classes.align}>
            <label className={classes.block} htmlFor={id}>
                {header}
            </label>
            <input
                onChange={changeHandler}
                type="checkbox"
                // @ts-ignore
                checked={changes[id]}
                id={id}
                className={classes.check}
            />

            <label htmlFor={id}>
                {
                    // @ts-ignore
                    changes[id] ? "On" : "Off"
                }
            </label>
        </div>
    );
}

export default SettingsComp;
