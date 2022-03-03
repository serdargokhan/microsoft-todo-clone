import { useEffect } from "react";
import type { GetStaticPropsResult, NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
// Context
import { useCtx } from "components/context/SettingsContext";
// Components
import Navbar from "components/Navbar/Navbar";
// Images
import TodoIcon from "public/TodoIcon.svg";

const Home: NextPage = ({ data }: any) => {
    const { setEmail } = useCtx();

    const router = useRouter();

    useEffect(() => {
        setEmail(data);
    }, [data]);

    // localStorage is not defined on the server side
    useEffect(() => {
        const accessToken = localStorage.getItem("userUid");
        if (!accessToken) router.push("/signin");
        const timeOut = setTimeout(() => {
            localStorage.removeItem("userUid");
        }, 1000 * 60 * 60);

        return () => clearTimeout(timeOut);
    }, []);

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

interface PageProps {
    data: {
        _id: string;
        email: string;
    }[];
}

export async function getStaticProps(): Promise<
    GetStaticPropsResult<PageProps>
> {
    const res = await fetch("http://localhost:3000/api/todos");
    const data = await res.json();

    return {
        props: {
            data: data,
        },
    };
}
