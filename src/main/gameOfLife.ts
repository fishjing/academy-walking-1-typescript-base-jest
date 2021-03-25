interface Coordinates {
  x: number;
  y: number;
}

enum Status {
  Alive = 1,
  Dead = 0,
}

class Grid {
  private grid: Status[][];

  constructor(grid: Status[][]) {
    this.grid = grid;
  }

  getCellStatus({ x, y }: Coordinates): Status {
    try {
      return this.grid[x][y];
    } catch {
      return Status.Dead;
    }
  }

  isCellAlive(coordinate: Coordinates): boolean {
    return this.getCellStatus(coordinate) === Status.Alive;
  }

  getNumberOfAliveNeighbours({ x, y }: Coordinates): number {
    const currentCellStatus = this.isCellAlive({ x, y }) ? 1 : 0;
    let numberOfAliveNeighbours = 0;
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (this.isCellAlive({ x: i, y: j })) {
          numberOfAliveNeighbours += 1;
        }
      }
    }

    numberOfAliveNeighbours = numberOfAliveNeighbours - currentCellStatus;

    return numberOfAliveNeighbours;
  }
}

export class GameOfLife {
  private grid: Grid;

  constructor(grid: Status[][]) {
    this.grid = new Grid(grid);
  }

  play(coordinates: Coordinates): Status {
    const numberOfAliveNeighbours = this.grid.getNumberOfAliveNeighbours(
      coordinates
    );

    if (numberOfAliveNeighbours === 3) {
      return Status.Alive;
    }

    if (this.grid.isCellAlive(coordinates) && numberOfAliveNeighbours === 2) {
      return Status.Alive;
    }

    return Status.Dead;
  }
}
