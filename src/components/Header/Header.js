import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../CostomHooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user } = useFirebase();
  console.log(user);
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Login">Product</Link>
        <Link to="/Login">Order</Link>
        <Link to="/register">Register</Link>
        {user?.uid ? <button>Sign Out</button> : <Link to="/Login">Login</Link>}
      </nav>
    </div>
  );
};

export default Header;
