import React, { Component } from 'react';
import gearsize from 'gear-size-calculator';
import Bike from './components/Bike';
import styles from './styles/Main.scss';

const calculator = new gearsize.Calculator();

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
    return (
      <div className={!animation ? styles.pause : styles.container}>
        <div className={styles.controls}>
          <div>
            <label>Chain ring</label>
            <input
              type="number"
              defaultValue={chainRings}
              onChange={this.handleUpdate.bind(null, 'chainRing')}/>
          </div>
          <div>
            <label>Sprocket</label>
            <input
              type="number"
              defaultValue={cassette}
              onChange={this.handleUpdate.bind(null, 'sprocket')}/>
          </div>
          <div>
            <label>Rim diameter</label>
            <input
              type="number"
              defaultValue={rimDiameter}
              onChange={this.handleUpdate.bind(null, 'rimDiameter')}/>
          </div>
          <div>
            <label>Tire size</label>
            <input
              type="number"
              defaultValue={tireSize}
              onChange={this.handleUpdate.bind(null, 'tireSize')}/>
          </div>
          <div>
            <label>Cadence</label>
            <input
              type="number"
              defaultValue={cadence}
              onChange={this.handleUpdate.bind(null, 'cadence')}/>
          </div>

          <ul className={styles.info}>
            <li>Gear ratio: {gearInfo.details.ratio}</li>
            <li>Rim and tire diameter: {gearInfo.details.rimAndTyreDiameterInInches} in.</li>
            <li>Gear size: {gearInfo.gearSize} in.</li>
            <li>Max speed: {cadence * gearInfo.gearSize * (Math.PI / 1056)} mph</li>
          </ul>

          <button onClick={this.toggleAnimation.bind(this)}>
            {animation ? 'Pause' : 'Play'} animation
          </button>
        </div>

        <Bike
          cassette={cassette}
          cadence={cadence}
          chainRings={chainRings}
          ratio={gearInfo.details.ratio}/>
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
