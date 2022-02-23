import React from "react";
import Image from "next/image";
// CSS
import classes from "styles/Profile.module.css";
// Components
import Button from "components/utils/Button";
// Images
import MicrosoftLogo from "public/microsoftLogo.svg";

interface Props {}

function Profile(props: Props) {
    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <Image src={MicrosoftLogo} width={80} height={24} />
                <Button className={classes.signOut} title="Sign out" />
            </div>
            <div className={classes.bottom}>
                <div className={classes.circle}>S</div>
                <div className={classes.info}>
                    <p className={classes.name}>LOREM IPSUM</p>
                    <p className={classes.mail}>lorem_ipsum@hotmail.com</p>
                    <Button
                        className={classes.profileBtn}
                        title="My Microsoft account"
                    />
                    <Button className={classes.profileBtn} title="My profile" />
                </div>
            </div>
        </div>
    );
}

export default Profile;
