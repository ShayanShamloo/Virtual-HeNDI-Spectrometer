import React, { useEffect, useState } from "react";
import "../Style/Tooltip.css";

function Tooltip({ header, text, visible, left, top }) {
  if (visible) {
    return (
      <div className="tooltip" style={{ left, top }}>
        <label>{header}</label>
        <p>{text}</p>
      </div>
    );
  } else {
    return <div />;
  }
}
export default Tooltip;
