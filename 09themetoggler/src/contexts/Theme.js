import React, { useContext } from 'react';

const ThemeContext = React.createContext({
    themeMode: 'dark',
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
    return useContext(ThemeContext);
}