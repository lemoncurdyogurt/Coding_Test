function solution(arr)
{
    const answer = [];
    for(let num of arr){
        let lastValue = answer[answer.length-1]
        if(lastValue !== num){
            answer.push(num)
        }
    }
    
    return answer;
}