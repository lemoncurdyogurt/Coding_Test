const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0];

const maze = input.slice(1).map((line) => line.split("").map(Number));

let arr = []; // 단지의 수 저장하는 배열

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function bfs(startX, startY) {
  const queue = [[startX, startY]];
  maze[startX][startY] = 0; // 시작하자마자 0으로 만들어 중복 방지
  let buildingNum = 1; // 함수 안에서 선언하여 매번 1부터 시작
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
        if (maze[nx][ny] === 1) {
          maze[nx][ny] = 0; // 방문 처리
          queue.push([nx, ny]);
          buildingNum++; // 단지수 카운팅
        }
      }
    }
  }
  return buildingNum;
}

for (let j = 0; j < N; j++) {
  for (let i = 0; i < N; i++) {
    if (maze[i][j] === 1) {
      arr.push(bfs(i, j));
    }
  }
}

console.log(arr.length);
console.log(arr.sort((x, y) => x - y).join("\n"));
