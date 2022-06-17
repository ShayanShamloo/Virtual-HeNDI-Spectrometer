import React, { useState } from "react";
import {ReactComponent as DopingDiffusionSVG} from './svgs/hendi-diffusion-doping-pump.svg';
import {ReactComponent as SourceDiffusionSVG} from './svgs/hendi-diffusion-source-pump.svg';
import {ReactComponent as TurboSVG} from './svgs/hendi-turbo-pump.svg';
import {ReactComponent as RotarySVG} from './svgs/hendi-rotary-pump.svg';
import {ReactComponent as LaserSymbolSVG} from './svgs/hendi-laser-symbol.svg';
import {ReactComponent as LaserbeamExteriorSVG} from './svgs/hendi-laser-exterior-view.svg';
import {ReactComponent as BaseSVG} from './svgs/hendi-not-clickable.svg';
import {ReactComponent as SourceChamberSVG} from './svgs/hendi-source-chamber.svg';
import {ReactComponent as DopingChamberSVG} from './svgs/hendi-doping-chamber.svg';
import {ReactComponent as DetectionChamberSVG} from './svgs/hendi-detection-chamber.svg';

export default function SVGComponent({part, style, click, startColor}) { // Style is the intial stroke
    const [toggled, setToggled] = useState(false);

    const svgParts = {
        'ddpump': DopingDiffusionSVG,
        'sdpump': SourceDiffusionSVG,
        'tpump': TurboSVG,
        'rpump': RotarySVG,
        'lasersymbol': LaserSymbolSVG,
        'laserexterior': LaserbeamExteriorSVG,
        'sourcechamber': SourceChamberSVG,
        'dopingchamber': DopingChamberSVG,
        'detectionchamber': DetectionChamberSVG,
        'base': BaseSVG
    }

    const handleClick = (ev) => {
        setToggled(!toggled)
    }

    const Component = svgParts[part];

    return <Component className='svg' viewBox='-70 110 650 450' style={{...style, stroke: toggled ? 'blue' : style?.stroke ?? 'black', strokeWidth: toggled ? '5' : style?.strokeWidth ?? '1'}} onClick={click ?? handleClick} />
    // In the SVG files, you must remove the stroke and stroke-height of the element you want outlined and you must remove the  height an width from the very first line to get the SVG to use the veiewbox and scale properly
}