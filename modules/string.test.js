const stringLength = require("./stringLength");

test("return 5 after passing hello parameter", () => {
  expect(stringLength("hello")).toBe(5);
});
test("return error after passing char greater than 10", () => {
  expect(stringLength("hellomydearesteemed")).toBe(
    "requirements for value input are not met"
  );
});
test("return error after passing char less than 1", () => {
  expect(stringLength("")).toBe("requirements for value input are not met");
});
