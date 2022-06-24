import React, { useState } from "react";
import Hendi from "./Hendi";
import "../style/VirtualHendiInterface.css";
import TemperatureController from "./TemperatureController";
import WavelengthController from "./WavelengthController";
import Spinner from "./Spinner";
import Spectrum from "./Spectrum";
import Instructions from "./Instructions";
import { Error } from "./Error";

import { calculateSpectrum } from "../scripts/dataInterpolation";

function VirtualHendiInterface() {
  const [temperature, setTemperature] = useState(13.5);
  const [min_lambda, setMinLambda] = useState(2030);
  const [max_lambda, setMaxLambda] = useState(2090);

  const [fgState, setFgState] = useState(true);
  const [toggleFgTitle, setToggleFgTitle] = useState(
    "See Inside the Instrument"
  );
  const [spectrum, setSpectrum] = useState("");
  const [loadingSpectrum, setLoadingSpectrum] = useState(false);
  const [spectrumError, setSpectrumError] = useState(false);

  const hideForeground = () => {
    if (fgState) {
      setFgState(false);
      setToggleFgTitle("Toggle Instrument Transparency");
    } else {
      setFgState(true);
      setToggleFgTitle("See Inside the Instrument");
    }
  };

  const getSpectrum = async () => {
    setLoadingSpectrum(true);

    const spectrum = await calculateSpectrum(
      temperature,
      min_lambda,
      max_lambda
    );

    if (spectrum) {
      setSpectrum(spectrum);
      setLoadingSpectrum(false);
      setSpectrumError(false);
    } else {
      setLoadingSpectrum(false);
      setSpectrumError(true);
    }
  };

  return (
    <div id="main-virtual-hendi-interface-container">
      <Hendi id="hendi-instrument" seeOutside={fgState} />
      <div id="control-box">
        <button onClick={hideForeground}>{toggleFgTitle}</button>
        <TemperatureController
          id="temperature-controller"
          temperature={temperature}
          setTemperature={setTemperature}
        />
        <WavelengthController
          id="wavelength-controller"
          parent={this}
          min_lambda={min_lambda}
          setMinLambda={setMinLambda}
          max_lambda={max_lambda}
          setMaxLambda={setMaxLambda}
        />
        <button onClick={getSpectrum}>Collect Spectrum</button>
        {loadingSpectrum ? (
          <Spinner />
        ) : spectrumError ? (
          <Error />
        ) : (
          spectrum && <Spectrum data={spectrum} />
        )}
        <Instructions></Instructions>
      </div>
    </div>
  );
}
export default VirtualHendiInterface;
