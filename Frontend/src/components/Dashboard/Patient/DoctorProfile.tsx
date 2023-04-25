import React from 'react';
import firstDoc from '../../Images/man-doc.png'
import videoImg from '../../Images/video-icon.png'
import "./DoctorProfile.scss"
import Header from '../../Reusables/Header';
import Sidebar from '../../Reusables/Sidebar';

const DoctorProfile = () => {
  return (
    <div className="docprofile-container">
      <div className="docprofile-header">
        <Header />
      </div>
      <div className="docprofile-sidebar">
        <Sidebar />
      </div>
      <div className="docprofile-detail">
       <div className="doctor-profile">
        <div className="major">Doctor Profile</div>
        <div className="upper">
            <img src={firstDoc} alt="firstDoc" />
            <div className="doc-name">Dr. Peter Parker</div>
            <div>Nephrologist</div>
        </div>
        <div className="detail">
            <h3>Experience</h3>
            <h2>10 yrs+</h2>
        </div>
        <div className="detail">
            <h3>Practice Place</h3>
            <p>Capsule Market, A Block, Tangail</p>
        </div>
        <div className="detail">
            <h3>Date of Appointment</h3>
            <input  name="date" type="date" required/>
        </div>
        <div className="detail">
            <h3>Time of Appointment</h3>
            <input type="time" required/>
        </div>
        <div className="video-call">
            <img src={videoImg} alt="videoImg" />
            <div>Video Call</div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default DoctorProfile