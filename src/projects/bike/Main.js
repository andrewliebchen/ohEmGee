import React, { Component } from 'react';
import gearsize from 'gear-size-calculator';
import _ from 'lodash';
import Cog from './components/Cog';

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
    }
  }

  render() {
    const { chainRings, cassette, rimDiameter, tireSize, cadence } = this.state;
    const gearInfo = this._generateGearSizes();
    console.log(gearInfo);
    return (
      <div>
        <h1>Bike!</h1>
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

        {gearInfo &&
          <ul>
            <li>Gear ratio: {gearInfo.details.ratio}</li>
            <li>Rim and tire diameter: {gearInfo.details.rimAndTyreDiameterInInches} in.</li>
            <li>Gear size: {gearInfo.gearSize} in.</li>
            <li>Max speed: {cadence * gearInfo.gearSize * (Math.PI / 1056)} mph</li>
          </ul>}

        <Cog
          teeth={chainRings}
          size={256}
          className="chainRing"/>
        <Cog
          teeth={cassette}
          size={84}
          d2={0.85}
          className="sprocket"/>
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
      default:
        return false;
    }
  }
}
