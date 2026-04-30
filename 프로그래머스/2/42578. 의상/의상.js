function solution(clothes) {
    var answer = 0;
    let clothes_map = new Map();

    for (let [name, type] of clothes) {
        clothes_map.set(type, (clothes_map.get(type) || 0) + 1);
    }

    let totalCombinations = 1;
    for (let count of clothes_map.values()) {
        totalCombinations *= count + 1;
    }

    return totalCombinations - 1;
}
