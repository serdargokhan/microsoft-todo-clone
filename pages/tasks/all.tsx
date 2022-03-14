import Head from "next/head";
// Components
import All from "components/Main/TodosMenu/Sections/All";
// Images
import TodoIcon from "public/TodoIcon.svg";

function AllPage() {
    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={TodoIcon.src}
                />
                <title>All - To Do</title>
            </Head>
            <All />
        </>
    );
}

export default AllPage;
