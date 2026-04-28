function solution(participant, completion) {
    const pMap = new Map();
    for (const name of participant) {
        pMap.set(name, (pMap.get(name) || 0) + 1); // 동명이인이면 +1
    }

    // 완주명단에서 이름 등장시 -1
    for (const name of completion) {
        pMap.set(name, pMap.get(name) - 1);
    }
    
    for (const [name, count] of pMap) {
        // 0보다 큰 값을 가진 이름 return
        if (count > 0) {
            return name;
        }
    }
}
