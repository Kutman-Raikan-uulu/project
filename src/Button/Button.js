import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ color, index, state, click }) => {
  return (
    <li
      className={`button`}
      style={{ backgroundColor: color }}
      onClick={click.bind(null, index, state)}
    />
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  state: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired
};

export default Button;
