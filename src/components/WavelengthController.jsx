import React from "react";
import "../style/VirtualHendiInterface.css";
import AdjustableDigitalReadout from "./AdjustableDigitalReadout";

function WavelengthController({
  id,
  min_lambda,
  setMinLambda,
  max_lambda,
  setMaxLambda,
}) {
  const MIN_WAV = 2000;
  const MAX_WAV = 2100;

  const butValid = (val) => Math.min(Math.max(val, MIN_WAV), MAX_WAV);

  const handleChange = (evt) => {
    const name = evt.target.name;
    try {
      const val = Number(evt.target.value);
      console.log(val);
      if (name === "min_lambda") {
        setMinLambda(butValid(val));
      } else {
        setMaxLambda(butValid(val));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const incrementProp = (val, setter) => () => {
    setter(butValid(val + 0.5));
  };
  const decrementProp = (val, setter) => () => {
    setter(butValid(val - 0.5));
  };

  const superScriptUnit = <p>cm<sup>-1</sup></p>;

  return (
    <div className="temp-controller" id={id}>
      <div className="instrument-label-readout" id="temp-controller-temp">
        <label className="instrument-label">Min Wavenumber</label>
        <input
          name='min_lambda'
          className="digital-readout"
          type='number'
          step='0.5'
          min={MIN_WAV}
          max={MAX_WAV}
          onChange={({ target: { value }}) =>
            setMinLambda(Number(value))
          }
          value={min_lambda}
          style={{ width: `${4}em` }}
        />
        <label className="digital-readout">cm<sup>-1</sup></label> 
        <label className="instrument-label">Max Wavenumber</label>
        <input
          name='max_lambda'
          className="digital-readout"
          type='number'
          step='0.5'
          min={MIN_WAV}
          max={MAX_WAV}
          onChange={({ target: { value }}) =>
            setMaxLambda(Number(value))
          }          
          value={max_lambda}
          style={{ width: `${4}em` }}
          />
          <label className="digital-readout">cm<sup>-1</sup></label> 
      </div>
    </div>
  );
}
export default WavelengthController;

        {/* <AdjustableDigitalReadout
          name="min_lambda"
          increment={incrementProp(min_lambda, setMinLambda)}
          decrement={decrementProp(min_lambda, setMinLambda)}
          unit={superScriptUnit}
          digits={7}
          onChange={handleChange}
          val={min_lambda}
        ></AdjustableDigitalReadout> */}

        {/* <AdjustableDigitalReadout
          name="max_lambda"
          increment={incrementProp(max_lambda, setMaxLambda)}
          decrement={decrementProp(max_lambda, setMaxLambda)}
          unit={superScriptUnit}
          digits={7}
          onChange={handleChange}
          val={max_lambda}
        ></AdjustableDigitalReadout> */}