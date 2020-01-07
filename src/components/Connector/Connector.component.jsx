import React from 'react';
import PropTypes from 'prop-types';
import './Connector.styles.scss';
import Spacer from '../Spacer/Spacer.component';
// round = first round = 1
const Connector = ({ round }) => {
  const rightLines = 2 ** (round - 1);
  const leftLines = 2 ** round;

  const rightElements = [];
  const leftElements = [];

  for (let i = 0; i < rightLines; i += 1) {
    if (i > 0) {
      rightElements.push(<Spacer key={`${i}-s`} height={2} />);
    }
    rightElements.push(<div key={`${i}-l`} className="horizontal-line" />);
  }

  for (let i = 0; i < leftLines; i += 1) {
    if (i % 2) {
      leftElements.push(<Spacer key={`${i}-s`} line height={2} />);
    } else if (i > 0) {
      leftElements.push(<Spacer key={`${i}-s`} height={2} />);
    }
    leftElements.push(<div key={`${i}-l`} className="horizontal-line" />);
  }

  return (
    <div className="connectors">
      <div className="connector">
        <Spacer />
        {leftElements}
        <Spacer />
      </div>
      <div className="connector">
        <Spacer />
        {rightElements}
        <Spacer />
      </div>
    </div>
  );
};

Connector.propTypes = {
  round: PropTypes.number.isRequired,
};

export default Connector;