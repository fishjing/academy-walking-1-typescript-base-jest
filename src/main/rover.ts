enum Direction {
  North = "N",
  West = "W",
  South = "S",
  East = "E",
}

const TurnLeftDirection = {
  [Direction.North]: Direction.West,
  [Direction.West]: Direction.South,
  [Direction.South]: Direction.East,
  [Direction.East]: Direction.North,
};

const TurnRightDirection = {
  [Direction.North]: Direction.East,
  [Direction.East]: Direction.South,
  [Direction.South]: Direction.West,
  [Direction.West]: Direction.North,
};

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
    this.direction = TurnLeftDirection[this.direction];
  }

  turnRight() {
    this.direction = TurnRightDirection[this.direction];
  }

  move() {
    if (this.direction === Direction.North) {
      this.positionY = this.moveForward(this.positionY);
    } else if (this.direction === Direction.East) {
      this.positionX = this.moveForward(this.positionX);
    } else if (this.direction === Direction.West) {
      this.positionX = this.moveBackward(this.positionX);
    } else if (this.direction === Direction.South) {
      this.positionY = this.moveBackward(this.positionY);
    }
  }

  private moveBackward(position: number): number {
    return position === 0 ? 9 : position - 1;
  }

  private moveForward(position: number): number {
    return position === 9 ? 0 : position + 1;
  }

  getDirection() {
    return this.direction;
  }

  getPosition() {
    return `${this.positionX}:${this.positionY}:${this.direction}`;
  }
}

export class Rover {
  private position: Position;

  constructor() {
    this.position = new Position(0, 0, Direction.North);
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
