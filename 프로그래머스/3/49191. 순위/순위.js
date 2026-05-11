function solution(n, results) {
    var answer = 0;
    const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    for (const [A, B] of results) {
        graph[A][B] = 1;
    }

    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (graph[i][k] && graph[k][j]) {
                    graph[i][j] = 1;
                }
            }
        }
    }
    // console.log(graph);

    for (let i = 1; i <= n; i++) {
        let cnt = 0;
        for (let j = 1; j <= n; j++) {
            if (graph[j][i] === 1 || graph[i][j] === 1) cnt++;
        }
        if (cnt === n - 1) {
            answer++;
        }
    }

    return answer;
}
