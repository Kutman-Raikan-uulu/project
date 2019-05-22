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
    this.catchNew(board[0][0].color);
    return board;
  }
  catchNew = () => {
    G;
    const dimension = 8;
    let board = this.props.board;
    let newColor = this.style;
    for (var x = 0; x < dimension; x++) {
      for (var y = 0; y < dimension; y++) {
        if (board[x][y].isCaught) {
          if (x > 0) {
            var up = board[x - 1][y];
            if (up.color === newColor) {
              up.isCaught = true;
            }
          }
          if (x < dimension - 1) {
            var down = board[x + 1][y];
            if (down.color === newColor) {
              down.isCaught = true;
            }
          }
          if (y > 0) {
            var left = board[x][y - 1];
            if (left.color === newColor) {
              left.isCaught = true;
            }
          }
          if (y < dimension - 1) {
            var right = board[x][y + 1];
            if (right.color === newColor) {
              right.isCaught = true;
            }
          }
          board[x][y].color = newColor;
        }
      }
    }
    var caughtElements = board.reduce(function(sum, row) {
      return (
        sum +
        row.reduce(function(sum, item) {
          return sum + (item.isCaught ? 1 : 0);
        }, 0)
      );
    }, 0);
    return caughtElements;
  };
}

export default Game;
