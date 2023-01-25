const stringLength = require("./main");

test("return 5 after passing hello parameter", () => {
  expect(stringLength("hello")).toBe(5);
});
