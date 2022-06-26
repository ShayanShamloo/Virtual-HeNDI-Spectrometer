import React from "react";
import "../style/VirtualHendiInterface.css";
import "../style/AdjustableDigitalReadout.css";

function WavelengthController({
  id,
  min_lambda,
  setMinLambda,
  max_lambda,
  setMaxLambda,
}) {
  const MIN_WAV = 2030;
  const MAX_WAV = 2090;

  return (
    <div className="temp-controller" id={id}>
      <div className="instrument-label-readout" id="temp-controller-temp">
        <label className="instrument-label">Min Wavenumber</label>
        <input
          name="min_lambda"
          className="digital-readout"
          type="number"
          step="0.5"
          min={MIN_WAV}
          max={MAX_WAV}
          onChange={({ target: { value } }) => setMinLambda(Number(value))}
          value={min_lambda}
          style={{ width: `${4}em` }}
        />
        <label className="digital-readout">
          cm<sup>-1</sup>
        </label>
        <label className="instrument-label">Max Wavenumber</label>
        <input
          name="max_lambda"
          className="digital-readout"
          type="number"
          step="0.5"
          min={MIN_WAV}
          max={MAX_WAV}
          onChange={({ target: { value } }) => setMaxLambda(Number(value))}
          value={max_lambda}
          style={{ width: `${4}em` }}
        />
        <label className="digital-readout">
          cm<sup>-1</sup>
        </label>
      </div>
    </div>
  );
}
export default WavelengthController;
