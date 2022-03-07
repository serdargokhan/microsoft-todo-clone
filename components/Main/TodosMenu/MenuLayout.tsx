// CSS
import classes from "styles/MenuLayout.module.scss";

function MenuLayout({ children }: any) {
    return <div className={classes.container}>{children}</div>;
}

export default MenuLayout;
