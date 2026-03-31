const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const relationships = Array.from({ length: N }, () => []);

for (let n = 1; n <= M; n++) {
  let [a, b] = input[n].split(" ").map(Number);
  relationships[a].push(b);
  relationships[b].push(a);
}

// N명의 사람과 그들의 친구 관계(무방향 그래프)가 주어졌을 때,
// 4개의 다리(5명)로 연결된 연속적인 친구 관계(A-B-C-D-E)가 존재하는지 찾는 그래프 탐색 문제
//console.log(relationships);

let visited = Array(N).fill(false);
let found = false;

function DFS(index, depth) {
  if (depth === 4) {
    found = true;
    return;
  }

  visited[index] = true;
  for (const neighbor of relationships[index]) {
    if (!visited[neighbor]) {
      DFS(neighbor, depth + 1);
      if (found) return; // 정답을 찾았다면 더 이상의 탐색 중단
    }
  }

  visited[index] = false; // 백트래킹: 다른 경로를 위해 방문 표시 해제
  return 0;
}

// 어떤 사람이 출발 점인지 모르니, 밖에서 모든 사람을 한 번씩 출발시켜야함
for (let i = 0; i < N; i++) {
  DFS(i, 0);
  if (found) break;
}

console.log(found ? 1 : 0);
