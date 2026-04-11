const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numList = input[1].split(" ").map(Number);

// 인덱스가 0~N까지인 누적합 배열
const sumList = Array(N + 1).fill(0);
let tmp = 0;

for (let i = 0; i < N; i++) {
  tmp += numList[i];
  sumList[i + 1] = tmp;
}

// console.log(sumList);

for (let i = 2; i < M + 2; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  let answer = sumList[end] - sumList[start - 1];
  console.log(answer);
}
