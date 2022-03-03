import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
// Context
import { useCtx } from "components/context/SettingsContext";
// CSS
import classes from "styles/Profile.module.scss";
// Components
import Button from "components/utils/Button";
// Images
import MicrosoftLogo from "public/microsoftLogo.svg";

function Profile() {
    const [selectedEmail, setSelectedEmail] = useState("");

    const router = useRouter();

    const { email } = useCtx();

    function signoutHandler() {
        localStorage.removeItem("userUid");
        router.push("/signin");
    }

    useEffect(() => {
        email.map((item) => {
            if (item._id === localStorage.getItem("userUid"))
                setSelectedEmail(item.email);
        });
    }, [email]);

    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <Image src={MicrosoftLogo} width={80} height={24} />
                <Button
                    onClick={signoutHandler}
                    className={classes.signOut}
                    title="Sign out"
                />
            </div>
            <div className={classes.bottom}>
                <div className={classes.circle}>
                    {selectedEmail.slice(0, 1).toUpperCase()}
                </div>
                <div className={classes.info}>
                    <p className={classes.name}>
                        {selectedEmail
                            .slice(0, selectedEmail.indexOf("@"))
                            .toUpperCase()}
                    </p>
                    <p className={classes.mail}>{selectedEmail}</p>
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
