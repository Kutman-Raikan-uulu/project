import InitialState from "./initialState";
import CreateBoard from "./CreateBoard";
import MakeMove from "./MakeMove";

export default function RestartGame(state = InitialState()) {
  state.maxTurns = state.boardSize * state.difficulty;
  state.board = CreateBoard(
    state.boardSize * 2,
    state.boardSize,
    state.colorCount
  );
  state.board[0][0].collected = true;
  state.turn = -1;
  state.showSettings = false;
  state.winner = false;

  return MakeMove(state.board[0][0].color, state);
}
