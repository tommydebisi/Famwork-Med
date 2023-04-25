import React, { useState } from 'react';
import "./SignUp.scss";
import { Link, useNavigate } from "react-router-dom";
import docImg from "../Images/doctor.png";
// import 'bootstrap/dist/css/bootstrap.css';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import axios from "axios";

const SignUp = () => {
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
        firstName: "", lastName: "", email: "", password: "", age: "", gender: "", status: "", experience: "", specialization: ""
    });

    let name, value;

    const handleInputs = (e: any) => {
        name = e.target.name;
        value = e.target.value;
        console.log({name, value, v: e.target.value})
        setUser({...user, [name]:value});
    }

    const PostData = (event: { preventDefault: () => void; }) => {
        console.log(user)
        event.preventDefault();
        axios.post("https://famwork-med.onrender.com/api/v1/auth/register", user, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => {
            if(res.data.message === "success") {
                navigate('/');
            } else {
                alert("No record exists!");
            }
            console.log(res);
        })
        .catch(error => {
            console.log(error)
        })
    }


  return (
    <div className="signup-container">
       <form id="register-form" onSubmit={PostData}>
        <h2>Create New Account</h2>
        <div className="detail">
            <h3>First Name</h3>
            <input id="name" name="firstName" type="text" value={user.firstName} onChange={handleInputs} required/>
        </div>
        <div className="detail">
            <h3>Last Name</h3>
            <input name="lastName" type="text" value={user.lastName} onChange={handleInputs} required/>
        </div>
        <div className="detail">
            <h3>Email</h3>
            <input type="email" name="email" value={user.email} onChange={handleInputs} required/>
        </div>
        <div className="detail">
            <h3>Password</h3>
            <div className="password-field">
            {/* onChange={handlePasswordChange} value={passwordInput} */}
            <input name="password" type={passwordType}  value={user.password} onChange={handleInputs} />
               <button className="btn" onClick={togglePassword}>
                    { passwordType==="password"? <AiOutlineEyeInvisible className="icon-size" /> : <AiOutlineEye className="icon-size" /> }
               </button>
            </div> 
        </div>
        <div className="detail">
            <h3>Age</h3>
            <input name="age" type="number" value={user.age} onChange={handleInputs} required/>
        </div>
        <div className="select">
        <div className="detail">
            <h3>Gender:</h3>
        </div>
        <div className="radio-element">
            <div className="element">
                <h3>Male</h3>
                <input type="radio" name="gender" value="male"  id="male"  onChange={handleInputs}/>
            </div>
            <div className="element">
                <h3>Female</h3>
                <input type="radio" name="gender" value="female" id="female"  onChange={handleInputs} />
            </div>
        </div>
        </div>
        <div className="select">
        <div className="detail">
            <h3>Status:</h3>
        </div>
        <div className="radio-element">
            <div className="element">
                <h3>Patient</h3>
                <input type="radio" name="status" id="patient" value="Patient" onChange={handleInputs} />
            </div>
            <div className="element">
                <h3>Doctor</h3>
                <input type="radio" name="status" id="doctor" value="Doctor" onChange={handleInputs} />
            </div>
        </div>
        </div>
        <div style={{ textAlign: "center", fontStyle: "italic", marginTop: "20px"}}>Registering as a Doctor?</div>
        <div className="detail">
            <h3>Years of Experience</h3>
            <input name="experience" type="number" value={user.experience} onChange={handleInputs} />
        </div>
        <div className="detail">
            <h3>Specialization</h3>
            <input name="specialization" type="text" value={user.specialization} onChange={handleInputs} />
        </div>
        <div className="terms">
            <input type="checkbox" />
            <h3>I agree with <Link to="">Terms and conditions</Link></h3>
        </div>
        <button className="button" type="submit" value="register" id="signup" name="signup">Create Account</button>
        <div className="signin">
            <Link to="/">Already have an account? Sign In</Link>
        </div>
        </form>
        <img src={docImg} alt="docImage" />
    </div>
  )
}

export default SignUp;

