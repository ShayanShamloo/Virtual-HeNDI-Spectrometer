import React, { useState } from 'react'
import '../Style/Tooltip.css'

function Tooltip(props) {

    updatePosition=updatePosition.bind();

    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    document.onmousemove = event=>{
        setTop(event.clientY);
        setLeft(event.clientX);
    };

    const updatePosition = (event) => {
        if(props.visible){
            console.log(event);
        }
    }

    if(props.visible){
        return(
            <div className='tooltip' style={state.position}>
                <label>{props.header}</label>
                {props.text}
            </div>
        )
    }
    else{
        return <div/>
    }
}

// export default class Tooltip extends Component{
//     constructor(props){
//         super(props);
//         this.props=props;
//         this.updatePosition=this.updatePosition.bind(this);
//         this.state = {
//             position:{
//                 top:0,
//                 left:0,
//             }
//         }
//         document.onmousemove = event=>{
//             this.setState({position:{
//                 top:event.clientY,
//                 left:event.clientX
//             }})
//         };
        
//     }
//     updatePosition(event){
//         if(this.props.visible){
//             console.log(event);
//         }
//     }
//     render(){
//         if(this.props.visible){
//             return(
//                 <div className='tooltip' style={this.state.position}>
//                     <label>{this.props.header}</label>
//                     {this.props.text}
//                 </div>
//             )
//         }
//         else{
//             return <div/>
//         }
//     }
// }
