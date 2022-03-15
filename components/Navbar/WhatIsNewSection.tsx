import React from "react";
import Image from "next/image";
// CSS
import classes from "styles/Navbar/WhatIsNewSection.module.scss";
// Components
import Button from "components/utils/Button";
import BgLayout from "./BgLayout";
import SVG from "components/assets/SVGs";

interface Props {
    onCloseNews: React.Dispatch<React.SetStateAction<boolean>>;
}

function WhatIsNewSection({ onCloseNews }: Props) {
    function closeHandler() {
        onCloseNews((prev) => !prev);
    }

    return (
        <BgLayout>
            <div className={classes.head}>
                <h3 className={classes.title}>What's new</h3>
                <span
                    onClick={closeHandler}
                    className={classes["mdl2-cancel"]}
                ></span>
            </div>
            <div className={classes.container}>
                <Image src={SVG.FocusIcon} />
                <div className={classes.grid}>
                    <div className={classes.smallIcons}>
                        <span className={classes["mdl2-brightness"]}></span>
                    </div>
                    <div className={classes.bottom}>
                        <p className={classes.info}>Focus on what matters</p>
                        <p className={classes.message}>
                            Suggestions help you keep track of your urgent and
                            important tasks.
                        </p>
                        <Button className={classes.btn} title="Try it" />
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <Image src={SVG.SamsungImage} />
                <div className={classes.grid}>
                    <div className={classes.smallIcons}>
                        <Image src={SVG.PhoneIcon} />
                    </div>
                    <div className={classes.bottom}>
                        <p className={classes.info}>
                            Manage your Samsung Reminder with To Do
                        </p>
                        <p className={classes.message}>
                            Sync Samsung Reminder with To Do to manage your
                            reminders from missed calls, messages, Bixby, and
                            more.
                        </p>
                        <Button className={classes.btn} title="Learn more" />
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <Image src={SVG.TodosIcon} />
                <div className={classes.grid}>
                    <div className={classes.smallIcons}>
                        <Image src={SVG.CategoryIcon} />
                    </div>
                    <div className={classes.bottom}>
                        <p className={classes.info}>
                            Categorize your tasks in To Do
                        </p>
                        <p className={classes.message}>
                            Assign categories to organize your tasks. Head to a
                            task&apos;s detail view to try it out.
                        </p>
                        <Button className={classes.btn} title="Learn more" />
                    </div>
                </div>
            </div>
            <div className={classes.flex}>
                <p>Download the app.</p>
                <div className={classes.footerIcons}>
                    <Image src={SVG.AppleIcon} />
                    <Image src={SVG.WindowsIcon} />
                    <Image src={SVG.AndroidIcon} />
                </div>
            </div>
        </BgLayout>
    );
}

export default WhatIsNewSection;
