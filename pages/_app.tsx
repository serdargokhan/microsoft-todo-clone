import "../styles/globals.scss";
import type { AppProps } from "next/app";
import AuthContextProvider from "../components/context/AuthContext";
import Head from "next/head";
import FavIcon from "../public/favicon.ico";
import SettingsContextProvider from "components/context/SettingsContext";

function MyApp({ Component, pageProps }: AppProps) {
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
                    <Component {...pageProps} />
                </SettingsContextProvider>
            </AuthContextProvider>
        </>
    );
}

export default MyApp;
