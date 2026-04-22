const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let idx = 0;
const T = Number(input[idx++]); // 테스트케이스의 갯수
for (let t = 0; t < T; t++) {
  const M = Number(input[idx++]);
  const arr = [];
  while (arr.length < M) {
    const line = input[idx++]
      .split(/\s+/) // 공백이 몇 칸이든 하나로 묶어서 처리
      .filter((v) => v !== "") // 빈 문자열 버리기
      .map(Number);
    arr.push(...line);
  }

  const queue = [];
  const answer = [];

  for (let i = 0; i < M; i++) {
    queue.push(arr[i]);
    if ((i + 1) % 2 !== 0) {
      // 정렬하고, queue[Math.ceil(queue.length/2)] 값 출력
      queue.sort((a, b) => a - b);

      const midIdx = Math.floor(queue.length / 2);

      // console.log(queue);
      // console.log(queue[midIdx]);
      answer.push(queue[midIdx]);
    }
  }
  console.log(answer.length);
  if (answer.length > 10) {
    console.log(answer.slice(0, 10).join(" "))
    console.log(answer.slice(10, answer.length).join(" "))
  } else {
    console.log(answer.join(" "));
  }
}
