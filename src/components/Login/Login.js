import React from "react";

import Header from "../Header/Header";
import "./Login.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";

import { useNavigate, useLocation } from "react-router-dom";

const auth = getAuth(app);
const Login = () => {
  const [singInWithGoogle, user] = useSignInWithGoogle(auth);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    singInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <section className="form" id="contact">
        <div className="cart">
          <div className="contact-section">
            <p>Create Your Account</p>

            <input type="text" name="email" placeholder="Your Email" />
            <input
              type="text"
              name="password"
              placeholder="Enter Your Password"
            />

            <input type="submit" value="Submit" />
            <div style={{ marginTop: "20px" }}>
              <img
                onClick={handleSubmit}
                style={{ width: "50px", height: "50px", cursor: "pointer" }}
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
