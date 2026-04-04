const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N, H] = input[0].split(" ").map(Number);

const tomatos = [];
let currentLine = 1;
for (let h = 0; h < H; h++) {
  let board = [];
  for (let n = 0; n < N; n++) {
    const rows = input[currentLine++].split(" ").map(Number);
    board.push(rows);
  }
  tomatos.push(board);
}

//console.log(tomatos);

const dx = [0, 0, 0, 0, 1, -1];
const dy = [0, 0, 1, -1, 0, 0];
const dh = [1, -1, 0, 0, 0, 0];

// tomatos[h][y][x]
// 탐색한 인근 토마토에 대해서 0인경우 1로 변경

queue = [];

function makeTomatoGrow(curX, curY, curH) {
  for (let i = 0; i < 6; i++) {
    const nextX = curX + dx[i];
    const nextY = curY + dy[i];
    const nextH = curH + dh[i];

    if (
      nextX >= 0 &&
      nextX < M &&
      nextY >= 0 &&
      nextY < N &&
      nextH >= 0 &&
      nextH < H
    ) {
      if (tomatos[nextH][nextY][nextX] === 0) {
        tomatos[nextH][nextY][nextX] = tomatos[curH][curY][curX] + 1;
        queue.push([nextX, nextY, nextH]);
      }
    }
  }
}

for (let h = 0; h < H; h++) {
  for (let n = 0; n < N; n++) {
    for (let m = 0; m < M; m++) {
      if (tomatos[h][n][m] === 1) {
        queue.push([m, n, h]);
      }
    }
  }
}

let head = 0;
while (queue.length > head) {
  const [x, y, z] = queue[head++]; // shift() 대신 인덱스로 접근
  makeTomatoGrow(x, y, z);
}

let result = 0;

for (let h = 0; h < H; h++) {
  for (let n = 0; n < N; n++) {
    for (let m = 0; m < M; m++) {
      if (tomatos[h][n][m] === 0) {
        console.log(-1);
        process.exit();
      }
      if (tomatos[h][n][m] > result) {
        result = tomatos[h][n][m];
      }
    }
  }
}

console.log(result - 1);
