import { GameOfLife } from "../main/gameOfLife";

describe("GameOfLife", () => {
  describe("Live cell", () => {
    it("should die if have 0 live neighbours", () => {
      let game: GameOfLife = new GameOfLife([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ]);
      expect(game.play({ x: 1, y: 1 })).toBe(0);
    });

    it("should die if have 1 live neighbours", () => {
      let game: GameOfLife = new GameOfLife([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ]);
      expect(game.play({ x: 1, y: 1 })).toBe(0);
    });

    it("should alive if have 2 live neighbours", () => {
      let game: GameOfLife = new GameOfLife([
        [1, 1, 0],
        [0, 1, 0],
        [0, 0, 0],
      ]);
      expect(game.play({ x: 1, y: 1 })).toBe(1);
    });

    it("should alive if have 3 live neighbours", () => {
      let game: GameOfLife = new GameOfLife([
        [1, 1, 1],
        [0, 1, 0],
        [0, 0, 0],
      ]);
      expect(game.play({ x: 1, y: 1 })).toBe(1);
    });

    it("should die if have 4 live neighbours", () => {
      let game: GameOfLife = new GameOfLife([
        [1, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
      ]);
      expect(game.play({ x: 1, y: 1 })).toBe(0);
    });

    it("should die if have 5 live neighbours", () => {
      let game: GameOfLife = new GameOfLife([
        [1, 1, 1],
        [1, 1, 1],
        [0, 0, 0],
      ]);
      expect(game.play({ x: 1, y: 1 })).toBe(0);
    });
  });

  describe("Dead cell", () => {
    it("should die if have 0 live neighbours", () => {
      let game: GameOfLife = new GameOfLife([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
      expect(game.play({ x: 1, y: 1 })).toBe(0);
    });

    it("should die if have 1 live neighbours", () => {
      let game: GameOfLife = new GameOfLife([
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
      expect(game.play({ x: 1, y: 1 })).toBe(0);
    });

    it("should die if have 2 live neighbours", () => {
      let game: GameOfLife = new GameOfLife([
        [1, 1, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
      expect(game.play({ x: 1, y: 1 })).toBe(0);
    });

    it("should live if have 3 live neighbours", () => {
      let game: GameOfLife = new GameOfLife([
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0],
      ]);
      expect(game.play({ x: 1, y: 1 })).toBe(1);
    });
    it("should die if have 4 live neighbours", () => {
      let game: GameOfLife = new GameOfLife([
        [1, 1, 1],
        [1, 0, 0],
        [0, 0, 0],
      ]);
      expect(game.play({ x: 1, y: 1 })).toBe(0);
    });
  });

  describe("Edge cell", () => {
    it("should die if live cell at [0,0] and have 0 live neighbours", () => {
      let game: GameOfLife = new GameOfLife([
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
      expect(game.play({ x: 0, y: 0 })).toBe(0);
    });

    it("should die if live cell at [2,2] and have 0 live neighbours", () => {
      let game: GameOfLife = new GameOfLife([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 1],
      ]);
      expect(game.play({ x: 2, y: 2 })).toBe(0);
    });
  });
});
