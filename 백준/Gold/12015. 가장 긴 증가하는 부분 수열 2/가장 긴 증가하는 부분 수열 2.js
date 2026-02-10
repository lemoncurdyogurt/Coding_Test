const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input1.txt")
  .toString()
  .split("\n");

const N = Number(input[0]);
const Arr = input[1].split(" ").map(Number);
let LongestArr = [];

// 배열에 A첫번쨰 만들고 -> last보다 pnt 작거나 같으면 이분탐색
function BinarySearch(target) {
  let left = 0;
  let right = LongestArr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (LongestArr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

for (let i = 0; i < N; i++) {
  let pnt = Arr[i];
  let idx = BinarySearch(pnt);
  // 최장거리배열에 최근에 넣은 값이 지금 Arr에서 보고 있는 값보다 작으면 걍 push
  // 작거나 같다면 이분탐색으로 LongestArr에서의 본인 위치 찾고, current idx 업데이트
  if (idx < LongestArr.length) {
    LongestArr[idx] = pnt;
  } else {
    LongestArr.push(pnt);
  }
}

console.log(LongestArr.length);
