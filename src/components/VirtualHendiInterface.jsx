import React, { useEffect, useState } from "react";
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
  const hendiRef = React.createRef();
  const tempRef = React.createRef();
  const [temperature, setTemperature] = useState(13.5);
  const lambdaRef = React.createRef();
  const [min_lambda, setMinLambda] = useState(2030);
  const [max_lambda, setMaxLambda] = useState(2090);
  let _isMounted = false;

  const [fgState, setFgState] = useState(true);
  const [toggleFgTitle, setToggleFgTitle] = useState(
    "See Inside the Instrument"
  );
  const [spectrum, setSpectrum] = useState("");
  const [loadingSpectrum, setLoadingSpectrum] = useState(false);
  const [spectrumError, setSpectrumError] = useState(false);

  useEffect(() => {
    _isMounted = true;
  }, []);

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
      console.log("BAD");
      setSpectrum(spectrum);
      setLoadingSpectrum(false);
      setSpectrumError(false);
    } else {
      console.log("GOOD");
      setLoadingSpectrum(false);
      setSpectrumError(true);
    }
  };

  return (
    <div id="main-virtual-hendi-interface-container">
      <Hendi id="hendi-instrument" ref={hendiRef} seeOutside={fgState} />
      <div id="control-box">
        <button onClick={hideForeground}>{toggleFgTitle}</button>
        <TemperatureController
          id="temperature-controller"
          ref={tempRef}
          temperature={temperature}
          setTemperature={setTemperature}
        />
        <WavelengthController
          id="wavelength-controller"
          parent={this}
          ref={lambdaRef}
          min_lambda={min_lambda}
          setMinLambda={setMinLambda}
          max_lambda={max_lambda}
          setMaxLambda={setMaxLambda}
        />
        <button onClick={getSpectrum}>Run Spectrum</button>
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
