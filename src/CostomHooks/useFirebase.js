import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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
  return { user, singInWithGoogle };
};

export default useFirebase;
