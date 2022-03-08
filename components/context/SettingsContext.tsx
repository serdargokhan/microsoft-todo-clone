import React, { createContext, ReactNode, useState, useContext } from "react";

interface Types {
    fetchChange: Boolean;
    setFetchChange: React.Dispatch<React.SetStateAction<boolean>>;
    email: {
        _id: string;
        email: string;
        settings: { _id: string; check: boolean; header: string }[];
    }[];
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    changes: any;
    setChanges: React.Dispatch<React.SetStateAction<string>>;
}

export const SettingsContext = createContext<Types>({
    fetchChange: false,
    setFetchChange: () => {},
    email: [
        {
            _id: "",
            email: "",
            settings: [{ _id: "", check: false, header: "" }],
        },
    ],
    setEmail: () => {},
    changes: "",
    setChanges: () => {},
});

function SettingsContextProvider({
    children,
}: React.PropsWithChildren<ReactNode>) {
    const [fetchChange, setFetchChange] = useState(false);
    const [email, setEmail] = useState<any>([]);
    const [changes, setChanges] = useState<any>([]);

    const values = {
        fetchChange,
        setFetchChange,
        email,
        setEmail,
        changes,
        setChanges,
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
