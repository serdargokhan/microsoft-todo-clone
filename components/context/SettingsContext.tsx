import React, { createContext, ReactNode, useState, useContext } from "react";

interface Types {
    fetchChange: Boolean;
    setFetchChange: React.Dispatch<React.SetStateAction<boolean>>;
    email: {
        _id: string;
        email: string;
    }[];
    setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export const SettingsContext = createContext<Types>({
    fetchChange: false,
    setFetchChange: () => {},
    email: [
        {
            _id: "",
            email: "",
        },
    ],
    setEmail: () => {},
});

function SettingsContextProvider({
    children,
}: React.PropsWithChildren<ReactNode>) {
    const [fetchChange, setFetchChange] = useState(false);
    const [email, setEmail] = useState<any>();

    const values = {
        fetchChange,
        setFetchChange,
        email,
        setEmail,
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
