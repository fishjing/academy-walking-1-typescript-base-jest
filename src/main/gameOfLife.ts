interface Coordinates {
  x: number;
  y: number;
}

enum Status {
  Alive = 1,
  Dead = 0,
}

export class GameOfLife {
  private grid: number[][];

  constructor(grid: number[][]) {
    this.grid = grid;
  }

  getTopLeftNeighbourPosition({ x, y }: Coordinates): Coordinates {
    return {
      x: Math.max(0, x - 1),
      y: Math.max(0, y - 1),
    };
  }

  getBottomRightNeighbourPosition({ x, y }: Coordinates): Coordinates {
    return {
      x: Math.min(x + 1, this.grid.length - 1),
      y: Math.min(y + 1, this.grid.length - 1),
    };
  }

  isCellAlive({ x, y }: Coordinates): boolean {
    return this.grid[x][y] === Status.Alive;
  }

  getNumberOfAliveNeighbours({ x, y }: Coordinates): number {
    let numberOfAliveNeighbours = 0;

    const topLeft = this.getTopLeftNeighbourPosition({ x, y });
    const bottomRight = this.getBottomRightNeighbourPosition({ x, y });

    for (let i = topLeft.x; i <= bottomRight.x; i++) {
      for (let j = topLeft.y; j <= bottomRight.y; j++) {
        if (this.isCellAlive({ x: i, y: j })) {
          numberOfAliveNeighbours += 1;
        }
      }
    }

    return numberOfAliveNeighbours;
  }

  shouldBeAlive(numberOfAliveNeighbours: number): boolean {
    return numberOfAliveNeighbours === 3 || numberOfAliveNeighbours === 4;
  }

  play(coordinates: Coordinates): Status {
    const numberOfAliveNeighbours = this.getNumberOfAliveNeighbours(
      coordinates
    );

    if (this.isCellAlive(coordinates)) {
      return this.shouldBeAlive(numberOfAliveNeighbours)
        ? Status.Alive
        : Status.Dead;
    }
    return numberOfAliveNeighbours === 3 ? Status.Alive : Status.Dead;
  }
}
