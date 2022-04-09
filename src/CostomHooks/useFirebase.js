import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const singInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sing out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { user, singInWithGoogle, handleSignOut };
};

export default useFirebase;
