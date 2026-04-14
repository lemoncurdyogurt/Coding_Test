const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

// R: 배열에 있는 수 뒤집기
// D: 첫번 째 수 버리기, 빈 배열의 경우 에러

const T = input[0]; // 테스트 케이스의 개수

function AC(line, arr, n) {
  let command = line.split("");
  let startIdx = 0;
  let endIdx = n - 1;
  let isReverse = false;

  // 뒤집혔다면 endIdx있는 곳이 앞쪽 -> D: endIdx--
  for (let char of command) {
    if (char === "R") {
      isReverse = !isReverse;
    } else if (char === "D") {
      if (startIdx > endIdx) {
        return "error";
      }

      if (isReverse) {
        endIdx--;
      } else {
        startIdx++;
      }
    }
  }

  let result = [];
  if (isReverse) {
    for (let i = endIdx; i >= startIdx; i--) {
      result.push(arr[i]);
    }
  } else {
    for (let i = startIdx; i <= endIdx; i++) {
      result.push(arr[i]);
    }
  }

  return "[" + result.join(",") + "]";
}

for (let i = 0; i < T; i++) {
  let p = input[i * 3 + 1];
  let n = Number(input[i * 3 + 2]);
  let arr = JSON.parse(input[i * 3 + 3]);
  // let arr = input[i * 3 + 3].slice(1, -1).split(",").map(Number);
  // console.log(arr);
  console.log(AC(p, arr, n));
}
