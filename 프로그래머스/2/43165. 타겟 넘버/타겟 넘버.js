function solution(numbers, target) {
    var answer = 0;
    const N = numbers.length; // 주어진 숫자들의 갯수

    function dfs(index, sum) {
        if (index === N) {
            if (sum === target) {
                answer++;
            }
            return;
        }

        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    
    dfs(0,0)

    return answer;
}
