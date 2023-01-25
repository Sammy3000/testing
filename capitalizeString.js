const capitalize = (string) => {
  if (string) {
    let capital = string.charAt(0).toUpperCase() + string.slice(1);
    return capital;
  } else {
    return "cannot uppercase an empty string";
  }
};
module.exports = capitalize;
