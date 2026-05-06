/*
    X는 바다
    숫자는 무인도
    무인도의 값을 합해서: 머물수 있는 최대 숫자
    그 중 최대를 찾아라
    무인도 없으면 -1
*/

function solution(maps) {
    var answer = [];
    const rows = maps.length;
    const cols = maps[0].length;

    const visited = Array.from(Array(rows), () => Array(cols).fill(false));

    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];

    for (let j = 0; j < cols; j++) {
        for (let i = 0; i < rows; i++) {
            if (maps[i][j] !== "X" && !visited[i][j]) {
                let sum = 0;
                let queue = [[i, j]];
                visited[i][j] = true;

                while (queue.length > 0) {
                    const [curR, curC] = queue.shift();
                    sum += Number(maps[curR][curC]);

                    for (let i = 0; i < 4; i++) {
                        const nextR = curR + dx[i];
                        const nextC = curC + dy[i];

                        if (
                            nextR >= 0 &&
                            nextR < rows &&
                            nextC >= 0 &&
                            nextC < cols &&
                            maps[nextR][nextC] !== "X" &&
                            !visited[nextR][nextC]
                        ) {
                            visited[nextR][nextC] = true;
                            queue.push([nextR, nextC]);
                        }
                    }
                }
                answer.push(sum);
            }
        }
    }

    if (answer.length === 0) return [-1];
    return answer.sort((a, b) => a - b);
}
