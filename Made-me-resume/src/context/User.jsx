import React, { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebaseConfig";
import { signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { dB } from "../config/firebaseConfig";
import { addDoc, collection, onSnapshot, doc, deleteDoc, query, getDocs, where, serverTimestamp, orderBy, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext({})

//* login להתחבר 
//* register/ sign up להירשם

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            try {
                if (user) {
                    setIsLoggedIn(true)
                    setUserName(user.email.substring(0, user.email.indexOf('@')))
                    setUserId(user.uid)
                } else {
                    setIsLoggedIn(false)
                    setUserName(null)
                }
            }
            catch (err) {
                console.log(err);
            }
        })
    }, [isLoggedIn])

    const register = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async(userCredential) => {
                alert('you have successfully signed up')
                setUser(userCredential)
                const user = userCredential.user;
                const collectionRef = collection(dB, 'UserRole')
                const docRef = await addDoc(collectionRef, {email: email, password: password,role:'user'})
                navigate('/MadeMeResume')
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
                navigate('/MadeMeResume')
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
                setUserName(null);
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const shared = { user, register, login, logout, userName, setUserName, userId }
    return (
        <UserContext.Provider value={shared}>
            {children}
        </UserContext.Provider>
    )
}