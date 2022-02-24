import { ReactNode } from "react";
// CSS
import classes from "styles/BgLayout.module.scss";

interface Props {
    children: ReactNode;
}

function BgLayout({ children }: Props) {
    return <div className={classes.container}>{children}</div>;
}

export default BgLayout;
