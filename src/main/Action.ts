import { Position } from "./Position";

export class Action {
  private history: Position[];
  constructor(history: Position[]) {
    this.history = history;
  }

  getPostionFromLastIndex(lastNthIndex: number = 1): Position {
    return this.history[this.history.length - lastNthIndex];
  }

  move(): Position {
    return this.getPostionFromLastIndex();
  }

  getHistoryLength(): number {
    return this.history.length;
  }
}

export class Left extends Action {
  move(): Position {
    return this.getPostionFromLastIndex().turnLeft();
  }
}

export class Right extends Action {
  move(): Position {
    return this.getPostionFromLastIndex().turnRight();
  }
}

export class Move extends Action {
  move(): Position {
    return this.getPostionFromLastIndex().move();
  }
}

export class Undo extends Action {
  move(): Position {
    return this.getHistoryLength()
      ? this.getPostionFromLastIndex(2)
      : this.getPostionFromLastIndex();
  }
}
