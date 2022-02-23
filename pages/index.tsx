import Navbar from "components/Navbar/Navbar";
import type { NextPage } from "next";
import Head from "next/head";
import TodoIcon from "public/TodoIcon.svg";

const Home: NextPage = () => {
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
            <Navbar />
        </>
    );
};

export default Home;
