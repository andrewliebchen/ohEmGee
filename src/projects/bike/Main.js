import React, { Component } from 'react';
import gearsize from 'gear-size-calculator';
import _ from 'lodash';


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
    // const { chainRings, cassette, rimDiameter, tireSize } = this.state;
    const gearInfo = _.flatten(this._generateGearSizes())[0];
    console.log(gearInfo);
    return (
      <div>
        <h1>Bike!</h1>
        <ul>
          <li>Chain ring: {gearInfo.chainRing}</li>
          <li>Sprocket: {gearInfo.sprocket}</li>
          <li>Gear ratio: {gearInfo.details.ratio}</li>
          <li>Rim and tire diameter: {gearInfo.details.rimAndTyreDiameterInInches} in.</li>
          <li>
            <strong>Gear size: {gearInfo.gearSize} in.</strong>
          </li>
        </ul>
      </div>
    );
  }

  _generateGearSizes = () => {
    const { chainRings, cassette, rimDiameter, tireSize } = this.state;
    const calculator = new gearsize.Calculator();

    const result = calculator.generateGearSizesInInches(chainRings, cassette, rimDiameter, tireSize);
    return result;
  }
}
