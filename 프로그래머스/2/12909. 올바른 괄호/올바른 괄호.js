function solution(s){
    const arr = s.split("")
    
    const stack = [];
    
    for(const v of arr){
        if(v === ")"){
            if(stack.length === 0 || stack[stack.length -1] === ")"){
                return answer = false
            } else if(stack[stack.length -1] === "("){
                stack.pop()
            }
        } else if(v === "("){
            stack.push(v)
        }
    }
    if(stack.length === 0){
        return true
    }else{
        return false
    }
}