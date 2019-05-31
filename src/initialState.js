import React from "react";

function InitialState() {
  return {
    turn: 0,
    maxTurns: 0,
    showSettings: true,
    boardSize: 5,

    colorTemplates: [
      ["red", "blue", "orange", "purple", "yellow", "brown", "green"],
      [
        "#FC726D",
        "#2E4F6D",
        "#35AE57",
        "#F7931E",
        "#FFCE55",
        "#AF4175",
        "#29CCC0"
      ]
    ],
    chosenColor: 0,
    colorCount: 5,

    difficulty: 3
  };
}

export default InitialState;
