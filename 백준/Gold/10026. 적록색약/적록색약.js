const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const grid = input.slice(1).map((line) => line.split(""));

const colorBlindGrid = grid.map((row) =>
  row.map((color) => (color === "R" ? "G" : color)),
);

// console.log(grid);
// console.log(colorBlindGrid);

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let count = 0;
let sameGRCnt = 0;

// 같은 구역 탐색 탐색 끝난경우 count수 올리기
function bfs(startX, startY, letter, targetGrid) {
  const queue = [[startX, startY]];
  targetGrid[startX][startY] = "0";
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];
      // grid내부에 같은 letter가 있다면 방문 처리 후 queue에 넣기
      if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
        if (targetGrid[nx][ny] === letter) {
          targetGrid[nx][ny] = "0";
          queue.push([nx, ny]);
        }
      }
    }
  }
}

for (let j = 0; j < N; j++) {
  for (let i = 0; i < N; i++) {
    if (grid[i][j] !== "0") {
      bfs(i, j, grid[i][j], grid);
      count++;
    }
  }
}

for (let j = 0; j < N; j++) {
  for (let i = 0; i < N; i++) {
    if (colorBlindGrid[i][j] !== "0") {
      bfs(i, j, colorBlindGrid[i][j], colorBlindGrid);
      sameGRCnt++;
    }
  }
}

console.log(`${count} ${sameGRCnt}`);
