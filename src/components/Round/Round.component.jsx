import React from 'react';
import PropTypes from 'prop-types';
import './Round.styles.scss';
import Match from '../Match/Match.component';
import Spacer from '../Spacer/Spacer.component';

const Round = ({
  lastRound, firstRound, matches, round, showExpandElement, getExpandElement,
}) => {
  const matchElements = [];
  if (!firstRound && !lastRound) {
    matchElements.push(<Spacer key={`${round}-fs`} />);
  }
  matches.map((match, index) => {
    if (!firstRound && !lastRound && index > 0) {
      matchElements.push(<Spacer key={`${match.id}-s`} height={2} />);
    }

    if (match.needSpacer === true) {
      matchElements.push(<Spacer key={`${match.id}-s2`} height={4.25} />);
    } else {
      matchElements.push(
        <Match
          key={match.id}
          score={match.score}
          id={match.id}
          players={match.players}
          showExpandElement={showExpandElement}
          getExpandElement={getExpandElement}
          isFinal={match.isFinal}
          isCurrent={match.isCurrent}
        />,
      );
    }

    return matchElements;
  });
  if (!firstRound && !lastRound) {
    matchElements.push(<Spacer key={`${round}-ls`} />);
  }
  return <div className="reacket-round">{matchElements}</div>;
};

Round.propTypes = {
  lastRound: PropTypes.bool,
  firstRound: PropTypes.bool,
  matches: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    round: PropTypes.number.isRequired,
    match: PropTypes.number.isRequired,
    players: PropTypes.arrayOf(PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        seed: PropTypes.number.isRequired,
      },
    )),
    score: PropTypes.arrayOf(PropTypes.string.isRequired),
  })).isRequired,
  round: PropTypes.number.isRequired,
  showExpandElement: PropTypes.bool,
  getExpandElement: PropTypes.func,
};

Round.defaultProps = {
  lastRound: false,
  firstRound: false,
  showExpandElement: false,
  getExpandElement: undefined,
};

export default Round;
