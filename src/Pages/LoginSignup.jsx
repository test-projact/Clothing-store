import React, { useState } from "react";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  const [state, setState] = useState("Sing Up");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  };

  const login = ()=>{
    console.log('login',formData)
  }
  const signup = ()=>{
    console.log('singup',formData)
  }

  return (
    <div className="loginsignuo">
      <div className="loginsingup-container">
        <h1>{state}</h1>
        <div className="loginsigup-fields">
          {state === "Sing Up" ? (
            <input type="text" name="username" value={formData.username} onChange={changeHandler} placeholder="Your Name" />
          ) : (
            <></>
          )}
          <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>
        <button onClick={()=>{state === 'Login'?login():signup()}}>Continue</button>
        {state === "Sing Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span onClick={() => setState("Sing Up")}>Click here</span>
          </p>
        )}

        <div className="loginsingup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
