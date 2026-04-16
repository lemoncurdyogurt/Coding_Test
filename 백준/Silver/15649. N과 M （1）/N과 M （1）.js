const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString();

const [N, M] = input.split(" ").map(Number);
// 1부터 N까지의 자연수 중 중복없이 M개 고르기
// 증가하는 순서로 출력

const visitied = Array(N + 1).fill(false);
const str = []; // 만들어진 수열의 길이 저장

function backTracking(curLength) {
  if (curLength === M) {
    console.log(str.join(" "));
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (visitied[i] === false) {
      visitied[i] = true;
      str[curLength] = i;
      backTracking(curLength + 1);
      visitied[i] = false;
    }
  }
}

backTracking(0);
