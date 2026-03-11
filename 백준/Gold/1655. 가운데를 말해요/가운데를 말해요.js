const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let result = "";
let arr = [];

for (let i = 0; i < N; i++) {
  const num = Number(input[i + 1]);
  // 매번 정렬하는 대신 정렬된 위치에 삽입하기
  // 이진탐색을 이용해 삽입 위치를 찾기
  let low = 0;
  let high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < num) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  arr.splice(low, 0, num);
  let mid_idx = Math.floor((arr.length - 1) / 2);
  result += arr[mid_idx] + "\n";
}

console.log(result);
