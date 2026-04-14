const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const targetSequence = input.slice(1).map(Number);

const stack = [];
const result = [];

let currentNum = 1;
let possible = true;

for (let i = 0; i < n; i++) {
  const target = targetSequence[i];
  while (currentNum <= target) {
    stack.push(currentNum);
    result.push("+");
    currentNum++;
  }
  if (stack[stack.length - 1] === target) {
    stack.pop();
    result.push("-");
  } else {
    possible = false;
    break;
  }
}

if (possible != true) {
  console.log("NO");
} else {
  console.log(result.join("\n"));
}
