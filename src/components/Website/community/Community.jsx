import { useState, useEffect } from "react";
import axios from "axios";
import Cookie from "cookie-universal";

export default function Community() {
  const [community, setCommunity] = useState([]);

  const cookie = new Cookie();
  const userId = cookie.get("userId");
  console.log(userId);

  useEffect(() => {
    axios
      .get("http://hossamelhadad-001-site12.atempurl.com/api/Community/GetByUserId", {
        headers: {
          UserId: userId,
        },
      })
      .then((data) => {
        console.log(data);
        setCommunity(data.data.responseObject);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(community);
  return <div>Community</div>;
}
