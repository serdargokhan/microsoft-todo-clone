import Head from "next/head";
// Components
import Important from "components/Main/TodosMenu/Sections/Important";
// Images
import TodoIcon from "public/TodoIcon.svg";

function ImportantPage() {
    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={TodoIcon.src}
                />
                <title>Important - To Do</title>
            </Head>
            <Important />
        </>
    );
}

export default ImportantPage;
