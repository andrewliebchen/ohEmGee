import React, { PropTypes } from 'react';
import Cog from './Cog';
import styles from '../styles/Bike.scss';

const Bike = (props) => {
  const chainRingStyle = {animationDuration: `${60 / props.cadence}s`};
  const sprocketStyle = {animationDuration: `${60 / (props.ratio * props.cadence)}s`}
  return (
    <div className={styles.bikeContainer}>
      <svg
        version="1.1"
        viewBox="0 0 100 100"
        width="700px"
        className={styles.wheel}
        style={sprocketStyle}>
        <path d="M50,0C22.43,0,0,22.43,0,50s22.43,50,50,50s50-22.43,50-50S77.57,0,50,0z M50,98.361C23.334,98.361,1.639,76.666,1.639,50    S23.334,1.639,50,1.639S98.361,23.334,98.361,50S76.666,98.361,50,98.361z"/><path d="M50,45.082c-2.712,0-4.918,2.206-4.918,4.918s2.206,4.918,4.918,4.918s4.918-2.206,4.918-4.918S52.712,45.082,50,45.082z     M50,53.279c-1.808,0-3.279-1.471-3.279-3.279s1.471-3.279,3.279-3.279s3.279,1.471,3.279,3.279S51.808,53.279,50,53.279z"/><path d="M95.162,58.155c0.477-2.649,0.74-5.371,0.74-8.155s-0.263-5.506-0.74-8.155c0-0.017,0.007-0.031,0.005-0.048    c-0.004-0.043-0.025-0.078-0.035-0.118C91.701,23.03,76.97,8.3,58.322,4.868c-0.041-0.01-0.075-0.031-0.118-0.035    c-0.016-0.001-0.031,0.006-0.047,0.006C55.508,4.361,52.785,4.098,50,4.098s-5.508,0.263-8.158,0.741    c-0.016,0-0.03-0.007-0.046-0.006c-0.042,0.004-0.077,0.025-0.118,0.035C23.03,8.299,8.298,23.031,4.868,41.68    c-0.01,0.04-0.031,0.074-0.035,0.116c-0.001,0.016,0.006,0.031,0.005,0.047C4.361,44.492,4.098,47.215,4.098,50    c0,2.784,0.263,5.507,0.741,8.157c0,0.016-0.007,0.03-0.005,0.047c0.004,0.045,0.025,0.083,0.037,0.126    c3.434,18.645,18.163,33.372,36.808,36.802c0.041,0.01,0.075,0.031,0.118,0.035c0.025,0.002,0.05,0.003,0.075,0.003    c0.003,0,0.007-0.002,0.01-0.002c2.637,0.473,5.348,0.734,8.119,0.734c2.772,0,5.483-0.261,8.121-0.734    c0.003,0,0.005,0.002,0.008,0.002c0.025,0,0.05-0.001,0.075-0.003c0.041-0.003,0.073-0.024,0.111-0.033    c18.647-3.428,33.379-18.154,36.814-36.799c0.012-0.044,0.033-0.083,0.038-0.13C95.168,58.187,95.161,58.172,95.162,58.155z     M87.26,73.847L63.686,56.166l29.684,2.698C92.264,64.284,90.154,69.34,87.26,73.847z M61.187,54.292l-2.508-1.881    c0.214-0.769,0.337-1.575,0.337-2.411s-0.124-1.643-0.337-2.412l2.508-1.88l32.473-2.951c0.39,2.358,0.603,4.776,0.603,7.243    s-0.212,4.885-0.603,7.243L61.187,54.292z M54.008,58.064l0.001,0.014l-0.008-0.01C54.004,58.066,54.006,58.065,54.008,58.064z     M50,57.377c-4.067,0-7.377-3.31-7.377-7.377s3.31-7.377,7.377-7.377s7.377,3.31,7.377,7.377S54.067,57.377,50,57.377z     M45.998,58.068l-0.007,0.009l0.001-0.013C45.994,58.066,45.996,58.066,45.998,58.068z M6.63,58.863l29.684-2.697L12.74,73.847    C9.846,69.34,7.736,64.284,6.63,58.863z M6.34,57.243C5.95,54.885,5.738,52.467,5.738,50c0-2.468,0.212-4.886,0.603-7.244    l32.473,2.952l2.507,1.88c-0.214,0.769-0.337,1.575-0.337,2.412c0,0.836,0.124,1.643,0.337,2.412l-2.508,1.881L6.34,57.243z     M12.74,26.153l23.575,17.681L6.631,41.136C7.736,35.716,9.846,30.66,12.74,26.153z M41.933,45.998l-0.01-0.007l0.013,0.001    C41.935,45.994,41.934,45.996,41.933,45.998z M41.932,54.001c0.001,0.002,0.002,0.005,0.003,0.007l-0.015,0.001L41.932,54.001z     M45.992,41.936l-0.001-0.013l0.007,0.01C45.996,41.934,45.994,41.935,45.992,41.936z M54.001,41.932l0.008-0.01l-0.001,0.013    C54.006,41.934,54.004,41.934,54.001,41.932z M58.064,45.992l0.014-0.001l-0.01,0.008C58.066,45.996,58.065,45.994,58.064,45.992z     M58.068,54.001l0.011,0.008l-0.014-0.001C58.065,54.006,58.066,54.003,58.068,54.001z M93.37,41.137l-29.685,2.698L87.26,26.153    C90.154,30.66,92.264,35.716,93.37,41.137z M86.349,24.787l-25.772,19.33l-3.497,0.317c-0.444-0.563-0.952-1.071-1.515-1.515    l0.318-3.496l19.33-25.773C79.554,16.671,83.329,20.446,86.349,24.787z M56.166,36.315l2.699-29.685    c5.42,1.105,10.476,3.215,14.982,6.109L56.166,36.315z M57.244,6.34l-2.952,32.473l-1.88,2.507    c-0.769-0.214-1.576-0.337-2.412-0.337s-1.643,0.124-2.412,0.337l-1.88-2.508L42.756,6.34C45.115,5.95,47.533,5.738,50,5.738    C52.468,5.738,54.886,5.95,57.244,6.34z M43.834,36.315L26.153,12.74c4.507-2.895,9.562-5.004,14.983-6.109L43.834,36.315z     M24.787,13.651l19.33,25.773l0.317,3.497c-0.563,0.443-1.071,0.951-1.514,1.514l-3.496-0.317l-25.773-19.33    C16.671,20.446,20.446,16.671,24.787,13.651z M13.651,75.213l25.772-19.33l3.498-0.318c0.443,0.563,0.951,1.071,1.514,1.515    l-0.318,3.495l-19.33,25.774C20.446,83.329,16.671,79.554,13.651,75.213z M43.835,63.684l-2.699,29.685    c-5.42-1.105-10.476-3.215-14.983-6.109L43.835,63.684z M42.756,93.66l2.952-32.474l1.88-2.507    c0.769,0.214,1.576,0.337,2.412,0.337s1.643-0.124,2.412-0.337l1.88,2.508l2.952,32.473c-2.358,0.39-4.776,0.603-7.244,0.603    C47.533,94.262,45.115,94.05,42.756,93.66z M56.166,63.685L73.847,87.26c-4.506,2.894-9.562,5.004-14.982,6.109L56.166,63.685z     M75.213,86.349l-19.33-25.773l-0.317-3.497c0.563-0.443,1.071-0.951,1.514-1.514l3.497,0.317l25.772,19.33    C83.329,79.554,79.554,83.329,75.213,86.349z"/>
      </svg>
      <Cog
        teeth={props.cassette}
        size={90}
        d2={0.85}
        className={styles.sprocket}
        style={sprocketStyle}/>
      <Cog
        teeth={props.chainRings}
        size={200}
        className={styles.chainRing}
        style={chainRingStyle}/>
    </div>
  );
};

Bike.propTypes = {
  cadence: PropTypes.number,
  cassette: PropTypes.array,
  chainRings: PropTypes.array,
  ratio: PropTypes.number,
};

export default Bike;