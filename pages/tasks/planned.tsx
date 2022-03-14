import Head from "next/head";
// Components
import Planned from "components/Main/TodosMenu/Sections/Planned";
// Images
import TodoIcon from "public/TodoIcon.svg";

function PlannedPage() {
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
            <Planned />
        </>
    );
}

export default PlannedPage;
