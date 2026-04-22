function solution(operations) {
    const queue = [];
    
    for(const operate of operations){
        const line = operate.split(" ");

        if(line[0] === "I") {
            queue.push(Number(line[1]));
        }
        else if(line[0] === "D"){
            if(queue.length > 0){
                queue.sort((a,b) => a - b)
                if(Number(line[1]) === 1){
                    queue.pop();
                }
                else if(Number(line[1]) === -1){
                    queue.shift();    
                }
            } 
        }
    }
    if(queue.length === 0){
        return [0, 0]
    }
    queue.sort((a,b) => a-b);
    const maxNum = queue[queue.length -1]
    const minNum = queue[0];
    
    return [maxNum, minNum];
}