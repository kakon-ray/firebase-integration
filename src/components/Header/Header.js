import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

import app from "../../firebase.init";
import "./Header.css";

const auth = getAuth(app);
const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  };
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/order">Order</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        {user?.uid ? (
          <button style={{ marginLeft: "15px" }} onClick={logOut}>
            Sign Out
          </button>
        ) : (
          <Link to="/Login">Login</Link>
        )}
        <span style={{ marginLeft: "15px" }}>
          {user?.uid && user.displayName}

          {user?.uid && (
            <img
              src={user?.photoURL}
              style={{ width: "30px", height: "30px" }}
              alt=""
            />
          )}
        </span>
      </nav>
    </div>
  );
};

export default Header;
