<<<<<<< HEAD:front/src/Components/Hendi.jsx
import React from "react";
import "../Style/Hendi.css";
import SVGComponent from "./SVGComponents";

=======
import React, { useState } from "react";
import "../style/Hendi.css";
import Tooltip from "./Tooltip";
>>>>>>> 13012d8cff5b2629043f9ce98c38e5d20a81d60d:src/components/Hendi.jsx

function Hendi({ id, seeOutside }) {

  return (
<<<<<<< HEAD:front/src/Components/Hendi.jsx
    <div className="hendi-box" id={id}> 
      <SVGComponent style={{top:'0', stroke:'#fff0'}} className='click-through' part='laserexterior' /> 
      <SVGComponent style={{top:'0'}} className='click-through' part='base' />
      <SVGComponent style={{top:'0'}} className='click-through' part='lasersymbol' />
      <SVGComponent style={{top:'0'}} className='click-through' part='rpump' />
      <SVGComponent style={{top:'0'}} className='click-through' part='ddpump' />
      <SVGComponent style={{top:'0'}} className='click-through' part='sdpump' />
      <SVGComponent style={{top:'0'}} className='click-through' part='tpump' />
      <SVGComponent style={{top:'0'}} className='click-through' part='sourcechamber' />
      <SVGComponent style={{top:'0'}} className='click-through' part='dopingchamber' />
      <SVGComponent style={{top:'0'}} className='click-through' part='detectionchamber'/>

=======
    <div className="hendi-box" id={id} onMouseMove={mouseMove}>
      <img
        alt="background"
        className={`hendi-component ${bg ? "" : "transparent"}`}
        id="hendi-bg"
        src="images/hendi-background.png"
      />
      <img
        alt="foreground"
        className={`hendi-component ${seeOutside ? "" : "transparent"}`}
        id="hendi-fg"
        src="images/hendi-foreground.png"
      />
      <img
        alt="coldhead"
        className={`hendi-component ${!seeOutside ? "" : "transparent"}`}
        id="hendi-ch"
        src="images/hendi-coldhead.png"
      />
      <img
        alt="stark cell"
        className={`hendi-component ${!seeOutside ? "" : "transparent"}`}
        id="hendi-stark"
        src="images/hendi-stark.png"
      />
      <img
        alt="quadrupole"
        className={`hendi-component ${!seeOutside ? "" : "transparent"}`}
        id="hendi-quad"
        src="images/hendi-quad.png"
      />
      <img
        alt="laserbeam"
        className={`hendi-component ${!seeOutside ? "" : "transparent"}`}
        id="hendi-laserbeam"
        src="images/hendi-laserbeam.png"
      />
      <img
        alt="OCS canister"
        className={`hendi-component ${seeOutside ? "" : "transparent"}`}
        id="hendi-ocs-canister"
        src="images/hendi-ocs-canister.png"
        useMap="hendi-map"
      />
      <Tooltip
        header={activeToolTipHeader}
        text={activeToolTipText}
        visible={toolTipActive}
        left={left}
        top={top}
      ></Tooltip>
      {seeOutside && (
        <div
          className="area-div"
          id="hendi-detection-clickable"
          onMouseEnter={() => {
            setActiveTooltip("detection");
          }}
          onMouseLeave={() => {
            setToolTipActive(false);
          }}
        ></div>
      )}
      {seeOutside && (
        <div
          className="area-div"
          id="hendi-doping-clickable"
          onMouseEnter={() => {
            setActiveTooltip("doping");
          }}
          onMouseLeave={() => {
            setToolTipActive(false);
          }}
        ></div>
      )}
      {seeOutside && (
        <div
          className="area-div"
          id="hendi-source-clickable"
          onMouseEnter={() => {
            setActiveTooltip("source");
          }}
          onMouseLeave={() => {
            setToolTipActive(false);
          }}
        ></div>
      )}
      {!seeOutside && (
        <div
          className="area-div"
          id="hendi-ch-clickable"
          onMouseEnter={() => {
            setActiveTooltip("coldhead");
          }}
          onMouseLeave={() => {
            setToolTipActive(false);
          }}
        ></div>
      )}
      {!seeOutside && (
        <div
          className="area-div"
          id="hendi-stark-clickable"
          onMouseEnter={() => {
            setActiveTooltip("stark");
          }}
          onMouseLeave={() => {
            setToolTipActive(false);
          }}
        ></div>
      )}
      {!seeOutside && (
        <div
          className="area-div"
          id="hendi-quad-clickable"
          onMouseEnter={() => {
            setActiveTooltip("quad");
          }}
          onMouseLeave={() => {
            setToolTipActive(false);
          }}
        ></div>
      )}
      {!seeOutside && (
        <div
          className="area-div"
          id="hendi-laserbeam-clickable"
          onMouseEnter={() => {
            setActiveTooltip("laserbeam");
          }}
          onMouseLeave={() => {
            setToolTipActive(false);
          }}
        ></div>
      )}
      {seeOutside && (
        <div
          className="area-div"
          id="hendi-canister-clickable"
          onMouseEnter={() => {
            setActiveTooltip("canister");
          }}
          onMouseLeave={() => {
            setToolTipActive(false);
          }}
        ></div>
      )}
      {!seeOutside && (
        <div
          className="area-div"
          id="hendi-skimmer-clickable"
          onMouseEnter={() => {
            setActiveTooltip("skimmer");
          }}
          onMouseLeave={() => {
            setToolTipActive(false);
          }}
        ></div>
      )}
      {!seeOutside && (
        <div
          className="area-div"
          id="hendi-nozzle-clickable"
          onMouseEnter={() => {
            setActiveTooltip("nozzle");
          }}
          onMouseLeave={() => {
            setToolTipActive(false);
          }}
        ></div>
      )}
>>>>>>> 13012d8cff5b2629043f9ce98c38e5d20a81d60d:src/components/Hendi.jsx
    </div>
  );
}

export default Hendi;
