// AC
"use strict";
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

let idx = 0;
const T = Number(input[idx++]); // 테스트 케이스 갯수
for (let t = 0; t < T; t++) {
  const P = input[idx++]; // 수행할 함수
  const n = Number(input[idx++]); // 배열의 수의 갯수
  let arr = [];
  arr = JSON.parse(input[idx++]);
  AC(n, P, arr);
}

function AC(n, P, arr) {
  let isReverse = false;
  let left = 0;
  let right = n - 1;

  for (const cmd of P) {
    if (cmd === "R") {
      isReverse = !isReverse;
    } else if (cmd === "D") {
      if (arr.length === 0 || left > right) {
        console.log("error");
        return;
      } else if (isReverse === false) {
        left++;
      } else if (isReverse === true) {
        right--;
      }
    }
  }
  
  if (left === right) {
    arr = arr.slice(left);
  } else {
    arr = arr.slice(left, right + 1);
    if (isReverse) {
      arr.reverse();
    }
  }
  console.log("[" + arr.join(",") + "]");
}
