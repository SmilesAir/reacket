import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Player.styles.scss';
import HighlightContext from '../../context/HighlightContext';

const Player = ({
  id, name, rating, seed, score, winner,
}) => {
  const { highlightedPlayer, setHighlightedPlayer } = useContext(HighlightContext);
  return (
    <div
      onMouseEnter={() => setHighlightedPlayer(id)}
      onMouseLeave={() => setHighlightedPlayer(null)}
      title={`${name} ${winner ? '(W)' : '(L)'}`}
      className={`reacket-player
        ${winner ? 'reacket-winner' : ''}
        ${highlightedPlayer === id && id !== 0 ? 'reacket-highlighted' : ''}`}
    >
      <div title="Seed" className="reacket-player-seed">{seed}</div>
      <div className="reacket-player-name">{name}{rating}</div>
      <div title="Score" className="reacket-player-score">{score}</div>
    </div>
  );
};

Player.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.string,
  seed: PropTypes.number.isRequired,
  score: PropTypes.string.isRequired,
  winner: PropTypes.bool.isRequired,
};

Player.defaultProps = {
  rating: '',
};

export default Player;
