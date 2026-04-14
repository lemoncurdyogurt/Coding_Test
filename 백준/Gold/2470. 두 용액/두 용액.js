// 산성은 양수, 알칼리는 음수
// 두 개의 서로 다른 용액 합해서, 특성값이 0에 가까운 혼합 용액 만드는 프로그램

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);

let startIdx = 0;
let endIdx = N - 1;
let minOfSum = Infinity;
let result = [0, 0];

while (startIdx < endIdx) {
  const sum = arr[startIdx] + arr[endIdx];

  // 합의 "절댓값"이 현재 최솟값보다 작으면 정답 업데이트
  if (minOfSum > Math.abs(sum)) {
    minOfSum = Math.abs(sum);
    result = [arr[startIdx], arr[endIdx]];
  }

  if (sum === 0) {
    break;
  } else if (sum > 0) {
    endIdx--;
  } else if (sum < 0) {
    startIdx++;
  }
}

console.log(result[0], result[1]);
