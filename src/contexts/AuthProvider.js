import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleRegister = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubRegister = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    } 
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('inside auth state change', currentUser);

            if(currentUser === null){
                setUser(currentUser);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])

    const authInfo = { 
        user, 
        loading, 
        signIn,
        logOut, 
        createUser,  
        googleRegister,
        gitHubRegister,
        forgetPassword,
        updateUserProfile,
        verifyEmail,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;