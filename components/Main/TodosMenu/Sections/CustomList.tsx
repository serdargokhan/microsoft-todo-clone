import { useRouter } from "next/router";
// CSS
import wrapperClass from "styles/Sections.module.scss";
import classes from "styles/CustomList.module.scss";

function CustomList() {
    const router = useRouter();

    return (
        <div className={wrapperClass.container}>
            <div className={wrapperClass.topFlex}>
                <p className={classes.title}>{router.query.listId}</p>
                <span className={wrapperClass["mdl2-dots"]}></span>
            </div>
        </div>
    );
}

export default CustomList;
