function replaceSpace(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newStr += "-";
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

console.log(replaceSpace("N I K H I L"));
