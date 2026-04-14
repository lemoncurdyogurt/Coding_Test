const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const posList = input[1].split(" ").map(Number);

const dequeue = Array.from({ length: N }, (_, i) => i + 1);
let cnt = 0;

function firstIdxOut() {
  dequeue.shift();
}

function moveLeft() {
  let firstNum = dequeue.shift();
  dequeue.push(firstNum);
  cnt++;
}

function moveRight() {
  let lastNum = dequeue.pop();
  dequeue.unshift(lastNum);
  cnt++;
}

for (let m = 0; m < M; m++) {
  let target = posList[m];
  let targetIdx = dequeue.indexOf(target);
  let halfIdx = dequeue.length / 2;

  while (dequeue[0] !== target) {
    if (targetIdx <= halfIdx) {
      moveLeft();
    } else {
      moveRight();
    }
  }

  firstIdxOut();
}

console.log(cnt);
