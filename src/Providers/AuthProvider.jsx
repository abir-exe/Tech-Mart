/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../FIrebase/Firebase.config";

export  const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ( {children} ) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    } 

    const logOut = () => {
        setLoading(true);
        return signOut(auth)

    }

    const googleSignIn = (auth) => {
        setLoading(true);
        return signInWithPopup(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      };

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    },[])



    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        loading,
        googleSignIn,
        updateUserProfile,
       
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;