import React, { useEffect } from "react";
import Dygraph from "dygraphs";
import "../Style/VirtualHendiInterface.css";
import { saveAs } from "file-saver";

function Spectrum({ data }) {
  const chartRef = React.createRef();
  let d = undefined;

  const generateSpectrum = () => {
    return new Dygraph(chartRef.current, data, {
      animatedZooms: true,
      xlabel: "Wavelength (cm<sup>-1</sup>)",
      ylabel: "Intensity",
      width: "auto",
      height: "auto",
      xValueParser: parseFloat,
    });
  };

  useEffect(() => {
    d = generateSpectrum();
  }, []);

  const downloadSpectrum = () => {
    const blob = new Blob([data], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "spectrum.csv");
  };

  return (
    <div>
      <div id="spectrum" ref={chartRef} />
      <button onClick={downloadSpectrum}>Download Spectrum</button>
    </div>
  );
}
export default Spectrum;
