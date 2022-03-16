import Head from "next/head";
// Components
import Tasks from "components/Main/Sections/Tasks";
// Images
import TodoIcon from "public/TodoIcon.svg";

function InboxPage() {
    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={TodoIcon.src}
                />
                <title>Tasks - To Do</title>
            </Head>
            <Tasks />
        </>
    );
}

export default InboxPage;
