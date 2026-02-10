const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const N = Number(input[0]);
const NArr = input[1].split(" ").map(Number);
const M = Number(input[2]);
const MArr = input[3].split(" ").map(Number);

// 이분 탐색을 위한 정렬
NArr.sort((a, b) => a - b);

function BinarySearch(target) {
  let left = 0;
  let right = NArr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (NArr[mid] === target) return true;
    else if (NArr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

for (let m = 0; m < M; m++) {
  if (BinarySearch(MArr[m])) {
    console.log(1);
  } else console.log(0);
}
