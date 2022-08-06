import type { NextPage } from "next";
import Head from "next/head";
// Images
import TodoIcon from "public/TodoIcon.svg";

const Home: NextPage = ({ data }: any) => {
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
        </>
    );
};

export default Home;
