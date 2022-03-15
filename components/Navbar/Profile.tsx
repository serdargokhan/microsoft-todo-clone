import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
// Context
import { useCtx } from "components/context/SettingsContext";
// CSS
import classes from "styles/Navbar/Profile.module.scss";
// Components
import Button from "components/utils/Button";
// Images
import MicrosoftLogo from "public/microsoftLogo.svg";

interface Props {
    onOpenProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

function Profile({ onOpenProfile }: Props) {
    const [selectedEmail, setSelectedEmail] = useState("");

    const router = useRouter();

    const { email, setEmail, fetchChange } = useCtx();

    function signoutHandler() {
        localStorage.removeItem("userUid");
        router.push("/signin");
    }

    useEffect(() => {
        async function getSettings() {
            try {
                const res = await fetch("/api/todos");
                const data = await res.json();
                if (data) setEmail(data);
            } catch (err) {
                console.error(err);
            }
        }
        getSettings();
    }, [fetchChange]);

    useEffect(() => {
        email.map((item) => {
            if (item._id === localStorage.getItem("userUid"))
                setSelectedEmail(item.email);
        });
    }, [email]);

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const listener = (e: any) => {
            if (!divRef.current || divRef.current!.contains(e.target)) {
                return;
            }
            onOpenProfile(false);
        };

        document.addEventListener("click", listener);

        return () => {
            document.removeEventListener("click", listener);
        };
    }, [onOpenProfile, divRef]);

    return (
        <div className={classes.container} ref={divRef}>
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
