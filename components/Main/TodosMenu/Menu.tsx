import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ObjectID } from "bson";
// CSS
import classes from "styles/Menu/Menu.module.scss";
// Components
import MenuLayout from "./MenuLayout";
import Input from "components/utils/Input";
import ClickMenu from "../RightClick/ClickMenu";
// Images
import InfiniteIcon from "public/Menu/Infinite.svg";
import CompleteIcon from "public/Menu/Complete.svg";
import GroupIcon from "public/Menu/Group.svg";

type Data = {
    _id: ObjectID;
    customList: {
        _id: ObjectID;
        listName: string;
    }[];
}[];

interface Point {
    x: number;
    y: number;
}

function Menu() {
    const [inputText, setInputText] = useState("");
    const [list, setList] = useState("");
    const [submit, setSubmit] = useState(false);
    const [toggle, setToggle] = useState(true);
    const [reqFinished, setReqFinished] = useState(false);
    const [data, setData] = useState<Data>([]);
    const [points, setPoints] = useState<Point>({
        x: 0,
        y: 0,
    });
    const [show, setShow] = useState(false);
    const [id, setId] = useState("");

    const router = useRouter();

    function addNewListHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmit(true);
        setList(inputText);
        setInputText("");
    }

    function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setInputText(e.target.value);
    }

    useEffect(() => {
        async function addNewList() {
            try {
                await fetch("/api/todos", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        _id: localStorage.getItem("userUid"),
                        createdAt: new Date().toLocaleString(),
                        listName: list ? list : "Untitled List",
                        type: "ADD_LIST",
                    }),
                });

                setReqFinished(true);
                setSubmit(false);
            } catch (err) {
                console.error(err);
            }
        }
        if (submit) addNewList();
    }, [submit]);

    useEffect(() => {
        async function addNewList() {
            try {
                const res = await fetch("/api/todos");
                const data = await res.json();
                setData(data);
                setReqFinished(false);
            } catch (err) {
                console.error(err);
            }
        }
        addNewList();
    }, [reqFinished]);

    useEffect(() => {
        document.addEventListener("click", () => {
            setShow(false);
        });

        return () => {
            document.removeEventListener("click", () => {});
        };
    }, []);

    function toggleHandler() {
        setToggle((prev) => !prev);
    }

    function listsClickHandler(e: React.MouseEvent<HTMLDivElement>) {
        console.log(e.currentTarget.id);
    }

    function rightClickHandler(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        router.push(`/tasks/${e.currentTarget.id}`);
        setId(e.currentTarget.id);
        setPoints({ x: e.pageX, y: e.pageY });
        setShow(true);
    }

    return (
        <>
            {show && (
                <div
                    style={{
                        position: "absolute",
                        zIndex: "1000",
                        top: points.y,
                        left: points.x,
                    }}
                >
                    <ClickMenu id={id} />
                </div>
            )}
            {!toggle && (
                <span
                    onClick={toggleHandler}
                    className={
                        !toggle
                            ? `${classes["mdl2-navbar"]} ${classes.toggle}`
                            : classes["mdl2-navbar"]
                    }
                ></span>
            )}
            {toggle && (
                <MenuLayout onToggle={setToggle}>
                    <div className={classes.container}>
                        <span
                            onClick={toggleHandler}
                            className={classes["mdl2-navbar"]}
                        ></span>
                        <div className={classes.flex}>
                            <Link href="/tasks/myday">
                                <div
                                    className={
                                        router.pathname === "/tasks/myday"
                                            ? classes.activeMyday
                                            : ""
                                    }
                                >
                                    <span
                                        className={classes["mdl2-brightness"]}
                                    ></span>
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
                                    <span
                                        className={classes["mdl2-favorite"]}
                                    ></span>
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
                                    <span
                                        className={classes["mdl2-calendar"]}
                                    ></span>
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
                                        router.pathname ===
                                        "/tasks/assigned-to-me"
                                            ? classes.activeAssigned
                                            : ""
                                    }
                                >
                                    <span
                                        className={classes["mdl2-contact"]}
                                    ></span>
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
                                    <span
                                        className={classes["mdl2-home"]}
                                    ></span>
                                    <p>Tasks</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <form
                        onSubmit={addNewListHandler}
                        className={classes.addList}
                    >
                        {data &&
                            data.map((item) => {
                                if (
                                    item._id.toString() ===
                                    localStorage.getItem("userUid")
                                ) {
                                    return item.customList?.map((el, index) => {
                                        return (
                                            <div
                                                style={{ width: "100%" }}
                                                key={index}
                                            >
                                                <Link
                                                    href={`/tasks/${el._id.toString()}`}
                                                >
                                                    <div
                                                        className={
                                                            router.query
                                                                .listId ===
                                                            `${el._id}`
                                                                ? `${classes.flexCenter} ${classes.activeLists}`
                                                                : classes.flexCenter
                                                        }
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                        onClick={
                                                            listsClickHandler
                                                        }
                                                        onContextMenu={
                                                            rightClickHandler
                                                        }
                                                        id={el._id.toString()}
                                                    >
                                                        <span
                                                            className={
                                                                classes[
                                                                    "mdl2-bulletList"
                                                                ]
                                                            }
                                                        ></span>
                                                        <p
                                                            className={
                                                                classes.lists
                                                            }
                                                        >
                                                            {el.listName}
                                                        </p>
                                                    </div>
                                                </Link>
                                            </div>
                                        );
                                    });
                                }
                            })}

                        <div className={classes.outer}>
                            <div
                                className={`${classes.flexCenter} ${classes.shrink}`}
                            >
                                <label
                                    htmlFor="newList"
                                    className={classes["mdl2-add"]}
                                ></label>
                                <Input
                                    type="text"
                                    className={classes.input}
                                    placeholder="New list"
                                    onChange={inputChangeHandler}
                                    value={inputText}
                                    id="newList"
                                />
                            </div>
                            <div className={classes.group}>
                                <Image src={GroupIcon} />
                            </div>
                        </div>
                    </form>

                    <div className={classes.footer}>
                        <span className={classes["mdl2-mail"]}></span>
                        <span
                            className={classes["mdl2-calendar-bottom"]}
                        ></span>
                        <span className={classes["mdl2-people"]}></span>
                        <span className={classes["mdl2-attach"]}></span>
                        <span className={classes["mdl2-todo"]}></span>
                    </div>
                </MenuLayout>
            )}
        </>
    );
}

export default Menu;
