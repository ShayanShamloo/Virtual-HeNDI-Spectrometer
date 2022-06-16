import React, { useState } from "react";
import {ReactComponent as DopingDiffusionSVG} from './svgs/hendi-diffusion-doping-pump.svg';
import {ReactComponent as SourceDiffusionSVG} from './svgs/hendi-diffusion-source-pump.svg';
import {ReactComponent as TurboSVG} from './svgs/hendi-turbo-pump.svg';
import {ReactComponent as RotarySVG} from './svgs/hendi-rotary-pump.svg';

// Generalization attempt

export default function SVGComponent({part, style, click}) { // Style is the intial stroke
    const [toggled, setToggled] = useState(false);

    const svgParts = {
        'ddpump': DopingDiffusionSVG,
        'sdpump': SourceDiffusionSVG,
        'tpump': TurboSVG,
        'rpump': RotarySVG
    }

    const handleClick = (ev) => {
        setToggled(!toggled)
    }

    const Component = svgParts[part];
    
    return <Component className='svg' style={{...style, stroke: toggled ? 'blue' : style?.stroke ?? 'black', strokeWidth: toggled ? '5' : style?.strokeWidth ?? '1'}} onClick={click ?? handleClick} />

}