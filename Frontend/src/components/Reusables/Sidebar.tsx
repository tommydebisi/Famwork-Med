import React from 'react';
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import GroupsIcon from '@mui/icons-material/Groups';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import HandshakeIcon from '@mui/icons-material/Handshake';

const Sidebar = () => {
//   const navigate = useNavigate();
  return (
    <div className="sideContainer">
       <Link to="/patient-dashboard" className="sidebar-item">
          <div className="sidebar-icon"><GroupsIcon /></div>
          <h4>Overview</h4>
       </Link>
       <Link to="/book-appointment" className="sidebar-item">
          <div className="sidebar-icon"><CreditScoreIcon /></div>
          <h4>Book Appointment</h4>
       </Link>
       <div className="sidebar-item">
          <div className="sidebar-icon"><HandshakeIcon /></div>
          <h4>Prescriptions</h4>
       </div>
    </div>
  )
}

export default Sidebar