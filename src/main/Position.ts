import { Direction, DirectionEnum } from "./DirectionClass";

export class Position {
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

  move(): Position {
    const currentDirection = this.direction.getDirection();
    let x = this.positionX;
    let y = this.positionY;

    if (currentDirection === DirectionEnum.North) {
      y = this.moveForward(this.positionY);
    } else if (currentDirection === DirectionEnum.East) {
      x = this.moveForward(this.positionX);
    } else if (currentDirection === DirectionEnum.West) {
      x = this.moveBackward(this.positionX);
    } else {
      y = this.moveBackward(this.positionY);
    }

    return new Position(x, y, this.direction);
  }

  private moveBackward(position: number): number {
    return (position + 9) % 10;
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
