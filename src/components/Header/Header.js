import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../CostomHooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, handleSignOut } = useFirebase();

  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Login">Product</Link>
        <Link to="/Login">Order</Link>
        <Link to="/register">Register</Link>

        {user?.uid ? (
          <button style={{ marginLeft: "15px" }} onClick={handleSignOut}>
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
