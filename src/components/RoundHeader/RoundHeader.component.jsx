import React from 'react';
import PropTypes from 'prop-types';
import './RoundHeader.styles.scss';

const getRoundHeaderText = (round, totalRounds) => {
  if (round === totalRounds) {
    return 'Finals';
  }
  if (round === totalRounds - 1) {
    return 'Semifinals';
  }
  if (round === totalRounds - 2) {
    return 'Quarterfinals';
  }
  if (round === totalRounds - 3) {
    return 'Preliminaries';
  }
  if (round === totalRounds - 4) {
    return 'Initiations';
  }

  return `Round ${round}`;
};
const RoundHeader = ({ round, totalRounds }) => (
  <div className={`reacket-round-header
    ${round === totalRounds ? 'reacket-last-round' : ''}`}
  >
    {getRoundHeaderText(round, totalRounds)}
  </div>
);

RoundHeader.propTypes = {
  round: PropTypes.number.isRequired,
  totalRounds: PropTypes.number.isRequired,
};

export default RoundHeader;
