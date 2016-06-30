import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Overlay from './components/Overlay';
import Scene from './components/Scene';
import Cube from './components/Cube';
import Control from './components/Control';
import styles from './styles/Main.scss';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 1100,
      panX: 50,
      panY: 50,
      zAngle: 0,
      orbitX: 0,
      orbitY: 0,
    };
  }

  render() {
    const { zoom, panX, panY, zAngle, orbitX, orbitY } = this.state;
    const orbitHorizon = (100 - orbitX / 180 * 100) - 50;
    const panHorizon = 100 - panY;
    return (
      <DocumentTitle title="Cube | OhEmGee!">
        <div className={styles.wrapper}>
          <Overlay/>
          <Scene
            {...this.state}
            panHorizon={panHorizon}
            orbitHorizon={orbitHorizon}>
            <Cube {...this.state}/>
          </Scene>
          <table className={styles.controls}>
            <tbody>
              <Control
                label="Zoom"
                value={zoom}
                action={this.handleControlAction.bind(null, 'zoom')}
                min={200}
                max={2000}/>
              <tr className={styles.spacer}/>
              <Control
                label="Orbit X"
                value={orbitX}
                action={this.handleControlAction.bind(null, 'orbitX')}
                min={0}
                max={90}/>
              <Control
                label="Orbit Y"
                value={orbitY}
                action={this.handleControlAction.bind(null, 'orbitY')}
                min={-90}
                max={90}/>
              <Control
                label="Orbit Z"
                value={zAngle}
                action={this.handleControlAction.bind(null, 'rotate')}
                min={0}
                max={360}/>
              <tr className={styles.spacer}/>
              <Control
                label="Pan X"
                value={panX}
                action={this.handleControlAction.bind(null, 'panX')}
                min={0}
                max={100}/>
              <Control
                label="Pan Y"
                value={panY}
                action={this.handleControlAction.bind(null, 'panY')}
                min={0}
                max={100}/>
            </tbody>
          </table>
        </div>
      </DocumentTitle>
    );
  }

  handleControlAction = (action, event) => {
    const newValue = parseInt(event.target.value);

    switch (action) {
      case 'zoom':
        this.setState({zoom: newValue});
        break;

      case 'panX':
        this.setState({panX: newValue});
        break;

      case 'panY':
        this.setState({panY: newValue});
        break;

      case 'rotate':
        this.setState({zAngle: newValue});
        break;

      case 'orbitX':
        this.setState({orbitX: newValue});
        break;

      case 'orbitY':
        this.setState({orbitY: newValue});
        break;

      default:
        this.setState({...this.state});
        break;
    }
  }
}
