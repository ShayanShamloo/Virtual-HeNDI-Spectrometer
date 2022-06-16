import React, { useState } from "react";
import {ReactComponent as DopingDiffusionSVG} from './svgs/hendi-diffusion-doping-pump.svg';
import {ReactComponent as SourceDiffusionSVG} from './svgs/hendi-diffusion-source-pump.svg';
import {ReactComponent as TurboSVG} from './svgs/hendi-turbo-pump.svg';
import {ReactComponent as RotarySVG} from './svgs/hendi-rotary-pump.svg';

// Generalization attempt

export default function SVGComponent({part, style, click, className}) { // Style is the intial stroke
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
    
    return <Component className={className} style={{...style, stroke: toggled ? 'yellow' : style?.stroke ?? 'black'}} onClick={click ?? handleClick} />

}