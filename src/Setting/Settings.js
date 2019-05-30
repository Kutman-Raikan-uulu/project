import React, { Component } from "react";
import StdButton from "../StdButton/StdButton";
import ColorButton from "../ColorButton/ColorButton";
import InputRange from "react-input-range";
import "./Setting.css";

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = props.state;
    this.updateSetting = this.updateSetting.bind(this);
    this.saveClick = props.save;
  }

  updateSetting = (state, settingName, newValue) => {
    if (state[settingName] !== newValue) {
      state[settingName] = newValue;
      this.setState(state);
    }
  };

  render() {
    return (
      <div className="settings">
        <div className="boardSize columns">
          <div className="boardSizeHeader">BOARD SIZE</div>
          <div className="boardSizeSettings">
            <StdButton
              text="5"
              toggle={this.state.boardSize === 5 ? true : false}
              click={this.updateSetting.bind(null, this.state, "boardSize", 5)}
            />
          </div>
        </div>

        <div className="colorScheme columns">
          <div className="colorSchemeHeader">COLORS</div>
          <div className="colorSchemeSettings">
            <ColorButton
              text=""
              toggle={this.state.chosenColor === 1 ? true : false}
              colors={this.state.colorTemplates[1]}
              click={this.updateSetting.bind(
                null,
                this.state,
                "chosenColor",
                1
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}
