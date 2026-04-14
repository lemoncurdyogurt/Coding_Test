const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const infoArr = Array.from({ length: N }, () => [0, 0]);


for (let n = 1; n <= N; n++) {
  let line = input[n];
  let [start, end] = line.split(" ").map(Number);
  infoArr[n - 1] = [start, end];
}

infoArr.sort((a, b) => {
  // 1순위: 끝나는 시간 기준
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  }
  // 2순위: 끝나는 시간이 같다면 시작 시간 기준
  return a[0] - b[0];
});

// console.log(infoArr);

let count = 0;
let endTime = 0;

for (let n = 0; n < N; n++) {
  const [start, end] = infoArr[n];
  if (start >= endTime) {
    count++;
    endTime = end;
  }
}

console.log(count);
