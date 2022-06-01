import React, { useState } from 'react';
import '../Style/WavelengthController.css';
import '../Style/VirtualHendiInterface.css';
import AdjustableDigitalReadout from './AdjustableDigitalReadout';

function WavelengthController({id, min_lambda, setMinLambda, max_lambda, setMaxLambda}) {
    const MIN_WAV = 2000
    const MAX_WAV = 2100

    const butValid = (val) => Math.min(Math.max(val, MIN_WAV), MAX_WAV)

    

    const handleChange = (evt) => {
        const name = evt.target.name;
        try{
            const val = Number(evt.target.value);
            console.log(val)
                if (name === "min_lambda") {
                    setMinLambda(butValid(val))
                }else {
                    setMaxLambda(butValid(val))
                }
        }
        catch(err) {
            console.error(err);
        }
    }

    const incrementProp = (val, setter) => () => {
        setter(butValid(val + 0.5))
    }
    const decrementProp = (val, setter) => () => {
        setter(butValid(val - 0.5))
    }

    return(
        <div className='temp-controller' id = {id}>
            <div className='instrument-label-readout' id='temp-controller-temp'>
                <label className='instrument-label'>Min Wavelength</label>
                <AdjustableDigitalReadout name="min_lambda" increment={incrementProp(min_lambda, setMinLambda)} decrement={decrementProp(min_lambda, setMinLambda)} unit='cm-1' digits={7} onChange={handleChange} val={min_lambda}></AdjustableDigitalReadout>
                <label className='instrument-label'>Max Wavelength</label>
                <AdjustableDigitalReadout name="max_lambda" increment={incrementProp(max_lambda, setMaxLambda)} decrement={decrementProp(max_lambda, setMaxLambda)} unit='cm-1' digits={7} onChange={handleChange} val={max_lambda}></AdjustableDigitalReadout>
            </div>
        </div>
    )
}
export default WavelengthController
