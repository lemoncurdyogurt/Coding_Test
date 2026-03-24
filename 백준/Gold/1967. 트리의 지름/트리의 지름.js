const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]); // 노드의 갯수

let graph = Array.from({ length: N + 1 }, () => []);
for (let n = 1; n < N; n++) {
  const line = input[n].split(" ").map(Number);
  if (line.length < 3) continue;
  const [u, v, weight] = line;

  // 양노드에 간선 저장
  graph[u].push({ to: v, weight: weight });
  graph[v].push({ to: u, weight: weight });
}

function BFS(startNode, N, graph) {
  let visited = Array(N + 1).fill(false);
  let distance = Array(N + 1).fill(0);

  let queue = [startNode];
  visited[startNode] = true;
  
  let maxDistance = 0;
  let maxNode = 0;

  while (queue.length > 0) {
    let u = queue.shift();

    for (const edge of graph[u]) {
      if (!visited[edge.to]) {
        visited[edge.to] = true;
        distance[edge.to] = edge.weight + distance[u];
        queue.push(edge.to);
      }
      if (distance[edge.to] > maxDistance) {
        maxDistance = distance[edge.to];
        maxNode = edge.to;
      }
    }
  }
  return { maxNode, maxDistance };
}

firstReturn = BFS(1, N, graph).maxNode;
treeRadial = BFS(firstReturn, N, graph).maxDistance;

console.log(treeRadial);
