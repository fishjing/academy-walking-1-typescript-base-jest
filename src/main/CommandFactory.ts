import { Position } from "./Position";
import { Action, Left, Right, Move, Undo } from "./Action";

export class CommandFactory {
  getCommand(action: string, history: Position[]): Action {
    if (action === "L") {
      return new Left(history);
    } else if (action === "R") {
      return new Right(history);
    } else if (action === "M") {
      return new Move(history);
    } else {
      return new Undo(history);
    }
  }
}
