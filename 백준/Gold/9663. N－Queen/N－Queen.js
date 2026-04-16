const fs = require("fs");
const { debugPort } = require("process");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString();

// 같은 열에 2개 이상 배치X
// 같은 행에 2개 이상 배치X
// 같은 대각선 방향에 2개 이상 배치X

const N = Number(input);
//const grid = Array.from({ length: N }, () => Array(N).fill(false));

const visitedCol = Array(N).fill(false);

/* (c, r)
 * (0,0) (0,1) (0,2) (0,3)
 * (1,0) (1,1) (1,2) (1,3)
 * (2,0) (2,1) (2,2) (2,3)
 * (3,0) (3,1) (3,2) (3,3)
 */

const visitedDiag1 = Array(2 * N).fill(false); // \방향 대각선: c - r + N 값이 동일
const visitedDiag2 = Array(2 * N).fill(false); // /방향 대각선: c+r 값이 동일

let cnt = 0;

// depth가 col, i가 row
function backtracking(depth) {
  if (depth === N) {
    cnt++;
    return;
  }

  // N줄에 1개씩 배치하는데, 열로 보았을 때 방문 되지 않은 곳만 두기
  // 대각선도이제 따져봐야함....
  for (let i = 0; i < N; i++) {
    if (
      !visitedCol[i] &&
      !visitedDiag1[depth - i + N] &&
      !visitedDiag2[depth + i]
    ) {
      visitedCol[i] = true;
      visitedDiag1[depth - i + N] = true;
      visitedDiag2[depth + i] = true;

      backtracking(depth + 1);

      visitedCol[i] = false;
      visitedDiag1[depth - i + N] = false;
      visitedDiag2[depth + i] = false;
    }
  }
}

backtracking(0);
console.log(cnt);
