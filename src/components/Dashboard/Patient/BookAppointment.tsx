import React from 'react'
import Header from '../../Reusables/Header'
import Sidebar from '../../Reusables/Sidebar'
import firstDoc from '../../Images/man-doc.png'
import "./BookAppointment.scss";
import { GrNext } from "react-icons/gr";
import {Link} from "react-router-dom";

const BookAppointment = () => {
  return (
    <div className="appointmentContainer">
      <div className="appointment-header">
        <Header />
      </div>
      <div className="appointment-sidebar">
        <Sidebar />
      </div>
      <div className="appointment-detail">
        <Link to="/doctor-profile" className="choose">
           <img src={firstDoc} alt="firstDoc" />
           <div className="doc-text">
               <div>Dr. Peter Parker</div>
               <div>10 yrs+ experience</div>
           </div>
           <div className='next'>
              <GrNext />
           </div>
        </Link>
      </div>
    </div>
  )
}

export default BookAppointment;