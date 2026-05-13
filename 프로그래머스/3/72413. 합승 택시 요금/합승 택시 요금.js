function solution(n, s, a, b, fares) {
    var answer = Infinity;

    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [a, b, fare] of fares) {
        graph[a].push([b, fare]);
        graph[b].push([a, fare]);
    }
    // S -> A 와 S -> B의 요금이 최저인 거리
    // 공통 구간이 있는 경우 해당 구간은 나누기 2

    // 특정 출발점에서 모든 연결된 노드에 대해서 최저 비용 구하기
    function dist(start) {
        const dist = new Array(n + 1).fill(Infinity);
        dist[start] = 0;
        const queue = [[start, 0]];

        while (queue.length > 0) {
            queue.sort((a, b) => a[1] - b[1]);
            const [curr, currCost] = queue.shift();

            if (dist[curr] < currCost) continue;

            for (const [next, cost] of graph[curr]) {
                if (dist[next] > currCost + cost) {
                    dist[next] = currCost + cost;
                    queue.push([next, dist[next]]);
                }
            }
        }
        return dist;
    }

    // console.log(graph);

    const distFromA = dist(a);
    const distFromB = dist(b);
    const distFromS = dist(s);

    for (let i = 1; i <= n; i++) {
        const total = distFromA[i] + distFromB[i] + distFromS[i];
        answer = Math.min(answer, total);
    }
    return answer;
}
