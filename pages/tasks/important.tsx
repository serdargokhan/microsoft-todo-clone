import Head from "next/head";
import React from "react";
import TodoIcon from "public/TodoIcon.svg";

function İmportant() {
    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={TodoIcon.src}
                />
                <title>Important - To Do</title>
            </Head>
            <span style={{ float: "left" }}>Important</span>
        </>
    );
}

export default İmportant;
