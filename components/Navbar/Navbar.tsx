import { useEffect, useRef, useState } from "react";
import Image from "next/image";
// CSS
import classes from "styles/Navbar.module.css";
// Custom Hooks
import useWindowDimension from "components/hooks/useWindowDimension";
// Components
import Input from "components/utils/Input";
import AppLauncher from "./AppLauncher/AppLauncher";
import Help from "./AppLauncher/Help";
import WhatIsNewSection from "./WhatIsNewSection";
import Portal from "components/portals/Portal";
// Images
import DotsIcon from "public/Navbar/DotsIcon.svg";
import SearchIcon from "public/Navbar/SearchIcon.svg";
import CloseIcon from "public/Navbar/CloseIcon.svg";
import Settings from "./Settings";
import Profile from "./Profile";

function Navbar() {
    const [focus, setFocus] = useState(false);
    const [tooltip, setTooltip] = useState(false);
    const [openLauncher, setOpenLauncher] = useState(false);
    const [openNews, setOpenNews] = useState(false);
    const [openHelp, setOpenHelp] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [hideIcon, setHideIcon] = useState({
        speakerIcon: false,
        questionIcon: false,
    });

    const width = useWindowDimension();

    const inputRef = useRef<HTMLInputElement>(null);

    function inputFocusHandler() {
        setFocus(true);
    }

    useEffect(() => {
        if (focus) inputRef.current?.focus();
    }, [focus]);

    function leaveInput() {
        setFocus(false);
        setHideIcon({
            speakerIcon: false,
            questionIcon: false,
        });
    }

    function openSearchBar() {
        if (width < 768) {
            setHideIcon({
                speakerIcon: true,
                questionIcon: false,
            });
        }
        if (width < 450) {
            setHideIcon({
                speakerIcon: true,
                questionIcon: true,
            });
        }
    }

    function tooltipOpen() {
        setTooltip(true);
    }

    function tooltipClose() {
        setTooltip(false);
    }

    function openAppLauncher() {
        setOpenLauncher(true);
    }

    function openWhatIsNew() {
        if (openHelp || openSettings || openProfile) {
            setOpenHelp(false);
            setOpenSettings(false);
            setOpenProfile(false);
        }
        setOpenNews((prev) => !prev);
    }

    function openHelpHandler() {
        if (openNews || openSettings || openProfile) {
            setOpenNews(false);
            setOpenSettings(false);
            setOpenProfile(false);
        }
        setOpenHelp((prev) => !prev);
    }

    function openSettingsHandler() {
        if (openHelp || openNews || openProfile) {
            setOpenNews(false);
            setOpenHelp(false);
            setOpenProfile(false);
        }
        setOpenSettings((prev) => !prev);
    }

    function profileOpenHandler() {
        if (openNews || openSettings || openHelp) {
            setOpenNews(false);
            setOpenHelp(false);
            setOpenSettings(false);
        }
        setOpenProfile((prev) => !prev);
    }

    useEffect(() => {
        if (width > 768) {
            setHideIcon({
                speakerIcon: false,
                questionIcon: false,
            });
        }
    }, [width]);

    const multipleClass =
        (hideIcon.speakerIcon || hideIcon.questionIcon) && focus
            ? `${classes.flex} ${classes.show}`
            : classes.flex;
    const singleClass = focus
        ? `${classes.flex} ${classes.changeBg}`
        : classes.flex;

    return (
        <>
            <nav className={classes.navbar}>
                <button
                    className={classes.appLauncher}
                    title="App launcher"
                    onClick={openAppLauncher}
                >
                    <Image src={DotsIcon} alt="dots-icon" />
                </button>

                <div className={classes.middle}>
                    <h1 className={classes.title}>Outlook</h1>
                    <div className={`${multipleClass} ${singleClass}`}>
                        {!focus && (
                            <span className={classes.tooltipText}>Search</span>
                        )}

                        {tooltip && (
                            <span className={classes.tooltipText}>Search</span>
                        )}

                        <div
                            className={
                                focus
                                    ? `${classes.searchButton} ${classes.radius}`
                                    : classes.searchButton
                            }
                            onClick={() => {
                                inputFocusHandler();
                                openSearchBar();
                            }}
                            onMouseEnter={tooltipOpen}
                            onMouseLeave={tooltipClose}
                        >
                            <Image
                                src={SearchIcon}
                                alt="search-icon"
                                width={17}
                                height={17}
                            />
                        </div>

                        <Input
                            className={
                                focus
                                    ? `${classes.searchField} ${classes.focused}`
                                    : classes.searchField
                            }
                            type="text"
                            placeholder={focus ? "Search" : ""}
                            ref={inputRef}
                            onBlur={leaveInput}
                            onClick={inputFocusHandler}
                        />
                        {focus && (
                            <div className={classes.close}>
                                <Image src={CloseIcon} width={25} height={25} />
                            </div>
                        )}
                    </div>
                    <div className={classes.navbarButtons}>
                        <button
                            className={openSettings ? classes.active : ""}
                            onClick={openSettingsHandler}
                            title="Settings"
                        >
                            <p className={classes["mdl2-settings"]}></p>
                        </button>
                        {!hideIcon.questionIcon && (
                            <button
                                className={openHelp ? classes.active : ""}
                                onClick={openHelpHandler}
                                title="Help & feedback"
                            >
                                <p className={classes["mdl2-help"]}></p>
                            </button>
                        )}
                        {!hideIcon.speakerIcon && (
                            <button
                                className={openNews ? classes.active : ""}
                                onClick={openWhatIsNew}
                                title="What's new"
                            >
                                <p className={classes["mdl2-megaphone"]}></p>
                            </button>
                        )}
                    </div>
                </div>

                <button
                    onClick={profileOpenHandler}
                    title="Account manager"
                    className={classes.circleCenter}
                >
                    <div className={classes.circle}>
                        <p>S</p>
                    </div>
                </button>
            </nav>
            {openLauncher && (
                <Portal>
                    <AppLauncher onCloseLauncher={setOpenLauncher} />
                </Portal>
            )}
            {openNews && (
                <Portal>
                    <WhatIsNewSection onCloseNews={setOpenNews} />
                </Portal>
            )}
            {openHelp && (
                <Portal>
                    <Help onCloseHelp={setOpenHelp} />
                </Portal>
            )}
            {openSettings && (
                <Portal>
                    <Settings onCloseSettings={setOpenSettings} />
                </Portal>
            )}
            {openProfile && (
                <Portal>
                    <Profile />
                </Portal>
            )}
        </>
    );
}

export default Navbar;
