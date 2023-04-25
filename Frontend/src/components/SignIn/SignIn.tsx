import React, { useState } from 'react';
import "./SignIn.scss";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import axios from "axios";

const SignIn = () => {
    const navigate = useNavigate();
    const [passwordType, setPasswordType] = useState("password");
  
      const togglePassword =()=>{
        if(passwordType==="password")
        {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
    }

    const [user, setUser] = useState({
      email: "", password: ""
    });

  let name, value;

  const handleInputs = (e: any) => {
      name = e.target.name;
      value = e.target.value;
      console.log({name, value, v: e.target.value})
      setUser({...user, [name]:value});
  }

    const PostData = (event: { preventDefault: () => void; }) => {
      console.log("user")
      event.preventDefault();
      axios.post("https://famwork-med.onrender.com/api/v1/auth/login", user, {
          headers: {
            'Content-Type': 'application/json',
          },
      })
      .then(res => {
        navigate('/patient-dashboard');
        console.log(res);
      })
      .catch(error => {
          console.log(error);
      })
  }

  return (
    <div className="signin-container">
       <div className="top-signin">
            <div>Team-A Health</div>
            <div className="signup-line"></div>
       </div>
       <form onSubmit={PostData}>
            <h2>Sign In</h2>
            <div className="detail">
                <h3>Email</h3>
                <input id="email" name="email" type="text" required value={user.email} onChange={handleInputs} />
            </div>
            <div className="detail">
            <h3>Password</h3>
            <div className="password-field">
            <input name="password" type={passwordType} value={user.password} onChange={handleInputs} required />
               <button className="btn" onClick={togglePassword}>
                    { passwordType==="password"? <AiOutlineEyeInvisible className="icon-size" /> : <AiOutlineEye className="icon-size" /> }
               </button>
            </div>
        </div>
            <button className="button" type="submit" value="login" id="login" name="signup">Login</button>
            <div className="signin">
                <Link to="/sign-up">Don't have an account? Sign Up</Link>
            </div>
        </form>
    </div>
  )
}

export default SignIn