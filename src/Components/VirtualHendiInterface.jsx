import React, { useEffect, useState } from "react";
import Hendi from "./Hendi";
import "../Style/VirtualHendiInterface.css";
import TemperatureController from "./TemperatureController";
import WavelengthController from "./WavelengthController";
import Spinner from "./Spinner";
import Spectrum from "./Spectrum";
import axios from "axios";
import Instructions from "./Instructions";
import { Error } from "./Error";

import { calculateSpectrum, fetchDataFile, interpolateValue } from "../script";

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

  const baseUrl = window.location.href.includes("localhost:3000")
    ? "http://localhost:3000"
    : "https://api.virtual-hendi.isaac-j-miller.com";

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
    const values = {
      temperature, // default 13.5
      min_lambda, // default 2030
      max_lambda, // default 2090
      url: "https://raw.githubusercontent.com/RastonLab/Virtual-HeNDI-Spectrometer/main/interpolator/spectra/OCS_",
    };
  
    console.log("  provied parameters");
    console.log("    - temperature: " + values.temperature);
    console.log("    - min_lambda: " + values.min_lambda);
    console.log("    - max_lambda: " + values.max_lambda);
  
    // The four .dat files: 13.5, 16, 18, 20
    // use matching .dat file if the requested temperature matches
    if (
      values.temperature == "13.5" ||
      values.temperature == "16" ||
      values.temperature == "18" ||
      values.temperature == "20"
    ) {
      console.log("  number matches existing .dat");
      console.log("    temperature: " + values.temperature);
  
      const dataObject = await fetchDataFile(values.url, values.temperature);
      // TODO --> Send file to graph
  
      // interpolate .dat file if the requested temperature does not match
    } else {
      console.log("  number does not match existing .dat");
      console.log("  determine which dat files the number is between");
      let temp1 = null;
      let temp2 = null;
  
      // determine what two temperatures are above and below the requested temperature
      if (values.temperature > 13.5 && values.temperature < 16) {
        console.log("    temperature is between 13.5 and 16");
        temp1 = 13.5;
        temp2 = 16;
      } else if (values.temperature > 16 && values.temperature < 18) {
        console.log("    temperature is between 13.5 and 16");
        temp1 = 16;
        temp2 = 18;
      } else if (values.temperature > 18 && values.temperature < 20) {
        console.log("    temperature is between 13.5 and 16");
        temp1 = 18;
        temp2 = 20;
      }
  
      const dataObject = await fetchDataFile(values.url, temp1, temp2);
  
      console.log(new Date());
      const interpolatedSpectrum = interpolateValue(
        dataObject,
        values,
        temp1,
        temp2
      );
      console.log(new Date());
  
      console.log(interpolatedSpectrum);
  
      return interpolatedSpectrum;
    }

    // const params = {
    //   temperature,
    //   min_lambda,
    //   max_lambda,
    // };
    // console.log(params);
    // const url = `${baseUrl}/interpolator/${params.temperature}/${params.min_lambda}/${params.max_lambda}`;
    // // const url = `https://api.virtual-hendi.isaac-j-miller.com/interpolator/${params.temperature}/${params.min_lambda}/${params.max_lambda}`;
    // console.log("requesting spectrum");
    // setLoadingSpectrum(true);
    // axios
    //   .get(url)
    //   .then((resp1) => {
    //     // const urlToUse = `https://virtual-hendi.isaac-j-miller.com${resp1.data.url}`;
    //     const urlToUse = resp1.data.url;
    //     axios
    //       .get(urlToUse)
    //       .then((resp) => {
    //         console.log("received spectrum");
    //         setSpectrum(resp.data);
    //         setLoadingSpectrum(false);
    //         setSpectrumError(false);
    //       })
    //       .catch((reason) => {
    //         console.error("error loading spectrum:", reason);
    //         setLoadingSpectrum(false);
    //         setSpectrumError(true);
    //       });
    //   })
    //   .catch((reason) => {
    //     console.error("error triggering lambda:", reason);
    //     setLoadingSpectrum(false);
    //     setSpectrumError(true);
    //   });
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
