import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// CSS
import classes from "styles/Menu.module.scss";
// Components
import MenuLayout from "./MenuLayout";
import Input from "components/utils/Input";
// Images
import InfiniteIcon from "public/Menu/Infinite.svg";
import CompleteIcon from "public/Menu/Complete.svg";
import GroupIcon from "public/Menu/Group.svg";
import ListIcon from "public/Menu/BulletedList.svg";

function Menu() {
    const [inputText, setInputText] = useState("");
    const [list, setList] = useState("");
    const [submit, setSubmit] = useState(false);

    const router = useRouter();

    function addNewListHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmit((prev) => !prev);
        setList(inputText);
        setInputText("");
    }

    function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setInputText(e.target.value);
    }

    /*  useEffect(() => {
        async function addNewList() {
            try {
                await fetch("/api/lists", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        _id: localStorage.getItem("userUid"),
                        createdAt: new Date().toLocaleString(),
                        listName: inputText ? inputText : "Untitled List",
                    }),
                });
            } catch (err) {
                console.error(err);
            }
        }
        addNewList();
    }, [submit]); */

    return (
        <MenuLayout>
            <div className={classes.container}>
                <span className={classes["mdl2-navbar"]}></span>
                <div className={classes.flex}>
                    <Link href="/tasks/myday">
                        <div
                            className={
                                router.pathname === "/tasks/myday"
                                    ? classes.activeMyday
                                    : ""
                            }
                        >
                            <span className={classes["mdl2-brightness"]}></span>
                            <p>My Day</p>
                        </div>
                    </Link>
                    <Link href="/tasks/important">
                        <div
                            className={
                                router.pathname === "/tasks/important"
                                    ? classes.activeImportant
                                    : ""
                            }
                        >
                            <span className={classes["mdl2-favorite"]}></span>
                            <p>Important</p>
                        </div>
                    </Link>
                    <Link href="/tasks/planned">
                        <div
                            className={
                                router.pathname === "/tasks/planned"
                                    ? classes.activePlanned
                                    : ""
                            }
                        >
                            <span className={classes["mdl2-calendar"]}></span>
                            <p>Planned</p>
                        </div>
                    </Link>
                    <Link href="/tasks/all">
                        <div
                            className={
                                router.pathname === "/tasks/all"
                                    ? classes.activeAll
                                    : ""
                            }
                        >
                            <Image src={InfiniteIcon}></Image>
                            <p>All</p>
                        </div>
                    </Link>
                    <Link href="/tasks/completed">
                        <div
                            className={
                                router.pathname === "/tasks/completed"
                                    ? classes.activeCompleted
                                    : ""
                            }
                        >
                            <Image src={CompleteIcon}></Image>
                            <p>Completed</p>
                        </div>
                    </Link>
                    <Link href="/tasks/assigned-to-me">
                        <div
                            className={
                                router.pathname === "/tasks/assigned-to-me"
                                    ? classes.activeAssigned
                                    : ""
                            }
                        >
                            <span className={classes["mdl2-contact"]}></span>
                            <p>Assigned to me</p>
                        </div>
                    </Link>
                    <Link href="/tasks/inbox">
                        <div
                            className={
                                router.pathname === "/tasks/inbox"
                                    ? classes.activeTasks
                                    : ""
                            }
                        >
                            <span className={classes["mdl2-home"]}></span>
                            <p>Tasks</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Dynamic list adding will come here */}

            <form onSubmit={addNewListHandler} className={classes.addList}>
                <div className={classes.flexCenter}>
                    <Image src={ListIcon} width={20} height={20} />
                    <p className={classes.lists}>{list}</p>
                </div>
                <div className={classes.outer}>
                    <div className={classes.flexCenter}>
                        <span className={classes["mdl2-add"]}></span>
                        <Input
                            type="text"
                            className={classes.input}
                            placeholder="New list"
                            onChange={inputChangeHandler}
                            value={inputText}
                        />
                    </div>
                    <div className={classes.group}>
                        <Image src={GroupIcon} />
                    </div>
                </div>
            </form>

            <div className={classes.footer}>
                <span className={classes["mdl2-mail"]}></span>
                <span className={classes["mdl2-calendar-bottom"]}></span>
                <span className={classes["mdl2-people"]}></span>
                <span className={classes["mdl2-attach"]}></span>
                <span className={classes["mdl2-todo"]}></span>
            </div>
        </MenuLayout>
    );
}

export default Menu;
