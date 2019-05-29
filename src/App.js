import React, { Component } from "react";
import "./App.css";
import MakeMove from "./MakeMove";
import ButtonRow from "./ButtonRow";
import Board from "./Board/Board";
import Settings from "./Settings";
import RestartGame from "./RestartGame";

class App extends Component {
  constructor(props) {
    super(props);

    this.restartClick = this.restartClick.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.saveClick = this.saveClick.bind(this);
    this.state = {};
  }

  componentDidMount() {
    const newState = RestartGame();
    this.setState(newState);
  }

  settingsClick = state => {
    state.showSettings = state.showSettings ? false : true;
    this.setState(state);
  };

  buttonClick = (color, state) => {
    if (state.winner === false) this.setState(MakeMove(color, state));
  };

  restartClick = state => {
    this.setState(RestartGame(state));
  };

  saveClick = newState => {
    this.setState(RestartGame(newState));
  };

  render() {
    if (this.state.board === undefined) {
      return <p>Loading..</p>;
    }

    let board = this.state.showSettings ? (
      <Settings state={this.state} save={this.saveClick} />
    ) : (
      <Board
        board={this.state.board}
        colors={this.state.colorTemplates[this.state.chosenColor]}
      />
    );

    return (
      <div className="game">
        <div className="playingfield">{board}</div>
        <ButtonRow state={this.state} click={this.buttonClick} />
      </div>
    );
  }
}

export default App;
