import React, { Component } from 'react';
import gearsize from 'gear-size-calculator';
import _ from 'lodash';
import Cog from './components/Cog';

const calculator = new gearsize.Calculator();

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chainRings: [48],
      cassette: [16],
      rimDiameter: 700,
      tireSize: 28,
    }
  }

  render() {
    const { chainRings, cassette, rimDiameter, tireSize } = this.state;
    const gearInfo = _.flatten(this._generateGearSizes())[0];
    return (
      <div>
        <h1>Bike!</h1>
        <div>
          <label>Chain ring</label>
          <input
            type="text"
            defaultValue={chainRings}
            onChange={this.handleUpdate.bind(null, 'chainRing')}/>
        </div>
        <div>
          <label>Sprocket</label>
          <input
            type="text"
            defaultValue={cassette}
            onChange={this.handleUpdate.bind(null, 'sprocket')}/>
        </div>
        <div>
          <label>Rim diameter</label>
          <input
            type="text"
            defaultValue={rimDiameter}
            onChange={this.handleUpdate.bind(null, 'rimDiameter')}/>
        </div>
        <div>
          <label>Tire size</label>
          <input
            type="text"
            defaultValue={tireSize}
            onChange={this.handleUpdate.bind(null, 'tireSize')}/>
        </div>

        <ul>
          <li>Gear ratio: {gearInfo.details.ratio}</li>
          <li>Rim and tire diameter: {gearInfo.details.rimAndTyreDiameterInInches} in.</li>
          <li>
            <strong>Gear size: {gearInfo.gearSize} in.</strong>
          </li>
        </ul>

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
    return result;
  }

  handleUpdate = (component, event) => {
    const value = event.target.value;
    switch (component) {
      case 'chainRing':
        this.setState({chainRings: [value]});
      case 'sprocket':
        this.setState({cassette: [value]});
      case 'rimDiameter':
        this.setState({rimDiameter: value});
      case 'tireSize':
        this.setState({tireSize: value});
      default:
        return false;
    }
  }
}
