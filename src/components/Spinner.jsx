import React from "react";
import "../style/VirtualHendiInterface.css";

const Spinner = (props) => {
  return (
    <div className="spinner-container">
      <img src="images/spinner.png" className="spinner" alt="spinner" />
      <label>Preparing instrument...</label>
    </div>
  );
};
export default Spinner;
