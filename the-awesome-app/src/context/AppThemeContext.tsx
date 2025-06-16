import {createContext} from 'react';

export type ThemeState = {
    mode: string;
}

const initialState: ThemeState = {
    mode: 'dark'
}


export const AppThemeContext = createContext(initialState);