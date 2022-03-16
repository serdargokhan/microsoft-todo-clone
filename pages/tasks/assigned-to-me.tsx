import Head from "next/head";
// Components
import AssignedToMe from "components/Main/Sections/AssignedToMe";
// Images
import TodoIcon from "public/TodoIcon.svg";

function AssignedToMePage() {
    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={TodoIcon.src}
                />
                <title>Assigned to me - To Do</title>
            </Head>
            <AssignedToMe />
        </>
    );
}

export default AssignedToMePage;
