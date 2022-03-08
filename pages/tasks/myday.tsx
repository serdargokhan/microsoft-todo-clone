import Head from "next/head";
import React from "react";
import TodoIcon from "public/TodoIcon.svg";

interface Props {}

function Myday(props: Props) {
    const {} = props;

    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={TodoIcon.src}
                />
                <title>My Day - To Do</title>
            </Head>
            <div style={{ float: "left" }}>My Day</div>
        </>
    );
}

export default Myday;
