// 두 집합의 교집합 크기를 두집합의 합집합 크기로 나눈 것
// 원소 중복의 경우 교집합은 min, 합집합은 max

function solution(str1, str2) {
    const str1_hash = new Map();
    const str2_hash = new Map();

    for (let i = 0; i < str1.length - 1; i++) {
        let pair = str1.substr(i, 2);
        if (/^[a-zA-Z]+$/.test(pair)) {
            pair = pair.toUpperCase();
            str1_hash.set(pair, (str1_hash.get(pair) || 0) + 1);
        }
    }

    for (let i = 0; i < str2.length - 1; i++) {
        let pair = str2.substr(i, 2);
        if (/^[a-zA-Z]+$/.test(pair)) {
            pair = pair.toUpperCase();
            str2_hash.set(pair, (str2_hash.get(pair) || 0) + 1);
        }
    }

    //console.log(str1_hash, str2_hash);

    let intersection = 0;
    let union = 0;

    // 중복없는 키들 만드는 법
    const allKeys = new Set([...str1_hash.keys(), ...str2_hash.keys()]);

    for (const key of allKeys.keys()) {
        const count1 = str1_hash.get(key) || 0;
        const count2 = str2_hash.get(key) || 0;

        intersection += Math.min(count1, count2);
        union += Math.max(count1, count2);
    }

    var answer = 0;
    if (intersection === 0 && union === 0) {
        answer = 65536;
    } else {
        answer = Math.floor((intersection / union) * 65536);
    }

    return answer;
}
