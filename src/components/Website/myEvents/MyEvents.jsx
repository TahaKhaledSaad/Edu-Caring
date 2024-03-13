import { useState, useEffect } from "react";
import axios from "axios";
import Cookie from "cookie-universal";


export default function MyEvents() {
  const [events, setEvents] = useState([]);

  const cookie = new Cookie();
  const userId = cookie.get("userId");
  console.log(userId);

  useEffect(() => {
    axios
      .get("http://hossamelhadad-001-site12.atempurl.com/api/Event/GetAllForApp", {
        headers: {
          UserId: userId,
        },
        params: {
          limite: 100,
          skip: 0,
        },
      })
      .then((data) => {
        console.log(data);
        setEvents(data.data.responseObject);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(events.events);

  return (
    <>
      <div className="myevents">
        <div className="header">
          <select name="type" id="type">
            <option value="All">All</option>
            <option value="New">New</option>
            <option value="Finished">Finished</option>
            <option value="Recorded">Recorded</option>
          </select>
          <div className="search">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="search here" />
          </div>
        </div>
        <div className="body d-flex gap-4 p-2">
          {/* {events.events.map((event) => (
            <Link to={`/event/${event.id}`} className="event" key={event.id}>
              <img src={eventImg} alt="eventImg" />
              <div className="info">
                <h6>{event.title}</h6>
                <p>
                  <i className="fa-solid fa-calendar-days"></i>
                  {event.date}
                </p>
                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  {event.location}
                </p>
                <div className="rate">
                  <span>({event.reviews.length} reviews)</span>
                  <span>
                    <i className="bi bi-star-fill"></i>
                    {event.rating}
                  </span>
                </div>
              </div>
              <div className="price">
                <h6>{event.price}</h6>
                <span>{event.currency}</span>
              </div>
            </Link>
          ))} */}
        </div>
      </div>
    </>
  );
}
