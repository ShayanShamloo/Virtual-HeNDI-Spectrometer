import React, { useState } from "react";
import "../Style/Hendi.css";
import Tooltip from "./Tooltip";

function Hendi({ id, seeOutside }) {
  const bg = true;
  const [activeToolTipHeader, setActiveToolTipHeader] = useState("");
  const [activeToolTipText, setActiveToolTipText] = useState("");
  const [toolTipActive, setToolTipActive] = useState(false);

  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const setActiveTooltip = (tooltip) => {
    const tooltips = {
      detection: {
        header: "Detection Chamber",
        text: (
          <p>
            This chamber contains the mass spectrometer and often has pressures
            as low as 10<sup>-11</sup> Torr.
          </p>
        ),
      },
      doping: {
        header: "Doping Chamber",
        text: (
          <p>
            This chamber is where the analyte molecules condense into the
            molecular beam.
          </p>
        ),
      },
      source: {
        header: "Source Chamber",
        text: <p>This is where the Helium droplets are formed.</p>,
      },
      coldhead: {
        header: "Coldhead",
        text: (
          <p>
            This is a large piece of copper which is cooled to a temperature of
            around 30 K by the cyclic evaporation and condensation of helium.
          </p>
        ),
      },
      stark: {
        header: "Stark Cell",
        text: (
          <p>
            The Stark cell consists of two mirror-polished steel plates that are
            used to generate an electric field of up to 75 kV/cm. The electric
            field affects the rotation of the analyte based on its dipole
            moment.
          </p>
        ),
      },
      quad: {
        header: "Quadrupole mass spectrometer",
        text: (
          <p>
            The mass spectrometer is used to measure the helium evaporated by
            the excitation and subsequent relaxation of the analyte due to the
            laser.
          </p>
        ),
      },
      laserbeam: {
        header: "Infrared Laser",
        text: (
          <p>
            The laser is used to excite the analyte at certain wavelengths,
            which causes the moleule to relax, transferring its energy to the
            helium surrounding it, causing some helium to evaporate.&nbsp; This
            causes a decrease in the total ion signal from the mass
            spectrometer, which forms a spectrum when scanning across a range of
            wavelengths.
          </p>
        ),
      },
      canister: {
        header: "Gas Cannister",
        text: (
          <p>
            The analyte, in gas form, is stored here. It is leaked into the
            doping chamber via a leak valve
          </p>
        ),
      },
      skimmer: {
        header: "Skimmer",
        text: (
          <p>
            The spray of helium droplets are skimmed into a molecular beam,
            which then travels into the doping chamber
          </p>
        ),
      },
      nozzle: {
        header: "Nozzle",
        text: (
          <p>
            The helium gas, chilled from thermal contact with the coldhead, is
            ejected from the nozzle into vacuum (~10<sup>-5</sup> Torr), rapidly
            cooling the helium to 0.4 K, where it condenses into a superfluid.
          </p>
        ),
      },
    };
    setToolTipActive(true);
    setActiveToolTipHeader(tooltips[tooltip].header);
    setActiveToolTipText(tooltips[tooltip].text);
  };

  const mouseMove = (ev) => {
    setTop(ev.clientY);
    setLeft(ev.clientX);
  };

  return (
    <div className="hendi-box" id={id} onMouseMove={mouseMove}>
      <img
        alt="background"
        className={`hendi-component ${bg ? "" : "transparent"}`}
        id="hendi-bg"
        src="/virtual-hendi/images/hendi-background.png"
      />
      <img
        alt="foreground"
        className={`hendi-component ${seeOutside ? "" : "transparent"}`}
        id="hendi-fg"
        src="/virtual-hendi/images/hendi-foreground.png"
      />
      <img
        alt="coldhead"
        className={`hendi-component ${!seeOutside ? "" : "transparent"}`}
        id="hendi-ch"
        src="/virtual-hendi/images/hendi-coldhead.png"
      />
      <img
        alt="stark cell"
        className={`hendi-component ${!seeOutside ? "" : "transparent"}`}
        id="hendi-stark"
        src="/virtual-hendi/images/hendi-stark.png"
      />
      <img
        alt="quadrupole"
        className={`hendi-component ${!seeOutside ? "" : "transparent"}`}
        id="hendi-quad"
        src="/virtual-hendi/images/hendi-quad.svg"
      />
      <img
        alt="laserbeam"
        className={`hendi-component ${!seeOutside ? "" : "transparent"}`}
        id="hendi-laserbeam"
        src="/virtual-hendi/images/hendi-laserbeam.svg"
      />
      <img
        alt="OCS canister"
        className={`hendi-component ${seeOutside ? "" : "transparent"}`}
        id="hendi-ocs-canister"
        src="/virtual-hendi/images/hendi-ocs-canister.png"
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
    </div>
  );
}

export default Hendi;
