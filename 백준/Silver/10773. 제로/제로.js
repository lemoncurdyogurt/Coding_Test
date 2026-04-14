const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const K = input[0];
const stackArr = [];
let sum = 0;
for (let i = 1; i <= K; i++) {
  let n = Number(input[i]);
  if (n === 0) {
    let target = stackArr.pop();
    sum -= target;
  } else {
    stackArr.push(n);
    sum += n;
  }
}

console.log(sum);
