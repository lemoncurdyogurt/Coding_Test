const fs = require("fs");
const input = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "input.txt",
);

N = Number(input);

// shift의 경우 시간 복잡도가 높다
// startIdx만 이동시키고, 제일 아래로 넣는거는 push로 처리하기
// 홀수 번쨰는 버리기, 짝수번째는 제일 아래로 넣기

const arr = [];
let startIdx = 0;
let itr = 1;

for (let i = 1; i <= N; i++) {
  arr.push(i);
}

while (arr.length - startIdx > 1) {
  if (itr % 2 === 0) {
    arr.push(arr[startIdx]);
    startIdx++;
  } else {
    startIdx++;
  }
  itr++;
}
console.log(arr[arr.length - 1]);
