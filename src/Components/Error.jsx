import React from "react";
import "../Style/VirtualHendiInterface.css";

export function Error(props) {
  return (
    <div className="spinner-container">
      <img src="/public/error.png" className="error" alt="error" />
      <label>Error fetching spectrum!</label>
    </div>
  );
}

