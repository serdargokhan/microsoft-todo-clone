import Head from "next/head";
// Components
import Completed from "components/Main/Sections/Completed";
// Images
import TodoIcon from "public/TodoIcon.svg";

function CompletedPage() {
    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={TodoIcon.src}
                />
                <title>Completed - To Do</title>
            </Head>
            <Completed />
        </>
    );
}

export default CompletedPage;
