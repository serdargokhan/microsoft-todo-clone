import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
// CSS
import classes from "styles/Layout/Options.module.scss";
// Components
import ListOptions from "./ListOptions";
import SortOptions from "./SortOptions";

interface Props {
    title: string;
    complete?: boolean;
    theme?: boolean;
    addedMyDay?: boolean;
    sortStatus: boolean;
    listStatus: boolean;
    onCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Options({
    title,
    complete,
    theme,
    onCloseModal,
    addedMyDay,
    listStatus,
    sortStatus,
}: Props) {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const closeOptionHandler = (e: any) => {
            if (!divRef.current || divRef.current!.contains(e.target)) {
                return;
            }
            onCloseModal(false);
        };

        document.addEventListener("click", closeOptionHandler);

        return () => document.removeEventListener("click", closeOptionHandler);
    }, [divRef]);

    const router = useRouter();

    return (
        <div
            ref={divRef}
            className={`${
                sortStatus ? classes.sortOptionMenu : classes.listOptionMenu
            } ${
                router.pathname === "/tasks/inbox" && sortStatus
                    ? classes.moveLeft
                    : ""
            }`}
        >
            <p className={classes.title}>{title}</p>
            {listStatus && <ListOptions complete={complete} theme={theme} />}
            {sortStatus && <SortOptions addedMyDay={addedMyDay} />}
        </div>
    );
}

export default Options;
