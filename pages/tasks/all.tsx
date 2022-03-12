import Head from "next/head";
import React from "react";
import TodoIcon from "public/TodoIcon.svg";

function All() {
    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={TodoIcon.src}
                />
                <title>All - To Do</title>
            </Head>
            <div style={{ float: "left" }}>all</div>
        </>
    );
}

export default All;
