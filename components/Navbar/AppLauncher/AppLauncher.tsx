import { useState } from "react";
import Image from "next/image";
// CSS
import classes from "styles/AppLauncher.module.css";
// Components
import AppLauncherLayout from "./AppLauncherLayout";
import AppLauncherContinue from "./AppLauncherContinue";
// Images
import SVG from "components/assets/SVGs";

interface Props {
    onCloseLauncher: React.Dispatch<React.SetStateAction<boolean>>;
}

function AppLauncher({ onCloseLauncher }: Props) {
    const [next, setNext] = useState(false);

    function nextPage() {
        setNext(true);
    }

    return (
        <AppLauncherLayout onCloseLauncher={onCloseLauncher}>
            {!next && (
                <div className={classes.overflow}>
                    <h1 className={classes.title}>Microsoft 365</h1>
                    <ul className={classes.apps}>
                        <li>
                            <Image
                                src={SVG.OutlookIcon}
                                width={26}
                                height={26}
                            />
                            <p>Outlook</p>
                        </li>
                        <li>
                            <Image
                                src={SVG.OnedriveIcon}
                                width={26}
                                height={26}
                            />
                            <p>OneDrive</p>
                        </li>
                        <li>
                            <Image src={SVG.TeamsIcon} width={26} height={26} />
                            <p>Teams</p>
                        </li>
                        <li>
                            <Image src={SVG.WordIcon} width={26} height={26} />
                            <p>Word</p>
                        </li>
                        <li>
                            <Image src={SVG.ExcelIcon} width={26} height={26} />
                            <p>Excel</p>
                        </li>
                        <li>
                            <Image src={SVG.PointIcon} width={26} height={26} />
                            <p>PowerPoint</p>
                        </li>
                        <li>
                            <Image src={SVG.NoteIcon} width={26} height={26} />
                            <p>OneNote</p>
                        </li>
                        <li>
                            <Image src={SVG.TodoIcon} width={26} height={26} />
                            <p>To Do</p>
                        </li>
                        <li>
                            <Image
                                src={SVG.FamilySafetyIcon}
                                width={26}
                                height={26}
                            />
                            <p>Family Safety</p>
                        </li>
                        <li>
                            <Image
                                src={SVG.CalendarIcon}
                                width={26}
                                height={26}
                            />
                            <p>Calendar</p>
                        </li>
                        <li>
                            <Image src={SVG.SkypeIcon} width={26} height={26} />
                            <p>Skype</p>
                        </li>
                    </ul>
                    <button
                        onClick={nextPage}
                        className={`${classes.office} ${classes.alignLeft}`}
                    >
                        <p className={classes.officeText}>All apps</p>
                        <p className={classes["mdl2-arrow"]}></p>
                    </button>
                </div>
            )}
            {next && <AppLauncherContinue onPrev={setNext} />}
        </AppLauncherLayout>
    );
}

export default AppLauncher;
