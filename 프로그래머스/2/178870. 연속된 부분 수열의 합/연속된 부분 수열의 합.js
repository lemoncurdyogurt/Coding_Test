function solution(sequence, k) {
    let answer = [];
    let minLength = Infinity;

    let left = 0;
    let right = 0;
    let sum = 0;

    // right가 끝까지 가거나, sum이 k보다 작아서 더 더해야 하는데 더할 게 없을 때까지
    while (right <= sequence.length) {
        if (sum < k) {
            // 합이 작으면 오른쪽 확장 (범위 체크 필수)
            if (right === sequence.length) break;
            sum += sequence[right++];
        } else if (sum > k) {
            // 합이 크면 왼쪽 축소
            sum -= sequence[left++];
        } else {
            // sum === k 인 경우
            let currentLength = (right - 1) - left;
            if (currentLength < minLength) {
                minLength = currentLength;
                answer = [left, right - 1];
            }
            // 현재 k를 찾았어도 "더 짧은" 구간이 뒤에 있을 수 있으므로
            // 왼쪽을 하나 줄여서 다음 탐색을 계속함
            sum -= sequence[left++];
        }
    }

    return answer;
}