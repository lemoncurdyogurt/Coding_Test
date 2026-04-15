const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim();

// ㅋㅋ루ㅋㅋ 문자열 조건
// 1. R로만 이루어진 문자열
// 2. ㅋㅋ루ㅋㅋ 문자열 양끝에 K 하나씩 붙인 문자열

// 주어진 문자열의 부분 수열 중 가장 긴 ㅋㅋ루ㅋㅋ 문자열의 길이
// 부분 수열이 없다면 0 출력

const str = input.split("");
//console.log(str);

const RidxList = [];
const prefixK = Array(str.length).fill(0);

let idx = 0;
let KNum = 0; // K의 갯수

for (let char of str) {
  if (char === "R") {
    RidxList.push(idx);
  }
  if (char === "K") {
    KNum++;
  }
  prefixK[idx] = KNum;
  idx++;
}

// console.log(RidxList);
// console.log(prefixK);
// 왼쪽K갯수 prefixK[RidxList[i]]
// 오른쪽K갯수 전체K개수 - prefixK[RidxList[i]]

let maxLength = 0;
let leftIdx = 0;
let rightIdx = RidxList.length - 1;

while (leftIdx <= rightIdx) {
  let leftR = RidxList[leftIdx]; // 가장 왼쪽 R의 인덱스
  let rightR = RidxList[rightIdx]; // 가장 오른쪽 R의 인덱스

  let numOfLeftK = prefixK[leftR]; // 왼쪽 R의 갯수
  let numOfRightK = KNum - prefixK[rightR]; // 오른쪽 R의 갯수
  lenghtOfStr = rightIdx - leftIdx + 1 + 2 * Math.min(numOfLeftK, numOfRightK);
  if (maxLength < lenghtOfStr) {
    maxLength = lenghtOfStr;
  }

  if (numOfLeftK <= numOfRightK) {
    leftIdx++;
  } else if (numOfLeftK > numOfRightK) {
    rightIdx--;
  }
}

console.log(maxLength);
