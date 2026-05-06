// "."은 빈 공간
// "R"은 로봇의 처음 위치
// "D"는 장애물의 위치
// "G"는 목표지점

function solution(board) {
    var answer = 0;
    const cols = board[0].length;
    const rows = board.length;

    let startX = 0;
    let startY = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === "R") {
                startX = r;
                startY = c;
                break;
            }
        }
    }

    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];

    const visited = Array.from(Array(rows), () => Array(cols).fill(false));
    const queue = [[startX, startY, 0]];

    visited[startX][startY] = true;
    // D가 나올 때까지 전진해야함
    while (queue.length > 0) {
        const [curR, curC, dist] = queue.shift();
        if (board[curR][curC] === "G") return dist;

        for (let i = 0; i < 4; i++) {
            let nextR = curR;
            let nextC = curC;

            while (true) {
                const testR = nextR + dy[i];
                const testC = nextC + dx[i];

                if (
                    testR >= 0 &&
                    testR < rows &&
                    testC >= 0 &&
                    testC < cols &&
                    board[testR][testC] !== "D"
                ) {
                    nextR = testR;
                    nextC = testC;
                } else {
                    // 벽이나 'D'를 만나면 그 전 칸(nextR, nextC)에서 멈춤
                    break;
                }
            }

            // 방문하지 않은 '멈춘 위치'라면 큐에 추가
            if (!visited[nextR][nextC]) {
                visited[nextR][nextC] = true;
                queue.push([nextR, nextC, dist + 1]);
            }
        }
    }

    return -1; // 끝내 도달하지 못한 경우
}
