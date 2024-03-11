import { Route, Routes } from "react-router-dom";

// Auth
import Login from "./components/Website/Login.jsx";
import AttendanceReg from "./components/Website/Register/AttendanceReg.jsx";
import SpeakerReg from "./components/Website/Register/SpeakerReg.jsx";

// Main Page
import LandingPage from "./components/Website/LandingPage/LandingPage.jsx";
import Test from "./components/Test.jsx";
import RequireAuth from "./components/Website/Register/RequireAuth.jsx";
// import Home from "./components/Website/home/Home.jsx";

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
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register-attendance" element={<AttendanceReg></AttendanceReg>}></Route>
        <Route path="register-speaker" element={<SpeakerReg></SpeakerReg>}></Route>
        <Route path="/test" element={<Test></Test>}></Route>

        <Route element={<RequireAuth></RequireAuth>}>
          <Route path="myevents" element={<Test></Test>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// <>
//   <div className="d-flex min-vh-100">
//     <div className="col-auto">
//       <SideBar></SideBar>
//     </div>
//     <div className="flex-grow-1">
//       <TopBar></TopBar>
//     <Routes>
//       <Route path="/" element={<Home></Home>}></Route>
//       <Route path="home" element={<Home></Home>}></Route>
//       <Route path="community" element={<Community></Community>}></Route>
//       <Route path="profile" element={<Profile></Profile>}></Route>
//       <Route path="myevents" element={<MyEvents></MyEvents>}></Route>
//       <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
//     </Routes>
//     </div>
//   </div>
// </>
