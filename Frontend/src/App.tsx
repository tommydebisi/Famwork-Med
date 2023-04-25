import './App.css';
import {
  BrowserRouter as Router,
  Routes as RouterCover,
  Route,
} from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import PatientDashboard from './components/Dashboard/Patient/PatientDashboard';
import BookAppointment from './components/Dashboard/Patient/BookAppointment';
import SignIn from './components/SignIn/SignIn';
import DoctorProfile from './components/Dashboard/Patient/DoctorProfile';

const App = () => {
  return (
    <div className="App">
       <Router>
        <RouterCover>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/book-appointment" element={<BookAppointment /> } />
          <Route path="/doctor-profile" element={<DoctorProfile /> } />
        </RouterCover>
       </Router>
    </div>
  );
}

export default App;
