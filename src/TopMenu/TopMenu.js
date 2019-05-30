import React from "react";
import "font-awesome/css/font-awesome.css";
import "./TopMenu.css";
import PropTypes from "prop-types";

const TopMenu = ({ state, restart, setting }) => {
  var str = "000" + state.turn;
  return (
    <div className="topMenu">
      <div className="score">
        {str.substring(str.length - state.maxTurns.toString().length)}/
        {state.maxTurns}
      </div>
      <div className="menuButtons">
        <div id="refresh" className="menuButton">
          <i className="fa fa-refresh" onClick={restart.bind(null, state)} />
        </div>
      </div>
    </div>
  );
};

TopMenu.propTypes = {
  state: PropTypes.object.isRequired,
  restart: PropTypes.func.isRequired,
  setting: PropTypes.func.isRequired
};

export default TopMenu;
