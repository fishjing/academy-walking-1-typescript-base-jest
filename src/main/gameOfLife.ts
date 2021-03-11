export class GameOfLife {
  private grid: number[][];

  constructor(grid: number[][]) {
    this.grid = grid;
  }

  play(x: number, y: number) {
    let total = 0;
    for (let i = x - 1; i < x + 2; i++) {
      for (let j = y - 1; j < y + 2; j++) {
        total += this.grid[i][j];
      }
    }
    if (total < 3) {
      return 0;
    }
    return 1;
  }
}
