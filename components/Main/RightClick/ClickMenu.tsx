import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// CSS
import classes from "styles/Layout/Options.module.scss";

interface Props {
    id: string;
}

function ClickMenu({ id }: Props) {
    const [confirm, setConfirm] = useState(false);

    const router = useRouter();

    function deleteHandler() {
        setConfirm(true);
    }

    useEffect(() => {
        async function deleteList() {
            try {
                await fetch("/api/todos", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        uid: localStorage.getItem("userUid"),
                        id: id,
                        type: "REMOVE_LIST",
                    }),
                });
                router.push("/tasks/myday");
            } catch (err) {
                console.error(err);
            }
        }
        if (confirm) deleteList();
    }, [confirm]);

    return (
        <div className={classes.wrapper}>
            <div className={classes.listFlex}>
                <div className={classes.childFlex}>
                    <span className={classes["mdl2-share"]}></span>
                    <span className={classes.info}>Share list</span>
                </div>
                <div className={classes.childFlex}>
                    <span className={classes["mdl2-duplicate"]}></span>
                    <span className={classes.info}>Duplicate list</span>
                </div>
                <div className={`${classes.childFlex} ${classes.border}`}>
                    <span className={classes["mdl2-printer"]}></span>
                    <span className={classes.info}>Print list</span>
                </div>

                <div
                    onClick={deleteHandler}
                    className={`${classes.childFlex} ${classes.delete}`}
                >
                    <span className={classes["mdl2-delete"]}></span>
                    <span className={classes.info}>Delete list</span>
                </div>
            </div>
        </div>
    );
}

export default ClickMenu;
