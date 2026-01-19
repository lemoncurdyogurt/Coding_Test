// https://www.acmicpc.net/problem/3190

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]); // 배열의 크기
const K = Number(input[idx++]); // 사과의 갯수

// 0으로 채워진 N*N배열
const arr = Array.from(Array(N), () => new Array(N).fill(0));

// 사과 위치 배열로 입력 받기
for (let k = 0; k < K; k++) {
  const x = Number(input[idx++]);
  const y = Number(input[idx++]);
  // apples.push([x, y]);
  arr[x - 1][y - 1] = 1; // 사과 위치 1로 바꾸기
}

// 0: 오른쪽 , 1: 아래, 2: 왼쪽, 3: 위
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let dir = 0; // 초기방향은 오른쪽

// L: 반시계, D: 시계방향
// 반시계: 오->위->왼->아->오 0 -> 3 -> 2 -> 1 -> 0
// 시계: 오->아->왼->위 0 -> 1 -> 2 -> 3

function changeDir(C) {
  if (C === "L") {
    dir = (dir + 3) % 4;
  } else if (C === "D") {
    dir = (dir + 1) % 4;
  }
}

// 뱀의 움직임 횟수 입력받기
const L = Number(input[idx++]);
const commands = [];
for (let l = 0; l < L; l++) {
  let X = Number(input[idx++]);
  let C = input[idx++];
  commands.push([X, C]);
}

let moveIdx = 0;
let time = 0;

//뱀의 초기 위치값
let s_x = 0;
let s_y = 0;
arr[s_x][s_y] = 2;

// 뱀의 좌표들 저장
const snake = [[0, 0]];

while (true) {
  time++;

  const nx = s_x + dx[dir];
  const ny = s_y + dy[dir];

  if (nx < 0 || ny < 0 || nx >= N || ny >= N) {
    break;
  }

  if (arr[nx][ny] === 2) {
    break;
  }
  snake.push([nx, ny]);

  if (arr[nx][ny] === 1) {
    // 사과 먹음 → 꼬리 유지
    arr[nx][ny] = 2;
  } else {
    // 사과 없음 → 꼬리 제거
    const [tx, ty] = snake.shift();
    arr[tx][ty] = 0;
    arr[nx][ny] = 2;
  }

  s_x = nx;
  s_y = ny;

  if (moveIdx < L && time === commands[moveIdx][0]) {
    changeDir(commands[moveIdx][1]);
    moveIdx++;
  }
}

console.log(time);
