const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString();

const [N, M] = input.split(" ").map(Number);

const str = [];
function backtracking(start, strLength) {
  if (strLength === M) {
    console.log(str.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    str.push(i);
    backtracking(start, strLength + 1);
    str.pop();
    start++;
  }
}

backtracking(1, 0);
