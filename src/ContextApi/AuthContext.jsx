import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Auth/Auth';



//CreateContext Start
export const AuthContext = createContext(null)
//CreateContext End


//Auth app export start
const auth = getAuth(app)
//Auth app export End

const AuthContextProbider = ({children}) => {
const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true);


// Create User Start
  const createUser = (email,password) =>{
    setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

// Create User End 

//login start
const login = (email,password) =>{
     setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
//login End

// updteProfile start
// const update = (updateProfile ) =>{
//     return updateProfile
// }
// updteProfile End
const logOut = () =>{
     setLoading(true)
    return signOut(auth)
}
// LogOut start

// user observer is Start
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser);
        setLoading(false)
    });
    return () =>{
        return unSubscribe()
    }
});
// user observer is End





const authInfo = {
    user,
createUser,
login,
loading,
logOut,


}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
               {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextProbider;