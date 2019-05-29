import React, { Component } from "react";
import "./Cell.css";

// let cells = <div />;

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  // randomCellColor = () => {
  //   x += 1;
  //   if (x <= 64) {
  //     let color = (Math.random() * colors.length + 0).toFixed(0);
  //     cells.append(
  //       <td
  //        style={{ backgroundColor: colors[color] }}
  //         className={this.classes()}
  //       />
  //     );
  //     this.randomCellColor();
  //   } else return;
  // };

  render() {
    let colors = ["red", "orange", "yellow", "green", "blue", "violet"];

    let color = (Math.random() * (colors.length - 1)).toFixed();
    console.log(colors[color]);
    return (
      <td style={{ backgroundColor: colors[color] }} className={this.classes()}>
        {this.randomColor()}
      </td>
    );
  }
  randomColor() {
    return <div />;
  }

  // isNewest() {
  //   return (
  //     this.props.newest &&
  //     this.props.newest[0] === this.props.position[0] &&
  //     this.props.newest[1] === this.props.position[1]
  //   );
  // }
  catchNew = () => {
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
  classes() {
    let cls = "Cell ";
    let cell = this.props.data;
    console.log(cell);
    cls += cell.disk ? "Cell--occupied" : "Cell--vacant";

    return cls;
  }
}

export default Cell;
