import React, { useState } from 'react'
import Hendi from './Hendi';
import '../Style/VirtualHendiInterface.css'
import TemperatureController from './TemperatureController'
import WavelengthController from './WavelengthController'
import Spinner from './Spinner'
import Spectrum from './Spectrum'
import axios from 'axios'
import Instructions from './Instructions';
import { Error } from './Error';

function VirtualHendiInterface() {

    hendiRef = React.createRef();
    tempRef = React.createRef();
    lambdaRef = React.createRef();
    hideForeground = hideForeground.bind();
    _isMounted = false;

    const [fgState, setFgState] = useState(true);
    const [toggleFgTitle, setToggleFgTitle] = useState('See Inside the Instrument');
    const [spectrum, setSpectrum] = useState("");
    const [loadingSpectrum, setLoadingSpectrum] = useState(false);
    const [spectrumError, setSpectrumError] = useState(false);

    baseUrl = window.location.href.includes("localhost:3000") ? "http://localhost:3000" : "https://api.virtual-hendi.isaac-j-miller.com"

    const componentDidMount = () => {
        _isMounted=true;
    }

    const hideForeground = () => {
        if(_isMounted){
            if(state.fgState){
                hendiRef.current.hideForeground();
                setFgState(false);
                setToggleFgTitle('Toggle Instrument Transparency');
            }
            else{
                hendiRef.current.showForeground();
                setFgState(true);
                setToggleFgTitle('See Inside the Instrument');
            }
        }
    }

    const getSpectrum = () => {
        const params = {
            ...tempRef.current.state,
            ...lambdaRef.current.state
        }
        console.log(params);
        const url = `${baseUrl}/interpolator/${params.temperature}/${params.min_lambda}/${params.max_lambda}`;
        // const url = `https://api.virtual-hendi.isaac-j-miller.com/interpolator/${params.temperature}/${params.min_lambda}/${params.max_lambda}`;
        console.log("requesting spectrum");
        setLoadingSpectrum(true);
        axios.get(url).then(resp1=>{
            // const urlToUse = `https://virtual-hendi.isaac-j-miller.com${resp1.data.url}`;
            const urlToUse = resp1.data.url;
            axios.get(urlToUse).then(resp=>{
                const spectrum = resp.data;
                console.log("received spectrum");
                setSpectrum("");
                setLoadingSpectrum(false);
                setSpectrumError(false);
            }).catch(reason=>{
                console.error("error loading spectrum:", reason);
                setLoadingSpectrum(false);
                setSpectrumError(true);
            })
        }).catch(reason=>{
            console.error("error triggering lambda:", reason);
            setLoadingSpectrum(false);
            setSpectrumError(true);
        })
    }

    // FIXME - parent={this}
    return (
            <div id='main-virtual-hendi-interface-container'>
                <Hendi id='hendi-instrument' ref={hendiRef}/>
                <div id='control-box'>
                    <button onClick={hideForeground}>{state.toggleFgTitle}</button>
                    <TemperatureController id='temperature-controller' parent={this} ref={tempRef}/>
                    <WavelengthController id='wavelength-controller' parent={this} ref={lambdaRef}/>
                    <button onClick={getSpectrum.bind()}>Run Spectrum</button>
                    {state.loadingSpectrum? <Spinner/> : state.spectrumError ? <Error/> : state.spectrum && <Spectrum data={state.spectrum}/>}
                    <Instructions></Instructions>
                </div>                  
            </div>
        )
    }

// export default class VirtualHendiInterface extends Component{
//     constructor(props){
//         super(props);
//         this.props = props;
//         this.hendiRef=React.createRef();
//         this.tempRef=React.createRef();
//         this.lambdaRef=React.createRef();
//         this.hideForeground=this.hideForeground.bind(this);
//         this._isMounted=false;
//         this.state={
//             fgState:true,
//             toggleFgTitle:'See Inside the Instrument',
//             spectrum:"",
//             loadingSpectrum:false,
//             spectrumError:false
//         }
//         this.baseUrl = window.location.href.includes("localhost:3000") ? "http://localhost:3000" : "https://api.virtual-hendi.isaac-j-miller.com"
//     }
//     componentDidMount(){
//         this._isMounted=true;
//     }
//     hideForeground(){
//         if(this._isMounted){
//             if(this.state.fgState){
//                 this.hendiRef.current.hideForeground();
//                 this.setState({fgState:false, toggleFgTitle:'Toggle Instrument Transparency'})
//             }
//             else{
//                 this.hendiRef.current.showForeground();
//                 this.setState({fgState:true, toggleFgTitle:'See Inside the Instrument'})
//             }
//         }
//     }
//     getSpectrum() {
//         const params = {
//             ...this.tempRef.current.state,
//             ...this.lambdaRef.current.state
//         }
//         console.log(params);
//         const url = `${this.baseUrl}/interpolator/${params.temperature}/${params.min_lambda}/${params.max_lambda}`;
//         // const url = `https://api.virtual-hendi.isaac-j-miller.com/interpolator/${params.temperature}/${params.min_lambda}/${params.max_lambda}`;
//         console.log("requesting spectrum");
//         this.setState({loadingSpectrum:true});
//         axios.get(url).then(resp1=>{
//             // const urlToUse = `https://virtual-hendi.isaac-j-miller.com${resp1.data.url}`;
//             const urlToUse = resp1.data.url;
//             axios.get(urlToUse).then(resp=>{
//                 const spectrum = resp.data;
//                 console.log("received spectrum");
//                 this.setState({spectrum, loadingSpectrum:false, spectrumError: false});
//             }).catch(reason=>{
//                 console.error("error loading spectrum:", reason);
//                 this.setState({loadingSpectrum: false, spectrumError: true})
//             })
//         }).catch(reason=>{
//             console.error("error triggering lambda:", reason);
//             this.setState({loadingSpectrum: false, spectrumError: true})
//         })
//     }
//     render(){
//         return (
//                 <div id='main-virtual-hendi-interface-container'>
//                     <Hendi id='hendi-instrument' ref={this.hendiRef}/>
//                     <div id='control-box'>
//                         <button onClick={this.hideForeground}>{this.state.toggleFgTitle}</button>
//                         <TemperatureController id='temperature-controller' parent={this} ref={this.tempRef}/>
//                         <WavelengthController id='wavelength-controller' parent={this} ref={this.lambdaRef}/>
//                         <button onClick={this.getSpectrum.bind(this)}>Run Spectrum</button>
//                         {this.state.loadingSpectrum? <Spinner/> : this.state.spectrumError ? <Error/> : this.state.spectrum && <Spectrum data={this.state.spectrum}/>}
//                         <Instructions></Instructions>
//                     </div>
                    
//                 </div>
//         )
//     }
// }
