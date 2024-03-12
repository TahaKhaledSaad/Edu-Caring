import eventImg1 from "../../../assets/event-img1.jpeg";
import eventImg2 from "../../../assets/event-img2.jpeg";
import eventImg3 from "../../../assets/event-img3.jpeg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
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
          <h3>Upcoming Events</h3>
          <div className="events">
            <Link className="event">
              <img src={eventImg1} alt="event-Img" />

              <div className="content">
                <div className="txt">
                  <h5>Programming : How to begin your t..</h5>
                  <div className="info">
                    <div className="location">
                      <i className="bi bi-geo-alt-fill"></i>
                      <span>Sohag, Egypt</span>
                    </div>
                    <div className="money">
                      <i className="bi bi-cash-stack"></i>
                      free
                    </div>
                  </div>
                </div>

                <div className="date">
                  <p>
                    12 <br /> Jan
                  </p>
                </div>
              </div>
            </Link>

            <Link className="event">
              <img src={eventImg2} alt="event-Img" />

              <div className="content">
                <div className="txt">
                  <h5>Programming : How to begin your t..</h5>
                  <div className="info">
                    <div className="location">
                      <i className="bi bi-geo-alt-fill"></i>
                      <span>Sohag, Egypt</span>
                    </div>
                    <div className="money">
                      <i className="bi bi-cash-stack"></i>
                      free
                    </div>
                  </div>
                </div>

                <div className="date">
                  <p>
                    12 <br /> Jan
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="recommend">
          <h4>Recommendations for you</h4>
          <div className="events d-flex gap-4">
            <Link className="event">
              <img src={eventImg3} alt="eventImg" />
              <div className="info">
                <h6>Problem Solving tricks</h6>
                <p>
                  <i className="fa-solid fa-calendar-days"></i>
                  05 Mars, 2023
                </p>
                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  block 5, zori street, tahta,So..
                </p>
                <div className="btns">
                  <span>online</span>
                  <span>offline</span>
                </div>
              </div>
              <div className="price">
                <h6>250</h6>
                <span>SAR</span>
              </div>
            </Link>

            <Link className="event">
              <img src={eventImg3} alt="eventImg" />
              <div className="info">
                <h6>Problem Solving tricks</h6>
                <p>
                  <i className="fa-solid fa-calendar-days"></i>
                  05 Mars, 2023
                </p>
                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  block 5, zori street, tahta,So..
                </p>
                <div className="rate">
                  <span>(4 reviews)</span>
                  <span>
                    <i className="bi bi-star-fill"></i>
                    3.2
                  </span>
                </div>
              </div>
              <div className="price">
                <h6>250</h6>
                <span>SAR</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
