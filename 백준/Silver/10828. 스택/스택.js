const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0];

const stackArr = [];
function pushProgram(line) {
  let target = Number(line.split(" ")[1]);
  stackArr.push(target);
}

function popProgram() {
  let target = stackArr.pop();
  console.log(target !== undefined ? target : -1);
}

function sizeProgram() {
  console.log(stackArr.length);
}

function emptyPropgram() {
  console.log(stackArr.length == 0 ? 1 : 0);
}

function topProgram() {
  if (stackArr.length == 0) {
    console.log(-1);
  } else {
    let target = stackArr[stackArr.length - 1];
    console.log(target);
  }
}

for (let i = 1; i <= N; i++) {
  line = input[i];
  command = line.split(" ")[0];
 
  if (command == "push") {
    pushProgram(line);
  } else if (command == "pop") {
    popProgram();
  } else if (command == "size") {
    sizeProgram();
  } else if (command == "empty") {
    emptyPropgram();
  } else if (command == "top") {
    topProgram();
  }
}
