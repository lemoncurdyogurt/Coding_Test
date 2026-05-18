function solution(n, times) {
    // 1. 오름차순 정렬 (가장 빠른/느린 사람 확인 용도)
    times.sort((a, b) => a - b);

    // 2. BigInt 적용 (n과 times 요소들을 BigInt로 변환)
    let left = 1n;
    let right = BigInt(times[times.length - 1]) * BigInt(n);
    let answer = right;

    while (left <= right) {
        // BigInt는 나눗셈 시 자동으로 소수점이 버려집니다 (Math.floor 불필요)
        let mid = (left + right) / 2n;
        let count = 0n;

        // 3. mid 시간 동안 심사 가능한 총 인원 계산
        for (let time of times) {
            count += mid / BigInt(time);
            if (count >= BigInt(n)) break; // 최적화
        }

        if (count >= BigInt(n)) {
            // n명 이상 가능하면 시간을 더 줄여본다
            answer = mid;
            right = mid - 1n;
        } else {
            // n명 미만이면 시간을 늘려야 한다
            left = mid + 1n;
        }
    }

    // 결과값은 다시 Number로 변환하여 리턴
    return Number(answer);
}