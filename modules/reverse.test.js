const reverseString = require("./reverse");

test("eat should be tae", () => {
  expect(reverseString("eat")).toBe("tae");
});

test("Empty string should return Error", () => {
  expect(reverseString("")).toBe("cannot reverse empty string");
});
