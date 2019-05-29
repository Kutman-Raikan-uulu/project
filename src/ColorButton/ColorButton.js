import React from "react";
import Tile from "../Board/Tile";
import "./ColorButton.css";

const ColorButton = ({
  click = function() {
    console.log("Button pressed");
  },
  text,
  toggle = false,
  style = {},
  colors
}) => {
  let toggleClass = "";

  if (toggle) toggleClass = "colorButtonToggle";

  return (
    <div className={`colorButton ${toggleClass}`} onClick={click} style={style}>
      {text}
      <ul className="colors">
        {colors.map(c => {
          return <Tile color={c} key={c} />;
        })}
      </ul>
    </div>
  );
};

export default ColorButton;
