'use client'
import React, { createContext, useState, ReactNode, useContext } from "react";

interface GlobalStateContextType {
    showNavModal: boolean;
    setShowNavModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalStateContextType | null>(null);

export default function GlobalState({ children }: { children: ReactNode }) {
    const [showNavModal, setShowNavModal] = useState(false);

    return (
        <GlobalContext.Provider value={{ showNavModal, setShowNavModal }}>
            {children}
        </GlobalContext.Provider>
    );
}
