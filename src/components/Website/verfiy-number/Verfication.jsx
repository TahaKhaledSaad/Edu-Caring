import style from "./Verfication.module.css";
import logo from "../../../assets/logo.jpg";
import { useState } from "react";
import axios from "axios";

export default function Verfication(props) {
  // Status
  const [otp, setOtp] = useState(""); // State to store the complete OTP

  // Handler function
  const handleOnChange = (e) => {
    const maxLength = 1;
    const value = e.target.value;

    if (value.length === maxLength) {
      // Move focus to the next input field
      const nextInput = e.target.nextElementSibling;
      if (nextInput) {
        nextInput.focus();
      }

      // Concatenate the entered digit to the OTP
      setOtp((prevOtp) => prevOtp + value);
    } else if (value.length === 0) {
      // Move focus to the previous input field on backspace
      const previousInput = e.target.previousElementSibling;
      if (previousInput) {
        previousInput.focus();
      }

      // Remove the last digit from the OTP
      setOtp((prevOtp) => prevOtp.slice(0, -1));
    }
  };

  const handleContinue = async () => {
    try {
      const response = await axios.post(
        "http://hossamelhadad-001-site12.atempurl.com/api/OTP/VerifyOTPConfirmEmail",
        {
          email: props.email,
          otp: otp,
        }
      );
      console.log("OTP Sent:", response.data);
      window.location.pathname = "myevents";
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  function sendOTP() {
    axios
      .post("http://hossamelhadad-001-site12.atempurl.com/api/OTP/SendOTP", {
        params: {
          email: props.email,
        },
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.body}>
          <h4 className="mt-5">Verification</h4>
          <div className="mb-5">
            We’ve send you the verification code on <p className="text-info d-inline">Your Gmail</p>
          </div>
          <div className={style.form}>
            <input type="number" size="1" onChange={handleOnChange} />
            <input type="number" size="1" onChange={handleOnChange} />
            <input type="number" size="1" onChange={handleOnChange} />
            <input type="number" size="1" onChange={handleOnChange} />
            <input type="number" size="1" onChange={handleOnChange} />
            <input type="number" size="1" onChange={handleOnChange} />
          </div>
          <div className={style.resend}>
            <div>
              <p className="d-inline" onClick={sendOTP} style={{ cursor: "pointer" }}>
                Re-send code in
              </p>{" "}
              <p className="text-info d-inline">0:20</p>
            </div>
          </div>
          <button className="my-5" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
