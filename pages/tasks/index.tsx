import type { GetStaticPropsResult, NextPage } from "next";
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

interface PageProps {
    data: {
        _id: string;
        email: string;
        settings: { _id: string; check: boolean; header: string }[];
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
