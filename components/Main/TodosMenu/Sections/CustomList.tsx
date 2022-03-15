import { useRouter } from "next/router";
// CSS
import wrapperClass from "styles/Pages/Sections.module.scss";
import classes from "styles/Pages/CustomList.module.scss";
// Hooks
import useWindowDimension from "components/hooks/useWindowDimension";

function CustomList() {
    const router = useRouter();

    const width = useWindowDimension();

    const smallSize = width <= 768;

    return (
        <div className={classes.container}>
            <div className={wrapperClass.topFlex}>
                <p className={classes.title}>{router.query.listId}</p>
                <div className={wrapperClass["mdl2-dots"]}>
                    <span className={wrapperClass.listTooltip}>
                        List options menu
                    </span>
                </div>
            </div>

            <div className={classes.right}>
                <div className={classes.flex}>
                    {!smallSize && (
                        <span className={classes.sortTooltip}>Sort</span>
                    )}
                    <span className={wrapperClass["mdl2-sort"]}></span>
                    {!smallSize && <span>Sort</span>}
                </div>
                <div className={classes.flex}>
                    {!smallSize && (
                        <span className={classes.shareTooltip}>Share</span>
                    )}
                    <span className={classes["mdl2-share"]}></span>
                    {!smallSize && <span>Share</span>}
                </div>
            </div>
        </div>
    );
}

export default CustomList;
