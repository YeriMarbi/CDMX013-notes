import React, { useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase';
import { createContext, useContext } from 'react';
import {
    // createUserWithEmailAndPassword,
    // signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        console.log("error")
    }
    return context;
};

export function AuthProvider({ children }) {

     const [user, setUser] = useState(null);

    // const register = async (email, password) => {
    //     const response = await createUserWithEmailAndPassword(auth, email, password)
    //     console.log(response)
    // }

    // const login = async (email, password) => {
    //     const response = await signInWithEmailAndPassword(auth, email, password)
    //     console.log(response)
    // }

    const loginWithGoogle =  async () => {
        const responseGoogle = new GoogleAuthProvider()
        return await signInWithPopup(auth, responseGoogle)
    };

    const logOut = () => {
        signOut(auth)
    }

    const getUser = () => {
       return user
    }

useEffect (() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log('User', currentUser)
    });
    return () => {
        subscribe();
    }
}, []);



    return <AuthContext.Provider value={{
        // register,
        // login,
        loginWithGoogle,
        logOut,
        user,
        getUser
    }}>
        {children};
    </AuthContext.Provider>

};

