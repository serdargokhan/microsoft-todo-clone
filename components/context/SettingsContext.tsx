import React, { createContext, ReactNode, useState, useContext } from "react";

interface Types {
    fetchChange: Boolean;
    setFetchChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SettingsContext = createContext<Types>({
    fetchChange: false,
    setFetchChange: () => {},
});

function SettingsContextProvider({
    children,
}: React.PropsWithChildren<ReactNode>) {
    const [fetchChange, setFetchChange] = useState(false);

    const values = {
        fetchChange,
        setFetchChange,
    };

    return (
        <SettingsContext.Provider value={values}>
            {children}
        </SettingsContext.Provider>
    );
}

export default SettingsContextProvider;

export function useCtx() {
    const settingsCtx = useContext(SettingsContext);
    if (settingsCtx === undefined)
        throw new Error("Context must be used within the provider");

    return settingsCtx;
}
