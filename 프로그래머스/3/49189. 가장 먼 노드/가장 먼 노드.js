function solution(n, edge) {
    var answer = 0;

    const adj = Array.from({ length: n + 1 }, () => []); // 인접리스트 생성
    for (const [i, j] of edge) {
        adj[i].push(j);
        adj[j].push(i);
    }

    const dist = Array(n + 1).fill(-1);
    const queue = [1];
    dist[1] = 0;

    // v는 target 간선이 연결된 노드
    while (queue.length > 0) {
        let target = queue.shift();

        for (let v of adj[target]) {
            if (dist[v] === -1) {
                dist[v] = dist[target] + 1;
                queue.push(v);
            }
        }
    }

    const maxDist = Math.max(...dist);
    return dist.filter((d) => d === maxDist).length;
}
