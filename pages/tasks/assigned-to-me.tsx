import Head from "next/head";
import React from "react";
import TodoIcon from "public/TodoIcon.svg";

function AssignedToMee() {
    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={TodoIcon.src}
                />
                <title>Assigned to me - To Do</title>
            </Head>
            <div style={{ float: "left" }}>assigned to me</div>
        </>
    );
}

export default AssignedToMee;
