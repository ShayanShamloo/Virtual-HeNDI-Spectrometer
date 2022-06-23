import React from "react";
import "../style/TemperatureController.css";
import "../style/VirtualHendiInterface.css";
import AdjustableDigitalReadout from "./AdjustableDigitalReadout";

function TemperatureController({ id, temperature, setTemperature }) {
  const MIN = 13.5;
  const MAX = 20;

  const butValid = (val) => Math.min(Math.max(val, MIN), MAX);

  // never used
  // const [temperature, setTemperature] = useState(13.5);

  // FIXME - parent={this}
  return (
    <div className="temp-controller" id={id}>
      <div className="instrument-label-readout" id="temp-controller-temp">
        <label className="instrument-label">Nozzle Temperature</label>
        <AdjustableDigitalReadout
          name="temperature"
          val={temperature}
          unit="K"
          digits={5}
          increment={() => setTemperature(butValid(temperature + 0.5))}
          decrement={() => setTemperature(butValid(temperature - 0.5))}
          handleChange={({ target: { value } }) =>
            setTemperature(butValid(value))
          }
        ></AdjustableDigitalReadout>
      </div>
    </div>
  );
}
export default TemperatureController;
