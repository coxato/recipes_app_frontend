import React, { createContext, useContext, useEffect, useState, useReducer } from 'react';


const AuthContext = createContext();

// action reducer types
const SET_LOGGED = 'set-logged';
const LOGOUT = 'set-logout';

// state structure is like this
// { logged: <boolean> }
function authReducer(state, action) {
    switch (action.type) {
        case SET_LOGGED: {
            const { logged } = action.payload;
            return {
                logged
            }
        }

        case LOGOUT: {
            return {
                logged: false
            }
        }
    
        default:
            return state;
    }
}


const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [state, dispath] = useReducer(authReducer, { logged: false });

    useEffect(() => {
        const logged = localStorage.getItem('logged');

        dispath({
            type: SET_LOGGED,
            payload: {
                logged: logged === "true"
            }
        })
        setIsLoading(false);
    }, []);


    return (
        <AuthContext.Provider value={{
            isLoading,
            state,
            dispath
        }}>
            {children}
        </AuthContext.Provider>
    );
}


// custom hook
function useAuth() {
    const { state, dispath } = useContext(AuthContext);
    
    function setLogged(logged) {
        dispath({
            type: SET_LOGGED,
            payload: { logged }
        });
    }

    function setLogout() {
        dispath({
            type: LOGOUT,
            payload: { logged: false }
        });
    }

    function getLogged() {
        return state.logged;
    }

    return {
        setLogged,
        setLogout,
        getLogged
    }
}

 
export { 
    AuthProvider,
    useAuth
};