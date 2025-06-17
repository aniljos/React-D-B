import {createContext, useState} from 'react';

export type ThemeState = {
    mode: string;
    changeMode: (mode: string) => void;
}

const initialState: ThemeState = {
    mode: 'dark',
    changeMode: () => {}
}


export const AppThemeContext = createContext(initialState);

type AppThemeContextProviderProps = {
    children: React.ReactNode
}

export function AppThemeContextProvider(props: AppThemeContextProviderProps){

    const [mode, setMode] = useState(initialState.mode);
    
    return (
        <AppThemeContext.Provider value={{mode, changeMode: setMode}}>
            {props.children}
        </AppThemeContext.Provider>
    )
}