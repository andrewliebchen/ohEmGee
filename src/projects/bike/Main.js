import React, { Component } from 'react';
import gearsize from 'gear-size-calculator';
import mixture from 'color-mixture';
import SpeedInput from './components/SpeedInput';
import Bike from './components/Bike';
import Input from './components/Input';
import styles from './styles/Main.scss';

const calculator = new gearsize.Calculator();

const color1 = new mixture.Color('#04e9fe');
const color2 = new mixture.Color('#01FF70');


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chainRings: [50],
      cassette: [16],
      rimDiameter: 700,
      tireSize: 28,
      cadence: 90,
      animations: true,
    }
  }

  render() {
    const { chainRings, cassette, rimDiameter, tireSize, cadence, animation } = this.state;
    const gearInfo = this._generateGearSizes();
    const backgroundColor = color1.mix(color2, cadence / 130);
    return (
      <div
        className={!animation ? styles.pause : styles.container}
        style={{backgroundColor: backgroundColor.toString()}}>
        <div className={styles.column}>
          <Input
            label="Chain ring"
            defaultValue={chainRings}
            onChange={this.handleUpdate.bind(null, 'chainRing')}/>
          <Input
            label="Sprocket"
            defaultValue={cassette}
            onChange={this.handleUpdate.bind(null, 'sprocket')}/>
          <div>Gear ratio <strong>{gearInfo.details.ratio}</strong></div>
          <div>Gear size <strong>{gearInfo.gearSize} in.</strong></div>
          <Input
            label="Rim diameter"
            defaultValue={rimDiameter}
            onChange={this.handleUpdate.bind(null, 'rimDiameter')}/>
          <Input
            label="Tire size"
            defaultValue={tireSize}
            onChange={this.handleUpdate.bind(null, 'tireSize')}/>
          <div>Wheel diameter <strong>{gearInfo.details.rimAndTyreDiameterInInches} in.</strong></div>
          <SpeedInput
            cadence={cadence}
            gearSize={gearInfo.gearSize}
            update={this.handleUpdate}/>
          <button onClick={this.toggleAnimation.bind(this)}>
            {animation ? 'Pause' : 'Play'} animation
          </button>
        </div>
        <div className={styles.column}>
          <Bike
            cassette={cassette}
            cadence={cadence}
            chainRings={chainRings}
            ratio={gearInfo.details.ratio}/>
        </div>
      </div>
    );
  }

  _generateGearSizes = () => {
    const { chainRings, cassette, rimDiameter, tireSize } = this.state;
    const result = calculator.generateGearSizesInInches(chainRings, cassette, rimDiameter, tireSize);
    return Object.assign(...result[0]);
  }

  handleUpdate = (component, event) => {
    const value = parseInt(event.target.value);
    switch (component) {
      case 'chainRing':
        this.setState({chainRings: [value]});
        break;
      case 'sprocket':
        this.setState({cassette: [value]});
        break;
      case 'rimDiameter':
        this.setState({rimDiameter: value});
        break;
      case 'tireSize':
        this.setState({tireSize: value});
        break;
      case 'cadence':
        this.setState({cadence: value});
        break;
      default:
        return false;
    }
  }

  toggleAnimation() {
    this.setState({animation: !this.state.animation});
  }
}
