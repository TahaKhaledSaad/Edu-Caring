import { useState, useEffect } from "react";
import axios from "axios";
import Cookie from "cookie-universal";
import { BASE } from "./../../../Api";

export default function Profile() {
  const [user, setUser] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);

  const cookie = new Cookie();
  const userId = cookie.get("userId");

  useEffect(() => {
    axios
      .post(
        `${BASE}/Auth/GetProfile`,
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
  }, [userId]);
  console.log("##########");
  console.log(user);

  const handleEditClick = () => setIsEditMode(true);

  // const handleSaveClick = () => {
  //   setIsEditMode(false);
  //   // Assuming user is an object containing the data mentioned in your question

  //   // Create a new FormData object
  //   const formData = new FormData();

  //   // Append each key-value pair to the formData object
  //   formData.append("PhoneNumber", "55512125215225221");
  //   formData.append("UserId", "");
  //   formData.append("Email", "");
  //   formData.append("NameAr", "");
  //   formData.append("NameEn", "");
  //   formData.append("GenderId", "");
  //   formData.append("ProfileImage", "");
  //   formData.append("ProfileImageFile", "");
  //   formData.append("DateOfBirth", "");
  //   formData.append("City", "");
  //   formData.append("Country", "");
  //   formData.append("Specialization", "");
  //   formData.append("SpecializationCategoryId", "");
  //   formData.append("PassportNumber", "");
  //   formData.append("HealthAuthorityNumber", "");
  //   formData.append("PassportImageFile", "");
  //   formData.append("CvFile", "");
  //   formData.append("WalaaCarFile", "");
  //   formData.append("Bio", "");
  //   formData.append("CurrentWorkPlace", "");
  //   formData.append("BankAccount", "");
  //   formData.append("SaudiAuthorityNumber", "");
  //   formData.append("ExpYears", "");

  //   // formData.append("PhoneNumber", user.phoneNumber);
  //   // formData.append("UserId", user.id);
  //   // formData.append("Email", user.email);
  //   // formData.append("NameAr", user.nameAr);
  //   // formData.append("NameEn", user.nameEn);
  //   // formData.append("GenderId", user.genderId);
  //   // formData.append("ProfileImage", user.profileImage);
  //   // formData.append("ProfileImageFile", user.displayProfileImage);
  //   // formData.append("DateOfBirth", user.dateOfBirth);
  //   // formData.append("City", user.city);
  //   // formData.append("Country", user.country);
  //   // formData.append("Specialization", user.specialization);
  //   // formData.append("SpecializationCategoryId", user.specializationCategoryId);
  //   // formData.append("PassportNumber", user.passportNumber);
  //   // formData.append("HealthAuthorityNumber", user.healthAuthorityNumber);
  //   // formData.append("PassportImageFile", user.displayPassportImageURL);
  //   // formData.append("CvFile", user.cvURL);
  //   // formData.append("WalaaCarFile", user.walaaCardURL);
  //   // formData.append("Bio", user.bio);
  //   // formData.append("CurrentWorkPlace", user.currentWorkPlace);
  //   // formData.append("BankAccount", user.bankAccount);
  //   // formData.append("SaudiAuthorityNumber", user.saudiAuthorityNumber);
  //   // formData.append("ExpYears", user.expYears);

  //   // Now formData contains all the key-value pairs

  //   axios
  //     .put(`${BASE}/Auth/UpdateProfile`, formData, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "text/plain",
  //       },
  //     })
  //     .then((data) => {
  //       console.log("From Put Request:");
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));
  // };


  const updatedUserData = {
    PhoneNumber: user.phoneNumber,
    UserId: user.id,
    Email: user.email,
    NameAr: user.nameAr,
    NameEn: user.nameEn,
    GenderId: user.genderId,
    ProfileImage: user.profileImage,
    ProfileImageFile: user.displayProfileImage,
    DateOfBirth: user.dateOfBirth,
    City: user.city,
    Country: user.country,
    Specialization: user.specialization,
    SpecializationCategoryId: user.specializationCategoryId,
    PassportNumber: user.passportNumber,
    HealthAuthorityNumber: user.healthAuthorityNumber,
    PassportImageFile: user.displayPassportImageURL,
    CvFile: user.cvURL,
    WalaaCarFile: user.walaaCardURL,
    Bio: user.bio,
    CurrentWorkPlace: user.currentWorkPlace,
    BankAccount: user.bankAccount,
    SaudiAuthorityNumber: user.saudiAuthorityNumber,
    ExpYears: user.expYears,
  };

  console.log(updatedUserData);

  const handleSaveClick = () => {
    console.log("user form update");
    console.log(user);
    setIsEditMode(false);

    const formData = new FormData();

    // formData.append("PhoneNumber", user.phoneNumber);
    // formData.append("UserId", user.id);
    // formData.append("Email", user.email);
    // formData.append("NameAr", user.nameAr);
    // formData.append("NameEn", user.nameEn);
    // formData.append("GenderId", user.genderId);
    // formData.append("ProfileImage", user.profileImage);
    // formData.append("ProfileImageFile", user.displayProfileImage);
    // formData.append("DateOfBirth", user.dateOfBirth);
    // formData.append("City", user.city);
    // formData.append("Country", user.country);
    // formData.append("Specialization", user.specialization);
    // formData.append("SpecializationCategoryId", user.specializationCategoryId);
    // formData.append("PassportNumber", user.passportNumber);
    // formData.append("HealthAuthorityNumber", user.healthAuthorityNumber);
    // formData.append("PassportImageFile", user.displayPassportImageURL);
    // formData.append("CvFile", user.cvURL);
    // formData.append("WalaaCarFile", user.walaaCardURL);
    // formData.append("Bio", user.bio);
    // formData.append("CurrentWorkPlace", user.currentWorkPlace);
    // formData.append("BankAccount", user.bankAccount);
    // formData.append("SaudiAuthorityNumber", user.saudiAuthorityNumber);
    // formData.append("ExpYears", user.expYears);

    const updatedUserData = {
      PhoneNumber: user.phoneNumber,
      UserId: user.id,
      Email: user.email,
      NameAr: user.nameAr,
      NameEn: user.nameEn,
      GenderId: user.genderId,
      ProfileImage: user.profileImage,
      ProfileImageFile: user.displayProfileImage,
      DateOfBirth: user.dateOfBirth,
      City: user.city,
      Country: user.country,
      Specialization: user.specialization,
      SpecializationCategoryId: user.specializationCategoryId,
      PassportNumber: user.passportNumber,
      HealthAuthorityNumber: user.healthAuthorityNumber,
      PassportImageFile: user.displayPassportImageURL,
      CvFile: user.cvURL,
      WalaaCarFile: user.walaaCardURL,
      Bio: user.bio,
      CurrentWorkPlace: user.currentWorkPlace,
      BankAccount: user.bankAccount,
      SaudiAuthorityNumber: user.saudiAuthorityNumber,
      ExpYears: user.expYears,
    };

    console.log(updatedUserData);

    axios
      .put(`${BASE}/Auth/UpdateProfile`, formData)
      .then((data) => {
        console.log("From Put Request:");
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  function formatDate(dateString) {
    if (!dateString) return "";

    const datePart = dateString.split("T")[0];
    const [year, month, day] = datePart.split("-");
    return `${parseInt(day)}/${parseInt(month)}/${parseInt(year)}`;
  }

  const formattedDateOfBirth = user && formatDate(user.dateOfBirth);

  return (
    <>
      {user && (
        <div className="profile p-4 w-75">
          <div
            className="head d-flex gap-3 align-items-center pb-3"
            style={{ borderBottom: "1px solid #DCDCDC" }}
          >
            <div className="position-relative">
              {user.displayProfileImage ? (
                <img
                  src={user.displayProfileImage}
                  alt="personImg"
                  width={"120px"}
                  height={"120px"}
                  className="rounded-circle"
                />
              ) : (
                <div
                  className="rounded-circle mb-2"
                  style={{
                    width: "120px",
                    height: "120px",
                    background: "lightgray",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: " 0 auto",
                  }}
                >
                  <span className="text-dark fs-3 fw-bold">
                    {user.nameEn?.substring(0, 2).toUpperCase()}
                  </span>
                </div>
              )}

              <input type="file" id="img" hidden />
              <label htmlFor="img">
                {user.displayProfileImage ? (
                  <i
                    className="fa-solid fa-camera p-2 text-white rounded-circle position-absolute bottom-0"
                    style={{
                      backgroundColor: "#3296D4",
                      right: "5px",
                      cursor: "pointer",
                    }}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-camera p-2 text-white rounded-circle position-absolute"
                    style={{
                      backgroundColor: "#3296D4",
                      right: "10px",
                      bottom: "25px",
                      cursor: "pointer",
                    }}
                  ></i>
                )}
              </label>
            </div>
            <div className="text flex-grow-1">
              {isEditMode ? (
                <div>
                  <h3>
                    <input
                      type="text"
                      className="border-0 mb-1"
                      style={{ outline: "0" }}
                      value={user.nameEn}
                      onChange={(e) => setUser({ ...user, nameEn: e.target.value })}
                    />
                  </h3>
                  <p>
                    <input
                      type="text"
                      className="border-0 mb-1 w-50"
                      style={{ outline: "0" }}
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="fs-3">{user.nameEn}</h3>
                  <p style={{ color: "#747688" }}>{user.email}</p>
                </div>
              )}
            </div>
            <div
              className="edit px-3 py-2 text-white rounded d-flex align-items-center"
              style={{ background: "#27AE60", cursor: "pointer" }}
              onClick={isEditMode ? handleSaveClick : handleEditClick}
            >
              <i
                className={
                  isEditMode ? "fa-regular fa-check-square" : "fa-regular fa-pen-to-square"
                }
              ></i>
              <span className="ms-2">{isEditMode ? "Save" : "Edit"}</span>
            </div>
          </div>

          <div
            className="info my-3 d-grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fill ,minmax(350px, 1fr))",
            }}
          >
            <div
              className={`info-item p-2 border rounded d-flex flex-column ${
                isEditMode ? "edit-mode" : ""
              }`}
            >
              {isEditMode ? (
                <input
                  type="text"
                  className="border-0 mb-1"
                  style={{ outline: "0" }}
                  value={user.nameAr}
                  onChange={(e) => setUser({ ...user, nameAr: e.target.value })}
                />
              ) : (
                <span className="fs-5">{user.nameAr}</span>
              )}
              <span
                style={{
                  color: "#747688",
                  fontSize: isEditMode ? "12px" : "14px",
                }}
              >
                الإسم (باللغة العربية)
              </span>
            </div>

            <div
              className={`info-item p-2 border rounded d-flex flex-column ${
                isEditMode ? "edit-mode" : ""
              }`}
            >
              {isEditMode ? (
                <input
                  type="text"
                  className="border-0 mb-1"
                  style={{ outline: "0" }}
                  value={user.phoneNumber}
                  onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                />
              ) : (
                <span className="fs-5">{user.phoneNumber}</span>
              )}
              <span
                style={{
                  color: "#747688",
                  fontSize: isEditMode ? "12px" : "14px",
                }}
              >
                phone number
              </span>
            </div>

            <div className="d-flex border rounded p-3 py-2 justify-content-between gap-3 overflow-hidden">
              <div
                className={`info-item p-2 d-flex flex-column ${isEditMode ? "edit-mode" : ""}`}
                style={{ borderRight: "1px solid #DCDCDC" }}
              >
                {isEditMode ? (
                  <input
                    type="text"
                    className="border-0 mb-1"
                    style={{ outline: "0" }}
                    value={formattedDateOfBirth}
                    onChange={(e) => setUser({ formattedDateOfBirth: e.target.value })}
                  />
                ) : (
                  <span className="fs-5">{formattedDateOfBirth}</span>
                )}
                <span
                  style={{
                    color: "#747688",
                    fontSize: isEditMode ? "12px" : "14px",
                  }}
                >
                  date
                </span>
              </div>
              <div
                className={`info-item p-2 d-flex flex-column flex-grow-1 ${
                  isEditMode ? "edit-mode" : ""
                }`}
              >
                {isEditMode ? (
                  <input
                    type="text"
                    className="border-0 mb-1"
                    style={{ outline: "0" }}
                    value={user.gender?.name}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        gender: {
                          ...user.gender,
                          name: e.target.value,
                        },
                      })
                    }
                  />
                ) : (
                  <span className="fs-5">{user.gender?.name}</span>
                )}
                <span
                  style={{
                    color: "#747688",
                    fontSize: isEditMode ? "12px" : "14px",
                  }}
                >
                  gender
                </span>
              </div>
            </div>

            <div className="d-flex border rounded p-3 py-2 justify-content-between gap-3 overflow-hidden">
              <div
                className={`info-item p-2 d-flex flex-column ${isEditMode ? "edit-mode" : ""}`}
                style={{ borderRight: "1px solid #DCDCDC" }}
              >
                {isEditMode ? (
                  <input
                    type="text"
                    className="border-0 mb-1"
                    style={{ outline: "0" }}
                    value={user.country}
                    onChange={(e) => setUser({ ...user, country: e.target.value })}
                  />
                ) : (
                  <span className="fs-5" style={{ display: "inline-block", marginRight: "50px" }}>
                    {user.country}
                  </span>
                )}
                <span
                  style={{
                    color: "#747688",
                    fontSize: isEditMode ? "12px" : "14px",
                  }}
                >
                  country
                </span>
              </div>
              <div
                className={`info-item p-2 d-flex flex-column flex-grow-1 ${
                  isEditMode ? "edit-mode" : ""
                }`}
              >
                {isEditMode ? (
                  <input
                    type="text"
                    className="border-0 mb-1"
                    style={{ outline: "0" }}
                    value={user.city}
                    onChange={(e) => setUser({ ...user, city: e.target.value })}
                  />
                ) : (
                  <span className="fs-5"> {user.city}</span>
                )}
                <span
                  style={{
                    color: "#747688",
                    fontSize: isEditMode ? "12px" : "14px",
                  }}
                >
                  City
                </span>
              </div>
            </div>

            <div
              className={`info-item p-2 border rounded d-flex flex-column ${
                isEditMode ? "edit-mode" : ""
              }`}
            >
              {isEditMode ? (
                <input
                  type="text"
                  className="border-0 mb-1"
                  style={{ outline: "0" }}
                  value={user.healthAuthorityNumber ? user.healthAuthorityNumber : "NON"}
                  onChange={(e) => setUser({ ...user, healthAuthorityNumber: e.target.value })}
                />
              ) : (
                <span className="fs-5">
                  {user.healthAuthorityNumber ? user.healthAuthorityNumber : "NON"}
                </span>
              )}
              <span
                style={{
                  color: "#747688",
                  fontSize: isEditMode ? "12px" : "14px",
                }}
              >
                health authority number
              </span>
            </div>

            <div className="d-flex border rounded p-3 py-2 justify-content-between gap-3 overflow-hidden">
              <div
                className={`info-item p-2 d-flex flex-column flex-grow-1 ${
                  isEditMode ? "edit-mode" : ""
                }`}
                style={{ borderRight: "1px solid #DCDCDC" }}
              >
                {isEditMode ? (
                  <input
                    type="text"
                    className="border-0 mb-1"
                    style={{ outline: "0" }}
                    value={user.specializationCategory?.name}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        specializationCategory: {
                          ...user.specializationCategory,
                          name: e.target.value,
                        },
                      })
                    }
                  />
                ) : (
                  <span className="fs-5">{user.specializationCategory?.name}</span>
                )}
                <span
                  style={{
                    color: "#747688",
                    fontSize: isEditMode ? "12px" : "14px",
                  }}
                >
                  Specialist
                </span>
              </div>
              <div
                className={`info-item p-2 d-flex flex-column flex-grow-1 ${
                  isEditMode ? "edit-mode" : ""
                }`}
              >
                {isEditMode ? (
                  <input
                    type="text"
                    className="border-0 mb-1"
                    style={{ outline: "0" }}
                    value={user.specialization}
                    onChange={(e) => setUser({ ...user, specialization: e.target.value })}
                  />
                ) : (
                  <span className="fs-5">{user.specialization}</span>
                )}
                <span
                  style={{
                    color: "#747688",
                    fontSize: isEditMode ? "12px" : "14px",
                  }}
                >
                  specialization
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
