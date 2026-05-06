function solution(maps) {
    var answer = 0;

    // 동, 남, 서, 북
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    // 1인 경우에 이동가능, 0은 벽임 이동불가
    // maps[cols][rows]가 도착 지점
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = Array.from(Array(rows), () => Array(cols).fill(false));

    const queue = [[0, 0, 1]];
    visited[0][0] = true;

    while (queue.length > 0) {
        const [currX, currY, count] = queue.shift();

        if (currY === rows - 1 && currX === cols - 1) {
            return count;
        }

        for (let i = 0; i < 4; i++) {
            const nextX = currX + dx[i];
            const nextY = currY + dy[i];

            if (
                nextX >= 0 &&
                nextX < cols &&
                nextY >= 0 &&
                nextY < rows &&
                maps[nextY][nextX] === 1 &&
                !visited[nextY][nextX]
            ) {
                visited[nextY][nextX] = true;
                queue.push([nextX, nextY, count + 1]);
            }
        }
    }
    return -1;
}
