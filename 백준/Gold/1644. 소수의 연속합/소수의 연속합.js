const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString();

const N = Number(input);

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  // 소수N은 제곱수를 기준으로 약수들이 대칭적 구조를 가짐
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const primeArray = [];
// N보다 작은 소수를 담은 배열
for (let i = 2; i <= N; i++) {
  if (isPrime(i)) {
    primeArray.push(i);
  }
}

//console.log(primeArray);

let startIdx = 0;
let endIdx = 0;
let currentSum = 0;
let count = 0;

while (endIdx <= primeArray.length) {
  if (currentSum === N) {
    count++;
    currentSum -= primeArray[startIdx];
    startIdx++;
  } else if (currentSum < N) {
    currentSum += primeArray[endIdx];
    endIdx++;
  } else if (currentSum > N) {
    currentSum -= primeArray[startIdx];
    startIdx++;
  }
}

console.log(count);
