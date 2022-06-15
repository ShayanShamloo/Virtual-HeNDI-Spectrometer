import React, { Component } from "react";
import {ReactComponent as DopingDiffusionSVG} from './svgs/hendi-diffusion-doping-pump.svg';
import {ReactComponent as SourceDiffusionSVG} from './svgs/hendi-diffusion-source-pump.svg';
import {ReactComponent as TurboSVG} from './svgs/hendi-turbo-pump.svg';
import {ReactComponent as RotarySVG} from './svgs/hendi-rotary-pump.svg';
import { svgLibrary } from "./SVGLibrary";

export class DopingDiffusionPump extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            color: '#333333'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('click');
       if (this.state.clicked ? this.setState({clicked: false, color: '#333333'}) : this.setState({clicked: true, color: '#ffff00'}));

    }

    render() {
       return (
            <svg className={this.props.className} width="500" height="500" xmlns="http://www.w3.org/2000/svg">
                <path fill={this.state.color} onClick={this.handleClick} css={"display:inline;stroke-width:1.80917079;stroke-dasharray:none;stroke:#000;stroke-opacity:1;paint-order:markers stroke fill"} d="M339.948 365.241v24.714h-.145c.097 1.88.193 3.759.29 5.18.096 1.421.193 2.385.578 3.494a10.485 10.485 0 0 0 1.975 3.397c.916 1.036 2.072 1.854 3.421 2.673 1.349.82 2.892 1.64 4.747 2.603 1.854.964 4.02 2.072 6.044 3.06 2.024.987 3.904 1.854 5.494 3.01 1.59 1.157 2.889 2.6 4.093 3.756 1.205 1.156 2.312 2.024 2.89 3.325.38.856.522 1.885.574 2.746-.008.086-.031.168-.031.255v11.26h-9.911v-8.794c0-.431-.427-.78-.954-.78h-17.34c-.529 0-.95.349-.95.78v23.286c0 .431.421.78.95.78h17.34c.527 0 .954-.349.954-.78v-4.384h9.911v6.78c0 1.811 1.786 3.27 4.004 3.27h32.209c2.218 0 4.004-1.459 4.004-3.27v-26.653c.173-.13.165-.323.156-.632-.024-.867.025-2.602.602-3.903.578-1.3 1.685-2.168 2.89-3.324 1.204-1.156 2.507-2.602 4.097-3.759 1.59-1.156 3.47-2.024 5.493-3.011a279.77 279.77 0 0 0 6.045-3.06c1.855-.963 3.398-1.78 4.747-2.599 1.349-.819 2.505-1.64 3.42-2.676a10.472 10.472 0 0 0 1.975-3.395c.386-1.108.483-2.072.579-3.493.096-1.422.193-3.3.29-5.18h-.278V365.24H339.948z" transform="matrix(.49954 0 0 .6116 45.186 141.626)"/>

            </svg>
            // <DopingDiffusionSVG className={this.props.className} fill={this.state.color} onClick={this.handleClick} />
            );
    }
}

export class SourceDiffusionPump extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            color: '#333333'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
       if (this.state.clicked ? this.setState({clicked: false, color: '#333333'}) : this.setState({clicked: true, color: '#ffff00'}));
    }

    render() {
       return (       
            <SourceDiffusionSVG className={this.props.className} fill={this.state.color} onClick={this.handleClick} />
            );
    }
}

export class TurboPump extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            color: '#000',
            width: '1'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
       if (this.state.clicked ? this.setState({clicked: false, color: '#000', width: '1'}) : this.setState({clicked: true, color: '#ffcc00', width: '5'}));
    }

    render() {
       return (
            <TurboSVG className={this.props.className} stroke={this.state.color} stroke-width={this.state.width} onClick={this.handleClick} />
            );
    }

}

export class RotaryPump extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            color: '#000',
            width: '1'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
       if (this.state.clicked ? this.setState({clicked: false, color: '#000', width: '1'}) : this.setState({clicked: true, color: '#ffcc00', width: '5'}));
    }

    render() {
       return (
            <RotarySVG className={this.props.className} stroke={this.state.color} stroke-width={this.state.width} onClick={this.handleClick} />
            );
    }
}

// export class SVGComponent extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         clicked: false,
//     //         color: '#000',
//     //         width: '1'
//     //     };
//     //     this.handleClick = this.handleClick.bind(this);
//     // }

//     // handleClick() {
//     //    if (this.state.clicked ? this.setState({clicked: false, color: '#000', width: '1'}) : this.setState({clicked: true, color: '#ffcc00', width: '5'}));
//     // }

//     render() {
//         const Component = this.props.svgName;
//        return (
//             <Component />
//             // <Component className={this.props.className} stroke={this.state.color} stroke-width={this.state.width} onClick={this.handleClick} />
//             );
//     }
// }