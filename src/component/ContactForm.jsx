import React, { useState } from "react";
import "./contactForm.css";
import PopUp from "./PopUp";

function ContactForm() {
  const [openPop, setOpenPop] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    tel: "",
    address: "",
    message: "",
  });

  let name, value;
  const getData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const submitPost = async (e) => {
    e.preventDefault();
    const { name, email, tel, address, message } = userData;
    const response = await fetch(
      "https://reactform-4bea0-default-rtdb.firebaseio.com/reactForm.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          tel,
          address,
          message,
        }),
      }
    );
    if (response) {
      setOpenPop(!openPop);
    }
  };

  const handleClose = () => {
    setOpenPop(!openPop);
    setUserData({
      name: "",
      email: "",
      tel: "",
      address: "",
      message: "",
    });
  };

  return (
    <div className="main">
      <h1 className="contactHeading">Contact Us</h1>
      <div>
        <form className="formElement" method="POST" onSubmit={submitPost}>
          <input
            className="formInput"
            type="name"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={userData.name}
            onChange={getData}
            autoComplete="off"
            required={true}
          />
          <input
            className="formInput"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={userData.email}
            onChange={getData}
            autoComplete="off"
            required={true}
          />
          <input
            className="formInput"
            type="tel"
            name="tel"
            id="tel"
            placeholder="Enter your phone number"
            value={userData.tel}
            onChange={getData}
            autoComplete="off"
            required={true}
          />
          <input
            className="formInput"
            type="text"
            name="address"
            id="address"
            placeholder="Enter your address"
            value={userData.address}
            onChange={getData}
            autoComplete="off"
            required={true}
          />
          <textarea
            className="formInput"
            name="message"
            id=""
            cols="30"
            rows="1"
            autoComplete="off"
            placeholder="Enter message"
            value={userData.message}
            onChange={getData}
            required={true}
          ></textarea>
          <button className="submitButton" type="submit">
            Submit
          </button>
        </form>
        {openPop ? (
          <PopUp name={userData.name} handleClose={handleClose} />
        ) : null}
      </div>
    </div>
  );
}

export default ContactForm;
