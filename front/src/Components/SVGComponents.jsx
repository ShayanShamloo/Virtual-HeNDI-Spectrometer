import React, { Component } from "react";
import {ReactComponent as DiffusionSVG} from './hendi-diffusion-pumps.svg';
import {ReactComponent as TurboSVG} from './hendi-turbo-pump.svg';
import {ReactComponent as RotarySVG} from './hendi-rotary-pump.svg';
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
            </div>);
    }
}

export class TurboPump extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            color: '#000',
            width: '2'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
       if (this.state.clicked ? this.setState({clicked: false, color: '#000', width: '2'}) : this.setState({clicked: true, color: '#ffcc00', width: '10'}));
    }

    render() {
       return (
            <div>
                <TurboSVG stroke={this.state.color} stroke-width={this.state.width} onClick={this.handleClick} />
            </div>);
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
            <div>
                <RotarySVG stroke={this.state.color} stroke-width={this.state.width} onClick={this.handleClick} />
            </div>);
    }
}