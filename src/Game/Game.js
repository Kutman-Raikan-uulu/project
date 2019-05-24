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
          <div className="button">
            <button
              onClick={_ => this.catchNew()}
              style={{ backgroundColor: "red" }}
            />
            <button
              onClick={_ => this.catchNew()}
              style={{ backgroundColor: "blue" }}
            />
            <button
              onClick={_ => this.catchNew()}
              style={{ backgroundColor: "violet" }}
            />
            <button
              onClick={_ => this.catchNew()}
              style={{ backgroundColor: "green" }}
            />
            <button
              onClick={_ => this.catchNew()}
              style={{ backgroundColor: "orange" }}
            />
            <button
              onClick={_ => this.catchNew()}
              style={{ backgroundColor: "yellow" }}
            />
          </div>
          <Board
            board={this.state.board}
            newest={this.state.newestDisk}
            player={this.state.currentPlayer}
          />
        </div>
      </div>
    );
  }
  newColor = board => {
    let backgroundColor = this.props.button.style;
    board.style = backgroundColor;
  };

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
  catchNew = newColor => {
    const dimension = 8;
    let board = this.props.board;

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
