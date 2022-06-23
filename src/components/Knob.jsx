import React, { useState } from "react";
import "../style/Knob.css";

function Knob(props) {
  handleDrag = handleDrag.bind();

  // TODO - this is never used
  const [step, setStep] = useState(1);

  const handleDrag = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.movementX, event.movementY);
  };

  return <div className="knob" onDrag={handleDrag}></div>;
}
