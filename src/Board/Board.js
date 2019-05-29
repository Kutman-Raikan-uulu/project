import React from "react";
import shortId from "shortid";
import PropTypes from "prop-types";
import Tile from "./Tile";
import "./Board.css";

const Board = ({ board, colors }) => {
  return (
    <div className="Board" key="board">
      {board.map(line => {
        return (
          <ul className={`line`} key={shortId.generate()}>
            {line.map(cell => {
              return (
                <Tile color={colors[cell.color]} key={shortId.generate()} />
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired
};

export default Board;
