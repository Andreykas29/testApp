import { createContext, useState } from "react";

export const AuthContext = createContext()


export const AuthContextProvider = ({children}) => {
    const [isLoggined, setIsLoggined] = useState(false)
    const [email, setEmail] = useState("User")

    const logIn = () => {
        setIsLoggined(true)
    }

    const logOut = () => {
        setIsLoggined(false)
        localStorage.removeItem('loginData');
    }
    const addEmail = (name) => {
        setEmail(name)
    }
    return <AuthContext.Provider value={{logIn, logOut, isLoggined,addEmail, email}}>{children}</AuthContext.Provider>
}