const fs = require("fs");

const input = fs.readFileSync(0, "utf-8").trim().split(" ");

const N = parseInt(input[0]);
const K = parseInt(input[1]);

let idx = 0;
const arr = Array.from({ length: N }, (_, i) => i + 1);
const result = [];

for (let i = 1; i <= N; i++) {
  idx = (idx + K - 1) % arr.length;
  let removeEl = arr.splice(idx, 1);
  result.push(removeEl[0]);
}

console.log(`<${result.join(", ")}>`);
