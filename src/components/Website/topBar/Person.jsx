import { useState, useEffect } from "react";
import axios from "axios";
import Cookie from "cookie-universal";

export default function Person() {
  const [user, setUser] = useState([]);

  const cookie = new Cookie();
  const userId = cookie.get("userId");
  // console.log(userId);

  useEffect(() => {
    axios
      .post(
        "http://hossamelhadad-001-site12.atempurl.com/api/Auth/GetProfile",
        {
          userId: userId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "text/plain",
          },
        }
      )
      .then((data) => {
        setUser(data.data.responseObject);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(user);
  return (
    <>
      <div className="person d-flex gap-3 align-items-center">
        {user.profileImage && <img src={user.profileImage} alt="person" />}
        {!user.profileImage && (
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "#ddd",
            }}
            className="d-flex justify-content-center align-items-center text-white fs-5"
          >
            <span
              className="text-dark fs-3 fw-bold"
              style={{ userSelect: "none" }}
            >
              {user.nameEn && user.nameEn.substring(0, 2).toUpperCase()}
            </span>
            {/* {user.nameEn &&
              user.nameEn.split(" ")[0][0] + user.nameEn.split(" ")[1][0]} */}
          </div>
        )}
        <div className="details mt-2">
          <span className="name">{user.nameEn}</span>
          <p className="email">{user.email}</p>
        </div>
      </div>
    </>
  );
}
