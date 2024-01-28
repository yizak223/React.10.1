import React, { createContext, useState } from "react";
import { auth } from "../config/firebaseConfig";
import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext({})

//* login להתחבר 
//* register/ sign up להירשם

export default function UserProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    
    const register = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('you have successfully signed up')
                setUser(userCredential)
                const user = userCredential.user;
                console.log(user);
                navigate('/'); 
            })
            .catch((error) => {
                alert('this email is already registered')
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('hello user')
                setUser(userCredential)
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate('/'); 
            })
            .catch((error) => {
                alert('this email is not registered')
                console.log(error);
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    const logout = () => {
        signOut(auth)
            .then(() => {
                alert('Your account has been signed out')
                setUser(null);
                navigate('/'); 
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const shared = { user, register, login, logout }
    return (
        <UserContext.Provider value={shared}>
            {children}
        </UserContext.Provider>
    )
}