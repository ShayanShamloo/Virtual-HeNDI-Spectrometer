import React, { useState } from "react";
<<<<<<< HEAD
import { svgParts, toolTips } from "./SVGLibrary";
import Tooltip from "./Tooltip";

export default function SVGComponent({part, style, click}) { // Style is the intial stroke
    const [toggled, setToggled] = useState(false);

=======
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
import Tooltip from "./Tooltip";

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

    const toolTips = {
        'ddpump': {
            header: 'Diffusion Pump',
            text: 'Evacuates the Doping Chamber by means of oil vapor convection currents.',
        },
        'sdpump': {
            header: 'Diffusion Pump',
            text: 'Evacuates the Source Chamber by means of oil vapor convection currents.'
        },
        'tpump': {
            header: 'Turbomolecular Pump',
            text: 'Evacuates the Detection Chamber by means of an axial compressor which consists of a stack of fans that "push" molecules to the exhaust. The fans rotate at a frequency of ~1 kHz.'
        },
        'rpump': {
            header: 'Rotary Pump',
            text: 'Backs the turbo and diffusion pumps, which require a foreline pressure of <100 mTorr. The exhaust gas is directed to the rooftop.'
        },
        'lasersymbol': {
            header: 'Laser Symbol',
            text: 'The output from a narrow linewidth quantum cascade laser is overlapped with the helium nanodroplet beam. Before entering the vacuum chamber through the salt window, a small fraction of radiation is reflected to a power meter ("P") and wavemeter ("λ"); the mechanical chopper wheel modulates the laser beam at a frequency of ~100 Hz, which serves as the reference for the lock-in amplifier.',
        },
        'laserexterior': {
            header: '',
            text: '',
            visible: false
        },
        'sourcechamber': {
            header: 'Source Chamber',
            text: 'This is where helium nanodroplets are formed.'
        },
        'dopingchamber': {
            header: 'Doping Chamber',
            text: 'This chamber is where the analyte molecules condense into the molecular beam.'
        },
        'detectionchamber': {
            header: 'Detection Chamber',
            text: 'Houses a mass spectrometer which is used to detect helium nanodroplets.',
        },
        'base': {
            header: '',
            text: '',
            visible: false
        }
    }

>>>>>>> RastonLab-main
    const handleClick = (ev) => {
        setToggled(!toggled)
    }

    const Component = svgParts[part];

    return (<div>
                <Component className='svg' viewBox='-70 110 650 450' style={{...style, stroke: toggled ? 'blue' : style?.stroke ?? 'black', strokeWidth: toggled ? '5' : style?.strokeWidth ?? '1'}} onClick={click ?? handleClick} />
                <Tooltip 
                    header={toolTips[part].header}
                    text={toolTips[part].text}
                    visible={toolTips[part]?.visible ?? toggled}
                />
            </div>
    );
    // SVG File Prep: put them through SVGOMG to strip any inkscape specific tags that would break React
    // In the SVG files, you must remove the stroke and stroke-height of the element you want outlined and you must remove the  height and width from the very first line to get the SVG to use the viewbox and scale properly
}