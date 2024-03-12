// import ar from "../../../assets/sudia-arabia-flag.png";
// import en from "../../../assets/united-state-flag.png";

// export default function Language() {
//     let chosLang = document.querySelector(".chosLang");
//     let icon = document.querySelector(".chosen i");
//     let lang = document.querySelectorAll(".choice > div");
//     let previousOption;

//     lang.forEach((option) => {
//       option.addEventListener("click", () => {
//         const img = option.querySelector("img");
//         const p = option.querySelector("p");
//         const chosenImg = document.querySelector(".chosen img");
//         const chosenP = document.querySelector(".chosen span");

//         chosenImg.src = img.src;
//         chosenP.innerText = p.innerText;

//         // Hide the .chosLang div
//         hide();

//         // Reset the styling of the previously selected option
//         if (previousOption) {
//           previousOption.style.color = "";
//           previousOption.querySelector("img").style.border = "";
//         }

//         // Apply styling to the clicked option
//         option.style.color = "#3296D4";
//         img.style.border = "1px solid #3296D4";

//         // Store the clicked option as the previously selected option
//         previousOption = option;
//       });
//     });

//     function show() {
//       if (chosLang.style.top === "45px") {
//         hide();
//       } else {
//         chosLang.style.cssText = "top:45px; left:10px";
//         icon.classList.remove("fa-chevron-down");
//         icon.classList.add("fa-chevron-up");
//       }
//     }

//     function hide() {
//       chosLang.style.cssText = "top:-100px; left:-100px";
//       icon.classList.add("fa-chevron-down");
//       icon.classList.remove("fa-chevron-up");
//     }

//   return (
//     <>
//           <div className="chosen" onClick={show }>
//             <img src={en} alt="" width="30" height="30" />
//             <span>english</span>
//             <i className="fa-solid fa-chevron-down fa-xs"></i>
//             <div className="chosLang">
//               <p>choose language</p>
//               <div className="choice">
//                 <div>
//                   <img src={ar} alt="" width="30" height="30" />
//                   <p>العربية</p>
//                 </div>
//                 <div>
//                   <img src={en} alt="" width="30" height="30" />
//                   <p>english</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//     </>
//   );
// }

import ar from "../../../assets/sudia-arabia-flag.png";
import en from "../../../assets/united-state-flag.png";
import { useState } from "react";

export default function Language() {
  const [chosenLang, setChosenLang] = useState({
    img: en,
    name: "english",
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [activeChoice, setActiveChoice] = useState(null);

  function handleChosenClick() {
    setPopupVisible((prevState) => !prevState);
  }

  function handleChoiceClick(imgSrc, langName, option) {
    return () => {
      setChosenLang({ img: imgSrc, name: langName });
      setPopupVisible(false);
      setActiveChoice(option);
    };
  }

  return (
    <>
      <div className="chosen" onClick={handleChosenClick}>
        <img src={chosenLang.img} alt="" width="30" height="30" />
        <span>{chosenLang.name}</span>
        <i
          className={`fa-solid fa-chevron-${
            popupVisible ? "up" : "down"
          } fa-xs`}
        ></i>
        <div
          className="chosLang"
          style={{
            top: popupVisible ? "45px" : "-100px",
            left: popupVisible ? "10px" : "-100px",
          }}
        >
          <p>choose language</p>
          <div className="choice">
            <div
              onClick={handleChoiceClick(ar, "العربية", ar)}
              style={{ color: activeChoice === ar ? "#3296D4" : "" }}
            >
              <img
                src={ar}
                alt=""
                width="30"
                height="30"
                style={{
                  border: activeChoice === ar ? "1px solid #3296D4" : "",
                }}
              />
              <p>العربية</p>
            </div>
            <div
              onClick={handleChoiceClick(en, "english", en)}
              style={{ color: activeChoice === en ? "#3296D4" : "" }}
            >
              <img
                src={en}
                alt=""
                width="30"
                height="30"
                style={{
                  border: activeChoice === en ? "1px solid #3296D4" : "",
                }}
              />
              <p>english</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
