import { North } from "./DirectionClass";
import { Position } from "./Position";

export class Rover {
  private position: Position;

  constructor() {
    this.position = new Position(0, 0, new North());
  }

  command(actions: string) {
    for (let l = 0; l < actions.length; l++) {
      const action = actions[l];
      if (action === "L") {
        this.position.turnLeft();
      } else if (action === "R") {
        this.position.turnRight();
      } else if (action === "M") {
        this.position = this.position.move();
      }
    }
  }

  getDirection() {
    return this.position.getDirection();
  }

  getPosition() {
    return this.position.getPosition();
  }
}
