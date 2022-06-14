import React, { Component } from "react";
import {ReactComponent as DopingDiffusionSVG} from './svgs/hendi-diffusion-doping-pump.svg';
import {ReactComponent as SourceDiffusionSVG} from './svgs/hendi-diffusion-source-pump.svg';
import {ReactComponent as TurboSVG} from './svgs/hendi-turbo-pump.svg';
import {ReactComponent as RotarySVG} from './svgs/hendi-rotary-pump.svg';

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
                <DopingDiffusionSVG  fill={this.state.color} onClick={this.handleClick} />
            </div>);
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
            <div>
                <SourceDiffusionSVG  fill={this.state.color} onClick={this.handleClick} />
            </div>);
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