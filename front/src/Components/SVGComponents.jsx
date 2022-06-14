import React, { Component } from "react";
import {ReactComponent as DiffusionSVG} from './hendi-diffusion-pumps.svg';
import Tooltip from "./Tooltip";

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
       if (this.state.clicked ? this.setState({clicked: false, color: '#333333'}) : this.setState({clicked: true, color: '#ffff00'}));
    }

    render() {
       return (
            <div>
                <DiffusionSVG  fill={this.state.color} onClick={this.handleClick} />
                <Tooltip 
                header="Diffusion Pump"
                text={(<p>Evacuates the Doping Chamber by means of oil vapor convection currents.</p>)}
                visible={this.state.clicked}
                left={this.props.left}
                top={this.props.top}
                />
            </div>);
    }
}