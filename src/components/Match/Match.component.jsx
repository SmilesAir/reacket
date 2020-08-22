import React from 'react';
import PropTypes from 'prop-types';
import './Match.styles.scss';
import Player from '../Player/Player.component';

const Match = ({
  players, id, score, isRuntime, getExpandElement, isFinal, isCurrent,
}) => {
  const winnerIdx = score[0] > score[1] ? 0 : 1;
  let className = 'reacket-match';
  if (isFinal === true) {
    className += ' final';
  } else if (isCurrent === true) {
    className += ' current';
  } else {
    className += ' pending';
  }
  return (
    <div className={className}>
      <div className="reacket-match-id">
        {id}
      </div>
      <div className="reacket-players">
        {players.map(({ name, seed, ...player }, index) => (
          <Player
            key={`${player.id}-${Math.random()}`}
            id={player.id}
            name={name}
            seed={seed}
            score={score[index]}
            winner={index === winnerIdx}
          />
        ))}
      </div>
      {isRuntime ? getExpandElement(id) : null}
    </div>
  );
};

Match.propTypes = {
  id: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number,
      name: PropTypes.string,
      seed: PropTypes.number,
    },
  )).isRequired,
  score: PropTypes.arrayOf(PropTypes.number).isRequired,
  isRuntime: PropTypes.bool,
  getExpandElement: PropTypes.func,
  isFinal: PropTypes.bool,
  isCurrent: PropTypes.bool,
};

Match.defaultProps = {
  isRuntime: false,
  getExpandElement: () => null,
  isFinal: false,
  current: false,
};

export default Match;
