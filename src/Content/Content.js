import React from "react";
import classes from "./Content.module.css";

function Content(props) {
  return (
    <div className={classes.Content}>
      <button onMouseDown={this.randomItem} />
    </div>
  );
}

export default Content;
