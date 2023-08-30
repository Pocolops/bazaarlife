"use client"
import React, { createContext, useState, ReactNode } from "react";

interface GlobalStateContextType {
  showNavModal: boolean;
  setShowNavModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalStateContextType | null>(null);

interface GlobalStateProps {
  children: ReactNode;
}

export default function GlobalState({ children }: GlobalStateProps) {
  const [showNavModal, setShowNavModal] = useState(false);

  return (
    <GlobalContext.Provider value={{ showNavModal, setShowNavModal }}>
      {children}
    </GlobalContext.Provider>
  );
}

