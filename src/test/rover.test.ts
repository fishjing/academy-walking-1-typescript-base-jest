import { Rover } from "../main/rover";

describe("rover -  start position 0:0:N", () => {
  it.each`
    input     | direction
    ${"L"}    | ${"W"}
    ${"LL"}   | ${"S"}
    ${"LLL"}  | ${"E"}
    ${"LLLL"} | ${"N"}
    ${"R"}    | ${"E"}
    ${"RR"}   | ${"S"}
    ${"RRR"}  | ${"W"}
    ${"RRRR"} | ${"N"}
  `(
    "should change direction to face $direction when input is $input",
    ({ direction, input }) => {
      const rover = new Rover();
      rover.command(input);
      expect(rover.getDirection()).toBe(direction);
    }
  );

  it.each`
    input            | position
    ${"M"}           | ${"0:1:N"}
    ${"MM"}          | ${"0:2:N"}
    ${"RM"}          | ${"1:0:E"}
    ${"MRRM"}        | ${"0:0:S"}
    ${"RMRRM"}       | ${"0:0:W"}
    ${"MMRMMLM"}     | ${"2:3:N"}
    ${"MMMMMMMMMM"}  | ${"0:0:N"}
    ${"RMMMMMMMMMM"} | ${"0:0:E"}
    ${"LM"}          | ${"9:0:W"}
    ${"LLM"}         | ${"0:9:S"}
  `("should move to $position when input is $input", ({ position, input }) => {
    const rover = new Rover();
    rover.command(input);
    expect(rover.getPosition()).toBe(position);
  });
});
describe("rover -  undo", () => {
  it.each`
    input   | position
    ${"MU"} | ${"0:0:N"}
  `("should move to $position when input is $input", ({ position, input }) => {
    const rover = new Rover();
    rover.command(input);
    expect(rover.getPosition()).toBe(position);
  });
});
