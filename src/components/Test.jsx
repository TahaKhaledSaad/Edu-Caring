import axios from "axios";
import { useEffect, useState } from "react";

function Test() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://hossamelhadad-001-site12.atempurl.com/api/Event/GetAllForApp", {
        params: {
          limite: 5,
          skip: 0,
        },
      })
      .then((data) => {
        console.log(data);
        setEvents(data.data.responseObject);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(events);

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}

export default Test;
