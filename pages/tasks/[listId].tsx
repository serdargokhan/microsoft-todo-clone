import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { ParsedUrlQuery } from "querystring";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
// Components
import CustomList from "components/Main/Sections/CustomList";
// Images
import TodoIcon from "public/TodoIcon.svg";

interface Props {
    id: string;
    url: ParsedUrlQuery;
    data: {}[];
}

function CustomListsPages({ id, data, url }: Props) {
    const [head, setHead] = useState("");

    useEffect(() => {
        data.map((item: any) => {
            if (item._id == id) {
                return item.customList.map((el: any) => {
                    if (el._id === url.listId) setHead(el.listName);
                });
            }
        });
    }, [data]);

    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={TodoIcon.src}
                />
                <title>{head} - To Do</title>
            </Head>
            <CustomList title={head} />
        </>
    );
}

export default CustomListsPages;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { req, res } = context;
    const uid = getCookie("uid", { req, res });

    const url = context.params;

    const BASE_URL =
        process.env.NODE_ENV === "development"
            ? "http://localhost:3000/api/todos"
            : "https://serdargokhan-microsoft-todo.vercel.app/api/todos";

    const response = await fetch(BASE_URL);
    const data = await response.json();

    return {
        props: {
            id: uid,
            data: data,
            url: url,
        },
    };
}
