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
    if (v === -1 || v === undefined) break; // 안전하게 undefined 체크 추가
    const dist = line[idx++];

    graph[u].push({ to: v, weight: dist }); // i가 아니라 u에 넣어야 함!
  }
}

function bfs(startNode, V, graph) {
  const dist = new Array(V + 1).fill(-1); // 거리를 저장할 배열, 인덱스에 해당 노드 방문여부 체크
  const queue = [];

  queue.push(startNode);
  dist[startNode] = 0;

  let farthestNode = startNode;
  let maxDist = 0;

  let head = 0;
  while (head < queue.length) {
    const u = queue[head++];

    for (const edge of graph[u]) {
      if (dist[edge.to] === -1) {
        // 방문 안 했으면
        dist[edge.to] = dist[u] + edge.weight;
        queue.push(edge.to);

        // 더 먼 노드를 발견하면 갱신
        if (dist[edge.to] > maxDist) {
          maxDist = dist[edge.to];
          farthestNode = edge.to;
        }
      }
    }
  }
  return { node: farthestNode, dist: maxDist };
}

// 1. 임의의 노드(1번)에서 가장 먼 노드를 찾습니다.
const firstResult = bfs(1, V, graph);

// 2. 위에서 찾은 '가장 먼 노드'에서 다시 가장 먼 노드를 찾습니다.
const finalResult = bfs(firstResult.node, V, graph);

// 3. 그것이 바로 트리의 지름입니다.
console.log(finalResult.dist);
