function stringLength(string) {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  } else {
    return "requirements for value input are not met";
  }
}
module.exports = stringLength;
