import React,{createContext, useState} from "react";
export const UserContext = createContext({})

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const login = (user) => {
        setUser(user)
    }
    const logout = () => {
        setUser(null)
    }
    const toggleUser = () => {
        if (user) {
            logout()
        } else {
            login()
        }
    }
    const shared = { user, login, logout, toggleUser}
    return (
        <UserContext.Provider value={shared}>
            {children}
        </UserContext.Provider>
    )
}