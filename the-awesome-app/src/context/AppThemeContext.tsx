'use client'

import React, { useState } from "react";


export type ThemeState = {

    mode: string;
    changeTheme: (mode: string) => void
} 

export const initialThemeState: ThemeState = {
    mode: 'dark',
    changeTheme: () => {}
}


//context/store
export const AppThemeContext = React.createContext(initialThemeState);

export function AppThemeContextProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    const [mode, setMode] = useState(initialThemeState.mode);

    return (
        <AppThemeContext.Provider value={{mode, changeTheme: setMode}}>
            {children}
        </AppThemeContext.Provider>
    )

}