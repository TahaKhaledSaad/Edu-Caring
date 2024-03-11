import React from "react";
import personImg from "../../../assets/person.jpeg";
function Person() {
  return (
    <>
      <div className="person d-flex gap-3 align-items-center">
        <img src={personImg} alt="person" />
        <div className="details mt-2">
          <span className="name">sherif mohamed alsayed</span>
          <p className="email">sherif@educaring.com</p>
        </div>
      </div>
    </>
  );
}

export default Person;
