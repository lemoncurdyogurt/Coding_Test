const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const queue = [];
const result = [];

let firstIdx = 0;

function pushProgram(target) {
  queue.push(target);
}

function popProgram() {
  if (queue.length - firstIdx === 0) {
    result.push(-1);
  } else {
    let firstNum = queue[firstIdx];
    result.push(firstNum);
    firstIdx++;
  }
}

function sizeProgram() {
  result.push(queue.length - firstIdx);
}

function emptyProgram() {
  if (queue.length - firstIdx === 0) {
    result.push(1);
  } else {
    result.push(0);
  }
}

function frontProgram() {
  if (queue.length - firstIdx === 0) {
    result.push(-1);
  } else {
    result.push(queue[firstIdx]);
  }
}

function backProgram() {
  if (queue.length - firstIdx === 0) {
    result.push(-1);
  } else {
    result.push(queue[queue.length - 1]);
  }
}

for (let i = 1; i <= N; i++) {
  let line = input[i].split(" ");
  let command = line[0];
  if (command === "push") {
    let target = line[1];
    pushProgram(target);
  } else if (command === "pop") {
    popProgram();
  } else if (command === "size") {
    sizeProgram();
  } else if (command === "empty") {
    emptyProgram();
  } else if (command === "front") {
    frontProgram();
  } else if (command === "back") {
    backProgram();
  }
}

console.log(result.join("\n"));
