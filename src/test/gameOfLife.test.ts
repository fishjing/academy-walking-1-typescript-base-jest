import { GameOfLife } from "../main/gameOfLife";

describe("GameOfLife", () => {
  it("should die if live cell have 0 live neighbours", () => {
    let game: GameOfLife = new GameOfLife([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
    expect(game.play(1, 1)).toBe(0);
  });

  it("should die if live cell have 1 live neighbours", () => {
    let game: GameOfLife = new GameOfLife([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
    expect(game.play(1, 1)).toBe(0);
  });

  it("should alive if live cell have 2 live neighbours", () => {
    let game: GameOfLife = new GameOfLife([
      [1, 1, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
    expect(game.play(1, 1)).toBe(1);
  });

  it("should alive if live cell have 3 live neighbours", () => {
    let game: GameOfLife = new GameOfLife([
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ]);
    expect(game.play(1, 1)).toBe(1);
  });

  it("should alive if live cell have 4 live neighbours", () => {
    let game: GameOfLife = new GameOfLife([
      [1, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ]);
    expect(game.play(1, 1)).toBe(0);
  });
});
