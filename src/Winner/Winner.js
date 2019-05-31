import React from "react";
import "./Winner.css";
import StdButton from "../StdButton/StdButton";
import PropTypes from "prop-types";

const Winner = ({ state, restart }) => {
  const conditionText =
    state.winner === "won" ? "You have won the game!" : "You are out of moves!";

  return (
    <div className="splash">
      <p className="conditionText">{conditionText}</p>
      <StdButton click={restart.bind(null, state)} text="Play Again!" />
    </div>
  );
};

Winner.propTypes = {
  state: PropTypes.object.isRequired,
  restart: PropTypes.func.isRequired
};

export default Winner;
