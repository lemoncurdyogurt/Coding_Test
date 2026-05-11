function solution(n, computers) {
    var answer = 0;

    const nearNode = Array.from({ length: n }, () => []);
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            if (computers[i][j] === 1 && i !== j) {
                nearNode[i].push(j);
            }
        }
    }
    // console.log(nearNode);

    const visited = Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        // 이미 방문한 노드라면 이미 어떤 네트워크에 속해있다는 뜻
        if (visited[i]) continue;
        answer++;

        const queue = [i];
        visited[i] = true;
        
        while (queue.length > 0) {
            const curr = queue.shift();
            for (const n of nearNode[curr]) {
                if (!visited[n]) {
                    // 인접한 노드를 방문하지 않으면 큐에 저장
                    visited[n] = true;
                    queue.push(n);
                }
            }
        }
    }

    return answer;
}
