import React from "react";
import "../style/Hendi.css";
import { useState } from "react";
import { ReactComponent as Main } from "./HENDI_SVG/hendi-exterior-draft.svg";
import { Dialog } from "@mui/material";
import { imgSource, toolTips } from "../dictionaires/SVGLibrary";





function Hendi({ id, seeOutside }) {
  const [toggled, setToggled] = useState(false);
  const [element, setElement] = useState(null);

  const handleClick = (event) => {
    console.log(element);
    if (event.target.parentElement.id !== "instrument-window") {
      setElement(event.target.parentElement.id);
      setToggled(!toggled);
    }
  };

  return (
    <div id="instrument-window">
      <Main id="main" onClick={handleClick} />

      {/* {element && (
        <Dialog className="popup" onClose={handleClick} open={toggled}>
          <h2>{toolTips[element].title}</h2>
          <img src={imgSource[element]} className="example-image" alt="" />
          <p>{toolTips[element].text}</p>
        </Dialog>
      )} */}
    </div>
  );
}

export default Hendi;
