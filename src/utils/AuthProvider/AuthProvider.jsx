import React, { createContext, useEffect, useState } from "react";
export const authContext = createContext();
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //   google Provider
  const googleProvider = new GoogleAuthProvider();

  //   Register a user
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in a user
  const handleSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   google sign in
  const handleGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   const update profile
  const manageProfile = async (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {
        setUser((user) => ({
          ...user,
          displayName: name,
          photoURL: image,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   signout a user
  const handleLogout = () => {
    signOut(auth);
  };

  //   observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const data = {
    user,
    setUser,
    loading,
    setLoading,
    handleRegister,
    handleSignIn,
    handleGoogle,
    handleLogout,
    manageProfile,
  };

  return <authContext.Provider value={data}>{children}</authContext.Provider>;
};

export default AuthProvider;
