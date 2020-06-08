import React from "react";
import SignIn from "../../signin/signin";
import SignUp from "../../signup/SignUp";
import "./signin-and-signup.scss";
const SignInAndSignUpPage = () => (
  <div className="signin-and-signup">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
