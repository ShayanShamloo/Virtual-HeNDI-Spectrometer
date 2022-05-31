import React from 'react'
import '../Style/DigitalReadout.css'

function DigitalReadout (props) {
    
    const val = String(Number(props.number).toFixed(2)).padStart(props.digits || 6,'0')
    return (
        <div id={props.id} className={props.className}>
            <label className='digital-readout'>{val} {props.unit}</label>
        </div>
    )
}

// import React, {Component} from 'react'
// import '../Style/DigitalReadout.css'
// export default class DigitalReadout extends Component{
//     render() {
//         const val = String(Number(this.props.number).toFixed(2)).padStart(this.props.digits || 6,'0')
//         return (
//             <div id={this.props.id} className={this.props.className}>
//                 <label className='digital-readout'>{val} {this.props.unit}</label>
//             </div>
//         )
//     }
// }
