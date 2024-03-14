import { Route, Routes } from "react-router-dom";

// Auth
import Login from "./components/Website/Login.jsx";
import AttendanceReg from "./components/Website/Register/AttendanceReg.jsx";
import SpeakerReg from "./components/Website/Register/SpeakerReg.jsx";

// Main Page
import LandingPage from "./components/Website/LandingPage/LandingPage.jsx";
import RequireAuth from "./components/Website/Register/RequireAuth.jsx";
import MyEvents from "./components/Website/myEvents/MyEvents.jsx";
import Home from "./components/Website/home/Home.jsx";
import Community from "./components/Website/community/Community.jsx";
import Profile from "./components/Website/Profile/Profile.jsx";
import Event from "./components/Website/Event/Event.jsx";
import Payment from "./components/Website/payment/Payment.jsx";
import SpeakerProfile from "./components/Website/speakerProfile/SpeakerProfile.jsx";


// import Verfication from "./components/Website/verfiy-number/Verfication.jsx";
// import SideBar from "./components/Website/SideBar/SideBar";
// import Community from "./components/Website/community/Community.jsx";
// import Profile from "./components/Website/Profile/Profile.jsx";
// import MyEvents from "./components/Website/myEvents/MyEvents";
// import RequireAuth from "./components/Website/Register/RequireAuth.js";
// import NotFoundPage from "./components/Website/Notfound/NotFoundPage.jsx";
// import TopBar from './components/Website/topBar/TopBar';

function App() {
  return (
    <div>
      <Routes>
        {/* Puplic Routes */}
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register-attendance" element={<AttendanceReg />}></Route>
        <Route path="register-speaker" element={<SpeakerReg />}></Route>

        <Route element={<RequireAuth />}>
          <Route path="/home" element={<Home />}>
            <Route path="event/:eventId" element={<Event />} />
            <Route path="speakerProfile/:eventId/:eventDayId/:speakerId" element={<SpeakerProfile />} />
            <Route path="myevents" element={<MyEvents />} />
            <Route path="community" element={<Community />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
