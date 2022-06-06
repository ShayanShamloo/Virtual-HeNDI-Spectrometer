import React from "react";
import "../Style/DigitalReadout.css";

function DigitalReadout(props) {
  const val = String(Number(props.number).toFixed(2)).padStart(
    props.digits || 6,
    "0"
  );
  return (
    <div id={props.id} className={props.className}>
      <label className="digital-readout">
        {val} {props.unit}
      </label>
    </div>
  );
}
