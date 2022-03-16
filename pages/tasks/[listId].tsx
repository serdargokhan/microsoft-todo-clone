import Head from "next/head";
import { useRouter } from "next/router";
// Components
import CustomList from "components/Main/Sections/CustomList";
// Images
import TodoIcon from "public/TodoIcon.svg";

function CustomListsPages() {
    const router = useRouter();

    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={TodoIcon.src}
                />
                <title>{router.query.listId} - To Do</title>
            </Head>
            <CustomList />
        </>
    );
}

export default CustomListsPages;
