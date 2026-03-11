const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0];
let pArr = []; // 0 보다 큰 양수인 수
let nArr = []; // 0 혹은 음수

for (let i = 0; i < N; i++) {
  if (input[i + 1] > 0) {
    pArr.push(input[i + 1]);
  } else {
    nArr.push(input[i + 1]);
  }
  // 내림차순으로 정렬
  pArr.sort((a, b) => b - a);
  // 오름차순으로 정렬
  nArr.sort((a, b) => a - b);
}
// console.log(pArr);
// console.log(nArr);

/*
1. 양수는 1 이상인 것들 중에서 큰 수끼리 곱하고 더하기
2. 음수가 짝수 개이면 음수 작은 것끼리 곱하고 더하기
3. 음수가 하나 남았고, 0과 함께 있다면 0과 곱하기
4. 0이 없다면, 그냥 묶지 않고 더하기
 */

// 현재 숫자와 다음 숫자가 있고, 둘 다 1보다 클 때 (묶는 게 이득일 때)
let pMaxSum = 0;
for (let i = 0; i < pArr.length; i++) {
  if (i + 1 < pArr.length && pArr[i] > 1 && pArr[i + 1] > 1) {
    pMaxSum += pArr[i] * pArr[i + 1];
    i++;
  } else {
    pMaxSum += Number(pArr[i]);
  }
}

let nMaxSum = 0;
for (let i = 0; i < nArr.length; i++) {
  if (i + 1 < nArr.length) {
    nMaxSum += nArr[i] * nArr[i + 1];
    i++;
  } else {
    nMaxSum += Number(nArr[i]);
  }
}

let maxSum = pMaxSum + nMaxSum;
console.log(maxSum);
