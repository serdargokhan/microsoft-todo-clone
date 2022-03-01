import React, { useEffect, useState } from "react";
import classes from "styles/Settings.module.scss";

interface Props {
    id: string;
    header: string;
}

function SettingsComp({ id, header }: Props) {
    /*     const [changes, setChanges] = useState({
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
    }); */
    const [changes, setChanges] = useState([
        {
            _id: "confirm",
            confirm: true,
        },
        {
            _id: "add",
            add: true,
        },
        {
            _id: "show",
            show: true,
        },
        {
            _id: "showImportant",
            showImportant: true,
        },
        {
            _id: "click",
            click: true,
        },
        {
            _id: "move",
            move: true,
        },
        {
            _id: "play",
            play: true,
        },
        {
            _id: "notification",
            notification: true,
        },
        {
            _id: "potential",
            potential: true,
        },
        {
            _id: "suggestions",
            suggestions: true,
        },
    ]);

    useEffect(() => {
        async function sendSettings() {
            await fetch("/api/settings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(changes),
            });
        }
        sendSettings();
    }, []);

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
