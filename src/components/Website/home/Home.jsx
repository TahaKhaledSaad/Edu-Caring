import { Outlet, Link, useLocation } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import TopBar from "../topBar/TopBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE } from "../../../Api";
import "./Home.css";
import Cookie from "cookie-universal";

// Translation Work
import { useTranslation } from "react-i18next";

export default function Home() {
  // Translation Work
  const { i18n } = useTranslation();

  // to show the defualt content of the home
  const location = useLocation();
  const isHomeRoute = location.pathname === "/home";

  const cookie = new Cookie();
  const userId = cookie.get("userId");

  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE}/Event/GetUpCommingForApp`, {
        headers: {
          UserId: userId,
        },
        params: {
          limite: 100,
          skip: 0,
        },
      })
      .then((data) => {
        setEvents(data.data.responseObject.events);
      })
      .catch((err) => console.log(err));
  }, []);
 
  const [recommendEvents, setrecommendEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE}/Event/GetAll`, {
        params: {
          limite: 1000,
          skip: 0,
        },
      })
      .then((data) => {
        setrecommendEvents(data.data.responseObject);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(events);

  return (
    <div>
      <SideBar />
      <TopBar />
      <div className="outlet pl-2">
        {isHomeRoute && (
          <div className="home-comp">
            <div className="period">
              <h3 className="statement">
                Programming : How to begin your first job! and more details
              </h3>
              <div className="content">
                <div className="nums">
                  <h4>02</h4>:<h4>01</h4>:<h4>13</h4>
                </div>

                <div className="text">
                  <p>Days</p>
                  <p>Hours</p>
                  <p>Minutes</p>
                </div>
              </div>
            </div>

            <div className="coming-events">
              <h3 className="fw-bold mb-4">Upcoming Events</h3>
              <div className="events">
                {events.map((event) => (
                  <Link key={event.id} className="event" to={`event/${event.id}`}>
                    <img src={event.displayPrimeImageURL} alt="event-Img" />

                    <div className="content">
                      <div className="txt">
                        <h5 className="text-start">{event.name}</h5>
                        <div className="info">
                          <div className="location">
                            <i className="bi bi-geo-alt-fill"></i>
                            <span>{event.eventDays[0].address}</span>
                          </div>
                          <div className="money">
                            <i className="bi bi-cash-stack"></i>
                            {event.totalPrice}
                          </div>
                        </div>
                      </div>

                      <div className="date">
                        <p className="day m-0">
                          {new Date(event.startDay).toLocaleDateString("en-US", {
                            day: "numeric",
                          })}
                        </p>
                        <p className="month">
                          {new Date(event.startDay).toLocaleDateString("en-US", {
                            month: "short",
                          })}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="recommend mb-3">
              <h4 className="fw-bold mb-4">Recommendations for you</h4>
              <div className="events d-flex gap-4 flex-wrap justify-content-center align-items-center">
                {recommendEvents.map((event) => (
                  <Link key={event.id} className="event" to={`event/${event.id}`}>
                    <img src={event.displayPrimeImageURL} alt="event-Img" />

                    <div className="info">
                      <h6>{i18n.language === "en" ? event.nameEn : event.nameAr}</h6>
                      <p>
                        <i className="fa-solid fa-calendar-days"></i>
                        05 Mars, 2023
                      </p>
                      <p>
                        <i className="bi bi-geo-alt-fill"></i>
                        {event.eventDays[0].address}
                      </p>
                      <div className="btns">
                        {event.isOnline && <span className="online">{ i18n.language === 'en'? 'Online': 'بث مباشر' }</span>}
                        {event.offline && <span className="offline">{ i18n.language === 'en'? 'Offline': 'مكان محدد' }</span>}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}
