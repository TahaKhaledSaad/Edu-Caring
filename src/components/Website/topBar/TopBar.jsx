import { useState, useEffect } from "react";
import Language from "./Language";
import Support from "./Support";
import Notification from "./Notification";
import Person from "./Person";
import { useLocation } from "react-router-dom";

export default function TopBar() {
  const location = useLocation();
  const [routeText, setRouteText] = useState("Home");

  // Use the useEffect hook to change the text when the route changes
  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setRouteText("Home");
        break;
      case "/myevents":
        setRouteText("My Events");
        break;
      case "/community":
        setRouteText("Community");
        break;
      case "/profile":
        setRouteText("Profile");
        break;
      default:
        setRouteText("Home");
        break;
    }
  }, [location]);

  return (
    <>
      <div className="topbar d-flex justify-content-between align-items-center px-2 shadow-sm">
        <span>{routeText}</span>

        <div className="d-flex align-items-center gap-3">
          <Language />
          <Support />
          <Notification />
          <Person />
        </div>
      </div>
    </>
  );
}
