const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

function isBalanceSentence(line) {
  const stack = [];
  for (const char of line) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length > 0 && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        return "no";
      }
    } else if (char === "]") {
      if (stack.length > 0 && stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        return "no";
      }
    }
  }
  return stack.length === 0 ? "yes" : "no";
}

for (let str of input) {
  if (str === ".") break;
  console.log(isBalanceSentence(str));
}
