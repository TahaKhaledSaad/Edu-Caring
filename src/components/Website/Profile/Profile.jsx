import { useState, useEffect } from "react";
import axios from "axios";
import Cookie from "cookie-universal";
import avatar from "./../../../assets/person.jpeg";

export default function Profile() {
  const [user, setUser] = useState([]);

  const cookie = new Cookie();
  const userId = cookie.get("userId");
  console.log(userId);

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

  console.log(user);
  console.log(user.profileImage === null);

  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundImage: `url(${user.profileImage === null ? avatar : user.profileImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      Profile
    </div>
  );
}
