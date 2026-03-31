/*
 * 서로 다른 L개의 알파벳 소문자
 * 최소 한 개의 모음
 * 최소 두 개의 자음
 * 알파벳이 증가하는 순서로 배열
 * 암호로 사용했을 법한 문자의 종류 C개
 */

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");
const [L, C] = input[0].split(" ").map(Number);
const chars = input[1].split(" ").sort();
const isVowel = (char) =>
  ["a", "e", "i", "o", "u"].includes(char.toLowerCase());

const vowelFounds = Array(C).fill(false); // 모음인 경우 true의 값을 갖는 배열

for (let i = 0; i < C; i++) {
  if (isVowel(chars[i])) {
    vowelFounds[i] = true;
  }
}

// result에 모음(true)이 1개 이상, 자음(false)이 2개 이상

const result = [];
const temp = [];

// index: 탐색 위치, depth: 현재 뽑은 개수
// vCnt: 현재까지 뽑은 모음 개수, nVCnt: 현재까지 뽑은 자음 개수
function findPassword(index, depth, vCnt, nVCnt) {
  if (depth === L) {
    if (vCnt >= 1 && nVCnt >= 2) {
      result.push(temp.join(""));
    }
    return;
  }

  for (let i = index; i < C; i++) {
    temp.push(chars[i]);

    // 선택한 문자가 모음인지 자음에 따라 카운트를 늘려서 재귀 호출
    // 내부에서 재귀로 탐색위치를 증가시키면서 chars 탐색
    if (vowelFounds[i]) {
      findPassword(i + 1, depth + 1, vCnt + 1, nVCnt);
    } else {
      findPassword(i + 1, depth + 1, vCnt, nVCnt + 1);
    }

    // 앞에 if문이 있어서 depth === L 조건만족 시, return되므로 함수 호출했던 for문의 위치로 돌아감
    temp.pop();
  }
}

findPassword(0, 0, 0, 0);
console.log(result.join("\n"));
