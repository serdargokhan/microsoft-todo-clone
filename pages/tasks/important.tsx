import Head from "next/head";
import React from "react";
import TodoIcon from "public/TodoIcon.svg";

interface Props {}

function İmportant(props: Props) {
    const {} = props;

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
            <div style={{ float: "left" }}>Important</div>
        </>
    );
}

export default İmportant;
