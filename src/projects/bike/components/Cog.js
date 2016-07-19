import React, { Component } from 'react';

export default class Cog extends Component {
  static defaultProps = {
    size: 64,
    d1: 1,
    d2: 0.95,
    d3: 0.125,
    teeth: 8,
    splay: .375,
    fill: 'currentcolor',
  }

  render() {
    const { size, d1, d2, d3, teeth, splay, fill, className, style } = this.props;

    // Center
    const c = size / 2

    // Radii
    const r1 = d1 * size / 2
    const r2 = d2 * size / 2
    const r3 = d3 * size / 2

    // Angle
    const angle = 360 / teeth
    const offset = 90

    const viewBox = [0, 0, size, size].join(' ')

    const rad = function(a) {
      return Math.PI * a / 180
    }

    const rx = function(r, a) {
      return c + r * Math.cos(rad(a))
    }

    const ry = function(r, a) {
      return c + r * Math.sin(rad(a))
    }

    const num = function(n) {
      return (n < 0.0000001) ? 0 : n
    }

    // Angle offsets to splay tooth
    const ta = angle / 4
    const splayTa = splay * ta
    const tw = Math.tan(rad(ta - splayTa)) * r1

    // Flat tooth end x and y coordinates
    const tx = function(a, w) {
      return Math.sin(rad(a)) * w
    }

    const ty = function(a, w) {
      return Math.cos(rad(a)) * w
    }

    const drawTeeth = function(n) {
      const d = [];

      for (let i = 0; i < n; i++) {
        const a = angle * i - offset
        const a1 = a + ta + splayTa
        const a2 = a + angle - ta - splayTa
        const line = [
          (i === 0) ? 'M' : 'L',
          num(rx(r1, a) + tx(a, tw)),
          num(ry(r1, a) - ty(a, tw)),
          'L',
          num(rx(r1, a) - tx(a, tw)),
          num(ry(r1, a) + ty(a, tw)),
          'L',
          num(rx(r2, a1)),
          num(ry(r2, a1)),
          'A', r2, r2,
          '0 0 1',
          num(rx(r2, a2)),
          num(ry(r2, a2)),
        ].join(' ')
        d.push(line)
      }

      return d.join(' ');
    }

    const hole = function() {
      return [
        'M', c, c - r3,
        'A', r3, r3,
        '0 0 0',
        c, c + r3,
        'A', r3, r3,
        '0 0 0',
        c, c - r3,
      ].join(' ');
    };

    const pathData = [drawTeeth(teeth), hole()].join(' ');

    return (
      <svg
        xmlns="http://www.w3.org/svg/2000"
        viewBox={viewBox}
        width={size}
        height={size}
        fill={fill}
        className={className}
        style={style}>
        <path d={pathData} />
      </svg>
    );
  }
}
