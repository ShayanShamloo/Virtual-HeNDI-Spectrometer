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
import {ReactComponent as IonGauge3SVG} from './svgs/hendi-ion-gauge-3.svg';
import {ReactComponent as IonGauge2SVG} from './svgs/hendi-ion-gauge-2.svg';
import {ReactComponent as IonGauge1SVG} from './svgs/hendi-ion-gauge-1.svg';


export const svgParts = {
    'laserexterior': LaserbeamExteriorSVG,
    'base': BaseSVG,
    'lasersymbol': LaserSymbolSVG,
    'ddpump': DopingDiffusionSVG,
    'sdpump': SourceDiffusionSVG,
    'tpump': TurboSVG,
    'rpump': RotarySVG,
    'sourcechamber': SourceChamberSVG,
    'dopingchamber': DopingChamberSVG,
    'detectionchamber': DetectionChamberSVG,
    'iongaugesource': IonGauge3SVG,
    'iongaugedope': IonGauge2SVG,
    'iongaugedetection': IonGauge1SVG

}

export const toolTips = {
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
    'iongaugesource': {
        header: 'Ion Gauge',
        text: 'Pressure of the Source Chamber. It is relatively high due to the large amount of helium that flows through the nozzle.',
    },
    'iongaugedope': {
        header: 'Ion Gauge',
        text: 'Pressure of the Doping Chamber.',
    },
    'iongaugedetection': {
        header: 'Ion Gauge',
        text: 'Pressure of the Detection Chamber, which is similar to that maintained at CERN (close to the vacuum found on the Moons surface).',
    },
    'base': {
        header: '',
        text: '',
        visible: false
    }
}