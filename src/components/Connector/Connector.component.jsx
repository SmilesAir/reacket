import React from 'react';
import PropTypes from 'prop-types';
import './Connector.styles.scss';
import Spacer from '../Spacer/Spacer.component';

const Connector = ({ round, roundCount, matches }) => {
  const rightLines = 2 ** (round - 1);
  const leftLines = 2 ** round;

  const rightElements = [];
  const leftElements = [];

  const matchesInRound = matches.filter((match) => match.round === roundCount - round);

  for (let i = 0; i < rightLines; i += 1) {
    if (i > 0) {
      rightElements.push(<Spacer key={`${round}-${i}-s`} height={2} />);
    }
    const allSpacers = matchesInRound[i * 2].needSpacer === true && matchesInRound[i * 2 + 1].needSpacer === true;
    if (!allSpacers) {
      rightElements.push(<div key={`${round}-${i}-l`} className="reacket-horizontal-line" />);
    }
  }

  for (let i = 0; i < leftLines; i += 1) {
    const isSpacer = matchesInRound[i].needSpacer === true;
    if (i % 2) {
      const prevIsSpacer = matchesInRound[i - 1].needSpacer === true;

      leftElements.push(<Spacer key={`${round}-${i}-s`} line={!prevIsSpacer} height={1} />);
      leftElements.push(<Spacer key={`${round}-${i}-s2`} line={!isSpacer} height={1} />);
    } else if (i > 0) {
      leftElements.push(<Spacer key={`${round}-${i}-s`} height={2} />);
    }

    if (!isSpacer) {
      leftElements.push(<div key={`${i}-l`} className="reacket-horizontal-line" />);
    }
  }

  return (
    <div className="reacket-connectors">
      <div data-test="connector-left" className="reacket-connector">
        <Spacer key={`${round}-l-t`} />
        {leftElements}
        <Spacer key={`${round}-l-b`} />
      </div>
      <div data-test="connector-right" className="reacket-connector">
        <Spacer key={`${round}-r-t`} />
        {rightElements}
        <Spacer key={`${round}-r-b`} />
      </div>
    </div>
  );
};

Connector.propTypes = {
  round: PropTypes.number.isRequired,
  roundCount: PropTypes.number.isRequired,
  matches: PropTypes.array.isRequired,
};

export default Connector;
