import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import Header from "../Header/Header";
import "./Home.css";

const auth = getAuth(app);
const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <Header />

      <h1>This Is Home Page</h1>
      {user?.uid && (
        <div>
          <img src={user.photoURL} alt="" />
          <h2>{user.displayName}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
