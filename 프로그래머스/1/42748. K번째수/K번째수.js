function solution(array, commands) {
    let answer = [];
    for(let command of commands){
        const [i, j, k] = command;
        const slicedArr = array.slice(i-1, j);
        slicedArr.sort((a,b)=> a-b);
        
        answer.push(slicedArr[k-1])
    }
    
    return answer;
}