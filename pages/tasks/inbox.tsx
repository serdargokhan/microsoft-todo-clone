import Head from "next/head";
import React from "react";
import TodoIcon from "public/TodoIcon.svg";

function İnbox() {
    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={TodoIcon.src}
                />
                <title>Tasks - To Do</title>
            </Head>
            <div style={{ float: "left" }}>tasks</div>
        </>
    );
}

export default İnbox;
