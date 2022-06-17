import React from "react";
import "../style/AdjustableDigitalReadout.css";

function AdjustableDigitalReadout({
  val,
  digits,
  id,
  className,
  name,
  unit,
  onChange,
  increment,
  decrement,
}) {
  let adjustedVal = String(Number(val).toFixed(2)).padStart(digits || 6, "0");
  return (
    <div id={id} className={className + " digital-readout-adjustable"}>
      <input
        className="digital-readout"
        name={name}
        value={adjustedVal}
        unit={unit}
        digits={digits || 6}
        onChange={onChange}
        style={{ width: `${((digits || 6) + 1) / 2}em` }}
      />
      <label className="digital-readout">{unit}</label>
      <div className="button-container">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}
export default AdjustableDigitalReadout;
