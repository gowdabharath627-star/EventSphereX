import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(

        localStorage.getItem("loggedIn") === "true"

    );

    function login() {

        localStorage.setItem("loggedIn", "true");

        setIsAuthenticated(true);

    }

    function logout() {

        localStorage.removeItem("loggedIn");

        setIsAuthenticated(false);

    }

    return (

        <AuthContext.Provider
            value={{
                isAuthenticated,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}