import React, { Component } from "react";
import Board from "../Board/Board";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: this.createBoard(),
      winner: null,
      newestDisk: null
    };
  }

  render() {
    return (
      <div className="Game container">
        <div className="row">
          <Board
            board={this.state.board}
            newest={this.state.newestDisk}
            player={this.state.currentPlayer}
          />
        </div>
      </div>
    );
  }

  /** create the initial board state */
  createBoard() {
    let board = new Array(8);
    let rowPos;

    for (let x = 0; x < board.length; x++) {
      board[x] = new Array(8);
      rowPos = x * 8;

      for (let y = 0; y < board[x].length; y++) {
        board[x][y] = {
          id: rowPos + (y + 1)
        };
      }
    }
    board[0][0].isCaught = true;

    return board;
  }
}

export default Game;
