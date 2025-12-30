import React, { useContext } from 'react'
import { ThemeContext } from './createContext'

const ThemeButton = () => {

    const theme = useContext(ThemeContext)

    if (!theme) {
        throw new Error("Theme is not providerr")

    }


    return (
        <div>
            <button onClick={theme.themeToggle}>
                {theme.theme}

            </button>


        </div>
    )
}

export default ThemeButton