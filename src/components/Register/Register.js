import React from "react";
import Header from "../Header/Header";

const Register = () => {
  return (
    <div>
      <section class="form" id="contact">
        <div class="cart">
          <div class="contact-section">
            <p>Create Your Account</p>
            <input type="text" name="name" placeholder="Your Name" />
            <input type="text" name="email" placeholder="Your Email" />
            <input
              type="text"
              name="password"
              placeholder="Enter Your Password"
            />

            <input type="submit" value="Submit" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
