import { CommandFactory } from "./CommandFactory";
import { North } from "./DirectionClass";
import { Position } from "./Position";

export class Rover {
  private positionHistory: Position[];

  constructor() {
    this.positionHistory = [new Position(0, 0, new North())];
  }

  private lastPostion(): Position {
    return this.positionHistory[this.positionHistory.length - 1];
  }

  command(actions: string) {
    const factory = new CommandFactory();
    for (let l = 0; l < actions.length; l++) {
      const action = actions[l];
      const command = factory.getCommand(action, this.positionHistory);
      this.positionHistory.push(command.move());
    }
  }

  getDirection() {
    return this.lastPostion().getDirection();
  }

  getPosition() {
    return this.lastPostion().getPosition();
  }
}
