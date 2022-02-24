import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
// CSS
import classes from "styles/AppLauncher.module.scss";
// Images
import SVG from "components/assets/SVGs";

interface Props {
    children: ReactNode;
    onCloseLauncher: React.Dispatch<React.SetStateAction<boolean>>;
}

function AppLauncherLayout({ children, onCloseLauncher }: Props) {
    const [closeLauncher, setCloseLauncher] = useState(false);

    function closeAppLauncher() {
        setCloseLauncher(true);
    }

    useEffect(() => {
        if (closeLauncher) onCloseLauncher(false);
    }, [closeLauncher]);

    return (
        <section className={classes.container}>
            <div className={classes.appLauncher}>
                <button
                    title="Close the app launcher"
                    className={classes.dots}
                    onClick={closeAppLauncher}
                >
                    <Image src={SVG.DotsIcon} />
                </button>
                <a
                    href="https://www.office.com/"
                    className={classes.office}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <p className={classes.officeText}>Office</p>
                    <p className={classes["mdl2-arrow"]}></p>
                </a>
            </div>
            {children}
        </section>
    );
}

export default AppLauncherLayout;
