import React from 'react'
import '../Style/AdjustableDigitalReadout.css'

function AdjustableDigitalReadout (props) {
    
    increment = increment.bind();
    decrement = decrement.bind();
    
    const increment = () => {
        if(props.parent.state[props.state_to_mod]+props.increment<=props.max){
            props.parent.setState({[props.state_to_mod]:props.parent.state[props.state_to_mod]+props.increment});
        }
    }

    const decrement = () => {
        if(props.parent.state[props.state_to_mod]-props.increment>=props.min){
            props.parent.setState({[props.state_to_mod]:props.parent.state[props.state_to_mod]-props.increment});
        }
    }

    let val = String(Number(props.parent.state[props.state_to_mod]).toFixed(2)).padStart(props.digits || 6,'0')
    return (
        <div id={props.id} className={props.className + ' digital-readout-adjustable'}>
            <input className='digital-readout' name={props.name} value={val} unit={props.unit} digits={props.digits || 6} onChange={props.onChange} style={{width: `${((props.digits || 6)+1)/2}em`}}/>
            <label className='digital-readout'>{props.unit}</label>
            <div className='button-container'>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </div>
    )
}

// export default class AdjustableDigitalReadout extends Component{
//     constructor(props){
//         super(props);
//         this.increment=this.increment.bind(this);
//         this.decrement=this.decrement.bind(this);
//     }
//     increment(){
//         if(this.props.parent.state[this.props.state_to_mod]+this.props.increment<=this.props.max){
//             this.props.parent.setState({[this.props.state_to_mod]:this.props.parent.state[this.props.state_to_mod]+this.props.increment});
//         }
//     }
//     decrement(){
//         if(this.props.parent.state[this.props.state_to_mod]-this.props.increment>=this.props.min){
//             this.props.parent.setState({[this.props.state_to_mod]:this.props.parent.state[this.props.state_to_mod]-this.props.increment});
//         }
//     }
//     render(){
//         let val = String(Number(this.props.parent.state[this.props.state_to_mod]).toFixed(2)).padStart(this.props.digits || 6,'0')
//         return (
//             <div id={this.props.id} className={this.props.className + ' digital-readout-adjustable'}>
//                 <input className='digital-readout' name={this.props.name} value={val} unit={this.props.unit} digits={this.props.digits || 6} onChange={this.props.onChange} style={{width: `${((this.props.digits || 6)+1)/2}em`}}/>
//                 <label className='digital-readout'>{this.props.unit}</label>
//                 <div className='button-container'>
//                     <button onClick={this.increment}>+</button>
//                     <button onClick={this.decrement}>-</button>
//                 </div>
//             </div>
//         )
//     }
// }
