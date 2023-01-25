const Calculator = require("./calculator");
//ADDITION
describe("addition", () => {
  test("5 and 5 equals 10", () => {
    expect(Calculator.add(5, 5)).toEqual(10);
  });
  test("5.3 and 5.5 equals 10.8", () => {
    expect(Calculator.add(5.3, 5.5)).toEqual(10.8);
  });
  test("0 and 5 equals 5", () => {
    expect(Calculator.add(0, 5)).toEqual(5);
  });
});
//SUBTRACTION
describe("subtraction", () => {
  test("10 and 5 equals ", () => {
    expect(Calculator.subtract(10, 5)).toEqual(5);
  });
  test("10.7 and 5 equals 5.7 ", () => {
    expect(Calculator.subtract(10.7, 5)).toBeCloseTo(5.7);
  });
  test("0.5 and 5 equals -4.5 ", () => {
    expect(Calculator.subtract(0.5, 5)).toBeCloseTo(-4.5);
  });
});
//DIVISION

describe("divide", () => {
  test("15 and 5 equals 3", () => {
    expect(Calculator.divide(15, 5)).toEqual(3);
  });
  test("8 and 5 equals 1.6", () => {
    expect(Calculator.divide(8, 5)).toBeCloseTo(1.6);
  });
  test("12 and 5 equals 2.4", () => {
    expect(Calculator.divide(12, 5)).toBeCloseTo(2.4);
  });
});
//MULTIPLICATION
describe("multiply", () => {
  test("5 and 5 equals 25", () => {
    expect(Calculator.multiply(5, 5)).toEqual(25);
  });
  test(" and 5 equals 0", () => {
    expect(Calculator.multiply(0, 5)).toEqual(0);
  });
  test("2 and 5.5 equals 11", () => {
    expect(Calculator.multiply(2, 5.5)).toEqual(11);
  });
});
