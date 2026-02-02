"use restrict";
const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");
//input에 각 줄이 배열 자료형으로 담기므로 각 줄에 접근하려면 인덱싱으로 접근

const [N, M] = input[0].split(" ").map(Number);
const maze = input.slice(1).map((line) => line.split("").map(Number));

//오, 아, 왼, 위
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

cnt = 0;

function bfs(startX, startY) {
  // queue = [[0, 0]] (시작 좌표 삽입)
  const queue = [[startX, startY]];
  // queue가 빌 때까지 while문 돌리기
  while (queue.length > 0) {
    // 큐에서 하나를 꺼내(shift) 사방을 탐색하고, 갈 수 있는 곳을 다시 큐에 넣습니다.
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      // 1. maze범위에 있고
      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        // 2. 갈 수 있는 길(1)인 경우만 탐색
        if (maze[nx][ny] === 1) {
          // 3. 현재까지의 거리 + 1을 다음 칸에 저장
          maze[nx][ny] = maze[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  } // 목적지 좌표의 값을 반환
  return maze[N - 1][M - 1];
}

console.log(bfs(0, 0));
