const fs = require("fs");
// 입력 전체를 하나의 공백/줄바꿈 기준으로 토큰화하여 배열로 만듭니다. (가장 빠른 파싱 방법)
const input = fs.readFileSync(0).toString().trim().split(/\s+/);

if (input.length === 0 || input[0] === "") return;

const n = Number(input[0]);
let idx = 1;

// 2차원 배열 입력 받기
const arr = Array.from({ length: n }, () => Array(n));
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        arr[i][j] = Number(input[idx++]);
    }
}

let maxSum = -Infinity;

// row1: 시작하는 행
for (let row1 = 0; row1 < n; row1++) {
    // colSums[c]는 row1부터 row2까지 c번째 열의 원소들을 더한 값을 담을 1차원 배열입니다.
    const colSums = new Array(n).fill(0);
    
    // row2: 끝나는 행 (row1부터 아래로 내려감)
    for (let row2 = row1; row2 < n; row2++) {
        
        let currentSum = 0;
        
        // Kadane 알고리즘을 1차원 colSums 배열에 적용
        for (let col = 0; col < n; col++) {
            // row2가 내려갈 때마다 현재 행의 값을 누적해주면 O(1)에 열의 합이 업데이트됩니다.
            colSums[col] += arr[row2][col];
            
            // Kadane's Algorithm
            if (currentSum > 0) {
                currentSum += colSums[col];
            } else {
                currentSum = colSums[col];
            }
            
            // 최댓값 갱신 (Math.max보다 if문이 더 빠릅니다)
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }
}

console.log(maxSum);