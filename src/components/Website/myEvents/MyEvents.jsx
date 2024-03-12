import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import eventImg from "../../../assets/event-img3.jpeg";
import axios from "axios";
import Cookie from "cookie-universal";

function getFilteredEvents(events, filterValue) {
  switch (filterValue) {
    case "Finished":
      return events.slice(0, 1);
    case "New":
      return events.slice(1, 3);
    case "Recorded":
      return events.slice(2, 6);
    case "All":
    default:
      return events;
  }
}

export default function MyEvents() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // Simulating API call to fetch events data
    setTimeout(() => {
      setEvents([
        {
          id: 1,
          title: "Event 1",
          date: "05 Mars, 2023",
          location: "block 5, zori street, tahta,So..",
          reviews: [1, 2, 3, 4],
          rating: 4.5,
          price: 250,
          currency: "SAR",
        },
        {
          id: 2,
          title: "Event 2",
          date: "06 Mars, 2023",
          location: "block 5, zori street, tahta,So..",
          reviews: [1, 2, 3, 4],
          rating: 4.0,
          price: 300,
          currency: "SAR",
        },
        {
          id: 3,
          title: "Event 3",
          date: "07 Mars, 2023",
          location: "block 5, zori street, tahta,So..",
          reviews: [1, 2, 3, 4],
          rating: 3.5,
          price: 200,
          currency: "SAR",
        },
        {
          id: 4,
          title: "Event 4",
          date: "08 Mars, 2023",
          location: "block 5, zori street, tahta,So..",
          reviews: [1, 2, 3, 4],
          rating: 3.0,
          price: 150,
          currency: "SAR",
        },
      ]);
    }, 1000); // حركة دي يا طه خد بالك
  }, []);

  const [eventss, setEventss] = useState([]);

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
        setEventss(data.data.responseObject);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(eventss);

  return (
    <>
      <div className="myevents">
        <div className="header">
          <select name="type" id="type" value={filter} onChange={(e) => setFilter(e.target.value)}>
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
          {getFilteredEvents(events, filter).map((event) => (
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
          ))}
        </div>
      </div>
    </>
  );
}
