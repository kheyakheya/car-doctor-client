import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext= createContext(null);
const auth=getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]= useState(true);
    const googleProvider= new GoogleAuthProvider();
    // create user
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // signin
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    // social sign in
    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    // signout
    const logOut=()=>{
        setLoading(true)
       return signOut(auth);
    }
    // observer

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            console.log("state change", currentUser)
            setUser(currentUser);
            setLoading(false);
            if(currentUser && currentUser.email){
                const loggedUser= {email: currentUser.email};
                fetch('https://y-pearl-three.vercel.app/jwt',{
                method:'POST',
                headers:{'content-type':'application/json'},
                body: JSON.stringify(loggedUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log("jwt response",data)
                // warning: local storage is not best to store accrss token (second best)
                localStorage.setItem('car-access-token', data.token)
            })
            }
            else{
                localStorage.removeItem('car-access-token')

            }
        })
        return ()=>{unsubscribe()}
    },[])

    

    const authInfo= {user,loading, createUser, signIn, googleSignIn,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;