const fs = require("fs");
const input = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "input.txt",
);

// 같은 열에 2개 이상 배치X
// 같은 행에 2개 이상 배치X
// 같은 대각선 방향에 2개 이상 배치X

N = Number(input);
grid = Array.from({ length: N }, () => Array(N).fill(0));

let cnt = 0;

const col = Array(N).fill(false);
const diag1 = Array(2 * N).fill(false); // row - col + N
const diag2 = Array(2 * N).fill(false); // row + col

function solve(row) {
  // 한 행에 모두 퀸을 배치하면 됨
  if (row === N) {
    cnt += 1;
    return;
  }

  // 현재 행(row)에서 어느 열(col)에 둘 수 있는지 검사
  for (let c = 0; c < N; c++) {
    if (col[c] || diag1[row - c + N] || diag2[row + c]) continue;

    col[c] = true;
    diag1[row - c + N] = true;
    diag2[row + c] = true;

    solve(row + 1);

    // 모두 초기화 해줘야함....
    col[c] = false;
    diag1[row - c + N] = false;
    diag2[row + c] = false;
  }
}

solve(0);
console.log(cnt);
