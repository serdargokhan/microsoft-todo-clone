import Head from "next/head";
// Components
import MyDay from "components/Main/TodosMenu/Sections/MyDay";
// Images
import TodoIcon from "public/TodoIcon.svg";

function MydayPage() {
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
            <MyDay />
        </>
    );
}

export default MydayPage;
