import React, { createContext, useState } from "react";
export const ThemeContext = createContext({})

export default function ThemeProvider({ children }) {
    const [isDarkMode, setDarkMode] = useState(false);
    const darkModeColors = {
        background: 'black',
        color: 'white'
    }
    const lightModeColors = {
        background: 'white',
        color: 'black'
    }
    const [selectedTheme, setSelectedTheme] = useState(lightModeColors);

    const toggleTheme = () => {
        if (isDarkMode) {
            setSelectedTheme(lightModeColors)
        } else {
            setSelectedTheme(darkModeColors)
        }
        setDarkMode(!isDarkMode);
    }
    const shared ={ toggleTheme, isDarkMode, selectedTheme }
    return (
        <ThemeContext.Provider value={shared}>
            {children}
        </ThemeContext.Provider>
    )
}