import React from 'react';
import PropTypes from 'prop-types';
import './Match.styles.scss';
import Player from '../Player/Player.component';

const Match = ({
  players, id, score,
}) => {
  const winnerIdx = score[0] > score[1] ? 0 : 1;
  return (
    <div className="reacket-match">
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
    </div>
  );
};

Match.propTypes = {
  id: PropTypes.number.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number,
      name: PropTypes.string,
      seed: PropTypes.number,
    },
  )).isRequired,
  score: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Match;
