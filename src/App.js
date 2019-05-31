import React, { Component } from "react";
import "./App.css";
import MakeMove from "./MakeMove";
import ButtonRow from "./ButtonRow/ButtonRow";
import Board from "./Board/Board";
import Settings from "./Setting/Settings";
import RestartGame from "./RestartGame";
import TopMenu from "./TopMenu/TopMenu";
import Winner from "./Winner/Winner";

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
    console.log(this.state.winner);
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
    let splash =
      this.state.winner !== false ? (
        <Winner state={this.state} restart={this.restartClick} />
      ) : null;

    return (
      <div className="App">
        <div className="game">
          <TopMenu state={this.state} restart={this.restartClick} />
          <div className="playingfield">
            {splash}
            {board}
          </div>
          <ButtonRow state={this.state} click={this.buttonClick} />
        </div>
      </div>
    );
  }
}

export default App;
