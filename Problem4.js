function checkChar(character) {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < upperCase.length; i++) {
    if (character === upperCase[i]) {
      return `${character} is Upper Case`;
    } else if (character === lowerCase[i]) {
      return `${character} is Lower Case`;
    }
  }
}
console.log(checkChar("n"));
console.log(checkChar("A"));
