const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const V = Number(input[0]);

const graph = Array.from({ length: V + 1 }, () => []);

for (let i = 1; i <= V; i++) {
  const line = input[i].split(" ").map(Number);

  const u = line[0]; // 실제 노드 번호를 가져옵니다.
  let idx = 1;
  while (true) {
    const v = line[idx++];
    if (v === -1 || v === undefined) break;
    const dist = line[idx++];

    graph[u].push({ to: v, weight: dist });
  }
}

function BFS(startNode, V, graph) {
  let visited = Array(V + 1).fill(false); // 방문 리스트 저장 -1: 미방문, 1: 방문
  let distance = Array(V + 1).fill(0); // 거리 저장
  let queue = [startNode]; // 탐색할 노드들을 담는 바구니(Queue)

  let u = startNode;
  visited[startNode] = true; // 시작 노드에 대해서도 방문 처리

  // 큐에 노드가 들어있는 동안 계속 반복 (더 이상 갈 곳 없으면 자동 종료)
  while (queue.length > 0) {
    let u = queue.shift(); // 현재 노드 꺼내기

    for (const edge of graph[u]) {
      if (!visited[edge.to]) {
        // 미방문 노드라면
        visited[edge.to] = true;
        distance[edge.to] = distance[u] + edge.weight; // 현재 노드 거리 + 간선 무게
        queue.push(edge.to); // 다음 차례를 위해 큐에 넣기
      }
    }
  }
  let maxDist = Math.max(...distance);
  let maxNode = distance.indexOf(maxDist);

  return { node: maxNode, dist: maxDist };
}

const firstNode = BFS(1, V, graph).node;
const treeRadial = BFS(firstNode, V, graph).dist;

console.log(treeRadial);
