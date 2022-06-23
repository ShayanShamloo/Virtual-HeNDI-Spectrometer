import React, { useState } from "react";
import { svgParts, toolTips } from "./SVGLibrary";
import Tooltip from "./Tooltip";

export default function SVGComponent({part, style, click}) { // Style is the intial stroke
    const [toggled, setToggled] = useState(false);

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