import React from "react";
import "../style/TemperatureController.css";
import "../style/VirtualHendiInterface.css";
import "../style/AdjustableDigitalReadout.css";

function TemperatureController({ id, temperature, setTemperature }) {
  const MIN = 13.5;
  const MAX = 20;

  return (
    <div className="temp-controller" id={id}>
      <div className="instrument-label-readout" id="temp-controller-temp">
        <label className="instrument-label">Nozzle Temperature</label>
        <input
          name="temperature"
          className="digital-readout"
          type="number"
          step="0.5"
          min={MIN}
          max={MAX}
          onChange={({ target: { value } }) => setTemperature(Number(value))}
          value={temperature}
          style={{ width: `${3}em` }}
        />
        <label className="digital-readout">K</label>
      </div>
    </div>
  );
}
export default TemperatureController;
