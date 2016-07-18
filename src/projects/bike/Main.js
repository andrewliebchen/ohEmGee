import React, { Component } from 'react';
import gearsize from 'gear-size-calculator';

// # vars and require
const calculator = new gearsize.Calculator();

// # fill out some params
const chainRings = [48];
const cassette = [16];
const rimDiameter = 700;
const tyreSize = 28;

// # generate some gear size data
const result = calculator.generateGearSizesInInches(chainRings, cassette, rimDiameter, tyreSize);

console.log(result);

export default class Main extends Component {
  render() {
    return (
      <div>Bike!</div>
    );
  }
}
