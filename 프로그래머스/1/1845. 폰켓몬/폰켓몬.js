function solution(nums) {
    const canGet = nums.length / 2; // 가져갈 수 있는 폰켓몬의 수

    const phonKetMon_hash = new Map();
    for (const sort of nums) {
        phonKetMon_hash.set(sort, (phonKetMon_hash.get(sort) || 0) + 1);
    }

    // 가져갈 수 있는 폰켓몬 갯수 > 종류: 종류 수
    // 종류 > 가져갈 수 있는 수 : 가져갈 수 있는 수

    var answer = 0;
    if (canGet > phonKetMon_hash.size) {
        answer = phonKetMon_hash.size;
    } else {
        answer = canGet;
    }

    return answer;
}
