import React from 'react';
import "./PatientDashboard.scss";
import Header from '../../Reusables/Header';
import Sidebar from '../../Reusables/Sidebar';
import Overview from './Overview';

const PatientDashboard = () => {
  return (
    <div className="dashboardContainer">
      <div className="header">
        <Header />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="patient-detail">
        <Overview />
      </div>
    </div>
  )
}

export default PatientDashboard