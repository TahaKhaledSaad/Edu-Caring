import React, { useState } from "react";
import logo from "../../../assets/logo-removebg-preview.png";
import { Link, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function SideBar() {
  // State to track the active link
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();

  // Check the current path to determine the active link
  const handleSetActiveLink = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-between p-4 h-100 sideBar">
        <Link
          to="home"
          className="d-flex align-items-center"
          onClick={() => handleSetActiveLink("home")}
        >
          <img src={logo} alt="logo" width={"200px"} />
        </Link>
        <hr className="opacity-0" />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className={`nav-item my-2 ${activeLink === "home" && "active"}`}>
            <Link
              to="home"
              className="nav-link px-4"
              onClick={() => handleSetActiveLink("home")}
              style={{
                background: activeLink === "home" && "#3296D4",
                color: activeLink === "home" && "#fff",
              }}
            >
              <i className="bi bi-house-door me-2 fs-5"></i>
              <span className="fs-5 ">Home</span>
            </Link>
          </li>
          <li
            className={`nav-item my-2 ${activeLink === "myevents" && "active"}`}
          >
            <Link
              to="myevents"
              className="nav-link px-4"
              onClick={() => handleSetActiveLink("myevents")}
              style={{
                background: activeLink === "myevents" && "#3296D4",
                color: activeLink === "myevents" && "#fff",
              }}
            >
              <i className="bi bi-ticket-perforated me-2 fs-5"></i>
              <span className="fs-5 ">My Events</span>
            </Link>
          </li>
          <li
            className={`nav-item my-2 ${
              activeLink === "community" && "active"
            }`}
          >
            <Link
              to="community"
              className="nav-link px-4"
              onClick={() => handleSetActiveLink("community")}
              style={{
                background: activeLink === "community" && "#3296D4",
                color: activeLink === "community" && "#fff",
              }}
            >
              <i className="bi bi-chat-square-text me-2 fs-5"></i>
              <span className="fs-5 ">Community</span>
            </Link>
          </li>
          <li
            className={`nav-item my-2 ${activeLink === "profile" && "active"}`}
          >
            <Link
              to="profile"
              className="nav-link px-4"
              onClick={() => handleSetActiveLink("profile")}
              style={{
                background: activeLink === "profile" && "#3296D4",
                color: activeLink === "profile" && "#fff",
              }}
            >
              <i className="bi bi-person me-2 fs-5"></i>
              <span className="fs-5 ">Profile</span>
            </Link>
          </li>
        </ul>
        <div className="text-danger px-4">
          <i className="fa-solid fa-arrow-right-from-bracket me-2 fs-5 "></i>
          <span className="fs-5 ">log out</span>
        </div>
      </div>
    </>
  );
}

export default SideBar;
