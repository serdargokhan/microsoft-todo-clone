import React, { useRef, useState } from "react";
import Image from "next/image";
// CSS
import classes from "styles/AppLauncher.module.css";
// Components
import Input from "components/utils/Input";
import appList from "./Apps";

interface Props {
    onPrev: React.Dispatch<React.SetStateAction<boolean>>;
}

function AppLauncherContinue({ onPrev }: Props) {
    const [inputText, setInputText] = useState("");
    const [hover, setHover] = useState(false);
    const [index, setIndex] = useState("");

    function previousPage() {
        onPrev(false);
    }

    const inputRef = useRef<HTMLInputElement>(null);

    function focusHandler() {
        inputRef.current?.focus();
    }

    function filterAppsHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setInputText(e.target.value.trim());
    }

    function hoverStarted(i: string) {
        setHover(true);
        setIndex(i);
    }

    function hoverEnded() {
        setHover(false);
    }

    return (
        <section>
            <button
                onClick={previousPage}
                className={`${classes.office} ${classes.backButton}`}
            >
                <p className={classes["mdl2-arrowReverse"]}></p>
                <p className={classes.backText}>Back</p>
            </button>
            <div onClick={focusHandler} className={classes.searchContainer}>
                <span className={classes["mdl2-search"]}></span>
                <Input
                    type="text"
                    placeholder="Search all of your apps"
                    className={classes.appSearch}
                    ref={inputRef}
                    onChange={filterAppsHandler}
                />
            </div>
            <div className={classes.overflow}>
                {!inputText && (
                    <>
                        <h2 className={classes.smallTitle}>Microsoft 365</h2>
                        <ul className={classes.widerApps}>
                            {appList.map((item) => {
                                return (
                                    <li
                                        onMouseEnter={() => {
                                            hoverStarted(item.id);
                                        }}
                                        onMouseLeave={hoverEnded}
                                        key={item.id}
                                    >
                                        <Image
                                            src={item.img}
                                            width={26}
                                            height={26}
                                        />
                                        <p
                                            style={
                                                hover && index === item.id
                                                    ? { color: item.color }
                                                    : { color: "black" }
                                            }
                                        >
                                            {item.name}
                                        </p>
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                )}
                {inputText && (
                    <>
                        <h2 className={classes.smallTitle}>Microsoft 365</h2>
                        <ul className={classes.widerApps}>
                            {appList
                                .filter((item) =>
                                    item.name
                                        .toLowerCase()
                                        .includes(inputText.toLowerCase())
                                )
                                .map((item) => {
                                    return (
                                        <li
                                            onMouseEnter={() => {
                                                hoverStarted(item.id);
                                            }}
                                            onMouseLeave={hoverEnded}
                                            key={item.id}
                                        >
                                            <Image
                                                src={item.img}
                                                width={26}
                                                height={26}
                                            />
                                            <p
                                                style={
                                                    hover && index === item.id
                                                        ? { color: item.color }
                                                        : { color: "black" }
                                                }
                                            >
                                                {item.name}
                                            </p>
                                        </li>
                                    );
                                })}
                        </ul>
                    </>
                )}
            </div>
        </section>
    );
}

export default AppLauncherContinue;
