import React from "react";
import "./Tile.css";
const StandardTile = ({ color }) => {
  return <li className={`tile`} style={{ backgroundColor: color }} />;
};

export default StandardTile;
