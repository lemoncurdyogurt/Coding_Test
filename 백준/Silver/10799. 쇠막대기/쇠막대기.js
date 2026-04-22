const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString();

let cutCnt = 0;
let inputArr = input.split("");
let stack = [];

//console.log(inputArr);

for (let i = 0; i < inputArr.length; i++) {
  if (inputArr[i] === "(") {
    stack.push(inputArr[i]);
  } else if (inputArr[i] === ")") {
    stack.pop();
    if (inputArr[i - 1] === "(") {
      // 레이저인 경우
      cutCnt += stack.length;
    } else if (inputArr[i - 1] === ")") {
      // 쇠막대기인 경우
      cutCnt++;
    }
  }
}

console.log(cutCnt);
