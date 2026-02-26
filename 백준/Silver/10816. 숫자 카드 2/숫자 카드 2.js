const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]); // 상근이가 가지고 있는 숫자 카드의 개수
const cards = input[1].split(" ").map(Number); // 숫자 카드에 적혀있는 정수
const M = Number(input[2]);
const targets = input[3].split(" ").map(Number); // 상근이가 몇 개 가지고 있는 숫자 카드인지 구해야 할 M개의 정수

// 상근이의 숫자 카드 정렬하기
cards.sort((a, b) => a - b);

// lowerBound는 찾고자 하는 값 이상의 숫자가 처음 나타나는 위치
function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

// upperBound는 찾고자 하는 값을 초과하는 숫자가 처음 나타나는 위치
function upperBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

const result = [];

for (let n = 0; n < M; n++) {
  const count = upperBound(cards, targets[n]) - lowerBound(cards, targets[n]);
  result.push(count);
}
console.log(result.join(" "));
