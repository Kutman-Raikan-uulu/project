import React, { Component } from "react";
import Game from "./Game/Game";
import GameOver from "./GameOver/GameOver";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "active",
      winner: null,
      whiteScore: 0,
      blackScore: 0
    };
  }

  render() {
    let game =
      this.state.status === "active" ? (
        <Game end={this.endGame.bind(this)} />
      ) : (
        ""
      );
    let gameOver =
      this.state.status === "over" ? (
        <GameOver
          
        />
      ) : (
        ""
      );

    return (
      <div className="App">
        {game}
        {gameOver}
      </div>
    );
  }

  restartGame() {
    this.setState({
      status: "active"
    });
  }

  endGame(winner, whiteScore, blackScore) {
    this.setState({
      status: "over",
      winner,
      whiteScore,
      blackScore
    });
  }
}

export default App;
