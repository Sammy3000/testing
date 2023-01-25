const capitalize = require("./capitalizeString");

test("hello to return Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});
test("cannot uppercase an empty string", () => {
  expect(capitalize("")).toBe("cannot uppercase an empty string");
});
