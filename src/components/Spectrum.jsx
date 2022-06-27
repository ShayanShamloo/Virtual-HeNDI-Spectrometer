import React, { useEffect } from "react";
import Dygraph from "dygraphs";
import "../style/VirtualHendiInterface.css";
import { saveAs } from "file-saver";

function Spectrum({ data }) {
  useEffect(() => {
    if (data) {
      generateSpectrum();
    }
  });

  const generateSpectrum = () => {
    return new Dygraph(document.getElementById("spectrum"), data, {
      animatedZooms: true,
      xlabel: "Wavelength (cm<sup>-1</sup>)",
      ylabel: "Intensity",
      width: "auto",
      height: "auto",
      xValueParser: parseFloat,
    });
  };

  const downloadSpectrum = () => {
    const blob = new Blob([data], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "spectrum.csv");
  };

  return (
    <div>
      <div id="spectrum" />
      <button onClick={downloadSpectrum}>Download Spectrum</button>
    </div>
  );
}
export default Spectrum;
