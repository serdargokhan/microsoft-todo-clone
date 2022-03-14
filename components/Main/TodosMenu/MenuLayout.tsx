import { ReactNode } from "react";
// CSS
import classes from "styles/MenuLayout.module.scss";
// Hooks
import useWindowDimension from "components/hooks/useWindowDimension";
// Components
import Portal from "components/portals/Portal";

interface Props {
    onToggle: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
}

function MenuLayout({ onToggle, children }: Props) {
    const width = useWindowDimension();

    const smallSize = width <= 768;

    function menuCloseHandler() {
        onToggle(false);
    }

    return (
        <>
            {smallSize && (
                <Portal>
                    <div
                        onClick={menuCloseHandler}
                        style={{
                            position: "fixed",
                            right: "0",
                            top: "48px",
                            width: "calc(100vw - 200px)",
                            backgroundColor: "gray",
                            minHeight: "100vh",
                            opacity: "0.75",
                        }}
                    ></div>
                    <div style={{ position: "fixed", top: "48px", left: "0" }}>
                        <div className={classes.container}>{children}</div>
                    </div>
                </Portal>
            )}

            {!smallSize && <div className={classes.container}>{children}</div>}
        </>
    );
}

export default MenuLayout;
