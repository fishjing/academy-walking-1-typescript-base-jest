import { Direction, DirectionEnum, North } from "./DirectionClass";

class Position {
  private direction: Direction;
  private positionX: number;
  private positionY: number;

  constructor(x: number, y: number, direction: Direction) {
    this.direction = direction;
    this.positionX = x;
    this.positionY = y;
  }

  turnLeft() {
    this.direction = this.direction.turnLeft();
  }

  turnRight() {
    this.direction = this.direction.turnRight();
  }

  move() {
    const currentDirection = this.direction.getDirection();
    if (currentDirection === DirectionEnum.North) {
      // return new Position(this.positionX, this.moveForward(this.positionY), this.direction)
      this.positionY = this.moveForward(this.positionY);
    } else if (currentDirection === DirectionEnum.East) {
      this.positionX = this.moveForward(this.positionX);
    } else if (currentDirection === DirectionEnum.West) {
      this.positionX = this.moveBackward(this.positionX);
    } else if (currentDirection === DirectionEnum.South) {
      this.positionY = this.moveBackward(this.positionY);
    }
  }

  private moveBackward(position: number): number {
    return position === 0 ? 9 : position - 1;
  }

  private moveForward(position: number): number {
    return (position + 1) % 10;
  }

  getDirection() {
    return this.direction.getDirection();
  }

  getPosition() {
    return `${this.positionX}:${
      this.positionY
    }:${this.direction.getDirection()}`;
  }
}

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
        this.position.move();
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
