function reverseString(string) {
  if (string) {
    return string.split("").reverse().join("");
  } else {
    return "cannot reverse empty string";
  }
}
module.exports = reverseString;
