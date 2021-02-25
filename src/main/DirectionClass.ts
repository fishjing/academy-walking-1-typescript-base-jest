export enum DirectionEnum {
  North = "N",
  West = "W",
  South = "S",
  East = "E",
}

export interface Direction {
  turnLeft(): Direction;
  turnRight(): Direction;
  getDirection(): string;
}

export class North implements Direction {
  turnLeft(): Direction {
    return new West();
  }
  turnRight(): Direction {
    return new East();
  }
  getDirection() {
    return DirectionEnum.North;
  }
}

export class South implements Direction {
  turnLeft(): Direction {
    return new East();
  }
  turnRight(): Direction {
    return new West();
  }
  getDirection() {
    return DirectionEnum.South;
  }
}

export class East implements Direction {
  turnLeft(): Direction {
    return new North();
  }
  turnRight(): Direction {
    return new South();
  }
  getDirection() {
    return DirectionEnum.East;
  }
}

export class West implements Direction {
  turnLeft(): Direction {
    return new South();
  }
  turnRight(): Direction {
    return new North();
  }
  getDirection() {
    return DirectionEnum.West;
  }
}
