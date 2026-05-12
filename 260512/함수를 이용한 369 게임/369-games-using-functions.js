const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

let cnt = 0

function threeSixNine(num){
    const target = String(num).split("");
    for(let i =0; i<target.length; i++){
        if(target[i]=== "3" || target[i] === "6"|| target[i]==="9"){
            return true;
        }
    }
    return false;
}

for(let num = A; num<=B; num++){
    if(num % 3 === 0 || threeSixNine(num)){
        // console.log(num);
        cnt++;
    }
}

console.log(cnt);