export class GameOfLife {
  private grid: number[][];

  constructor(grid: number[][]) {
    this.grid = grid;
  }

  play(x: number, y: number) {
    let total = 0;

    for (let i = Math.max(0, x - 1); i < x + 2; i++) {
      for (let j = Math.max(y - 1); j < y + 2; j++) {
        total += this.grid[i][j];
      }
    }
    const currentGrid = this.grid[x][y];

    if (currentGrid) {
      return total === 3 || total === 4 ? 1 : 0;
    }
    return total === 3 ? 1 : 0;
  }
}
