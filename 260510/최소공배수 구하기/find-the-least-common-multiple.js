const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// 최소공배수: 각 수를 곱하고 최대공약수를 나누기
// 최대공약수를 구해야함
//???어떻게???

function gcd(n,m){
    while(m !=0){
        let r = n%m;
        n = m;
        m = r;
    }
    return n;
}

let lcd = n * m / gcd(n, m);
console.log(lcd);
