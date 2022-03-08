import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
// Context
import AuthContextProvider from "../components/context/AuthContext";
import SettingsContextProvider, {
    useCtx,
} from "components/context/SettingsContext";
// CSS
import "../styles/globals.scss";
// Components
import Navbar from "components/Navbar/Navbar";
import Menu from "components/Main/TodosMenu/Menu";
// Images
import FavIcon from "../public/favicon.ico";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const accessToken = localStorage.getItem("userUid");
        if (!accessToken) router.push("/signin");
        setTimeout(() => {
            localStorage.removeItem("userUid");
        }, 1000 * 60 * 60);
    }, []);

    const { setEmail } = useCtx();

    useEffect(() => {
        setEmail(pageProps.data);
    }, [pageProps.data]);

    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={FavIcon.src}
                />
            </Head>

            <AuthContextProvider>
                <SettingsContextProvider>
                    {!(
                        router.pathname === "/signin" ||
                        router.pathname === "/signup"
                    ) && (
                        <>
                            <Navbar />
                            <Menu />
                        </>
                    )}

                    <Component {...pageProps} />
                </SettingsContextProvider>
            </AuthContextProvider>
        </>
    );
}

export default MyApp;
