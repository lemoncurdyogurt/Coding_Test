const fs = require("fs");
const { start } = require("repl");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, S] = input[0].split(" ").map(Number);
const numList = input[1].split(" ").map(Number);

const prefixSum = Array(N + 1).fill(0);
let temp = 0;
for (let i = 0; i < N; i++) {
  temp += numList[i];
  prefixSum[i + 1] = temp;
}

let minLength = Infinity;
let startIdx = 0;
let endIdx = 0;
let currentSum = 0;

while (endIdx <= N) {
  if (currentSum >= S) {
    minLength = Math.min(minLength, endIdx - startIdx);
    currentSum -= numList[startIdx];
    startIdx++;
  } else {
    if (endIdx == N) break;
    currentSum += numList[endIdx];
    endIdx++;
  }
}

console.log(minLength === Infinity ? 0 : minLength);

//console.log(prefixSum);



