import React from "react";
import "./popUp.css";

function PopUp({name,handleClose}) {
  return (
    <div className="main-box">
      <div className="popup-box">
        <h1>Thanks {name}</h1>
        <p>Your Data has been stored in our Database</p>
        <button className="closeButton" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

export default PopUp;
