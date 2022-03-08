import Head from "next/head";
import React from "react";
import TodoIcon from "public/TodoIcon.svg";

interface Props {}

function Planned(props: Props) {
    const {} = props;

    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={TodoIcon.src}
                />
                <title>Planned - To Do</title>
            </Head>
            <div style={{ float: "left" }}>Planned</div>
        </>
    );
}

export default Planned;
