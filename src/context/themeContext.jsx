import React, { createContext, useContext, useEffect, useState, useReducer } from 'react';
import { ConfigProvider as AntConfigProvider, theme } from 'antd';
const ThemeContext = createContext();


// action reducer types
const SET_THEME = 'set-theme';

// state structure is like this
// { isDark: <boolean> }
function themeReducer(state, action) {
    switch (action.type) {
        case SET_THEME: {
            const { isDark } = action.payload;
            return {
                isDark
            }
        }
        default:
            return state;
    }
}


const ThemeProvider = ({ children }) => {
    const [state, dispath] = useReducer(themeReducer, { isDark: false });
    const { defaultAlgorithm, darkAlgorithm } = theme;

    useEffect(() => {
        const isDark = localStorage.getItem('isDark');

        dispath({
            type: SET_THEME,
            payload: { isDark: isDark === "dark" }
        })
        setIsLoading(false);
    }, []);


    return (
        <ThemeContext.Provider value={{
            state,
            dispath
        }}>
            <AntConfigProvider theme={state.isDark ? darkAlgorithm : defaultAlgorithm}>
                {children}
            </AntConfigProvider>
        </ThemeContext.Provider>
    );
}


// custom hook
function useTheme() {
    const { state, dispath } = useContext(ThemeContext);
    
    function setTheme(isDark) {
        dispath({
            type: SET_THEME,
            payload: { isDark }
        });
    }

    return {
        setTheme,
        isDark: state.isDark
    }
}

 
export { 
    ThemeProvider,
    useTheme
};