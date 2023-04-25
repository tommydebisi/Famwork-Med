import React, { useState, useEffect } from 'react';
import mainBg from "../../Images/main-bg.jpg";
import {Link} from "react-router-dom";
import axios from "axios";
import "./Overview.scss";

const client = axios.create({
   baseURL: "https://famwork-med.onrender.com/api/v1/auth",
   headers: {
      'Content-Type': 'application/json',
      'Authorization': 'X-Access-Token'
   },
});

const Overview = () => {
     const [user, setUser] = useState()
      
     // GET with Axios
  useEffect(() => {
   const fetchUser = async () => {
       try {
           let response = await client.get('/booking/list');
           setUser(response.data);
       } catch (error)  {
           console.log(error);
       };
   };
   fetchUser();
   }, []);

  return (
    <div className="overview-container">
        <h2>Hello, User</h2>
        <h1>Welcome back</h1>
        <div className="main">
           <div className="left">
              <div className="doc">Need to find a doctor?</div>
              <div className="doc">Go online with us!</div>
              <p>Get your first medical service at your home.</p>
              <Link to="/book-appointment" className="book">Book Appointment</Link>
           </div>
           <div className="right">
              <img src={mainBg} alt="mainBg" />
           </div>
        </div>
    </div>
  )
}

export default Overview;

// 'Authorization': 'X-Access-Token'