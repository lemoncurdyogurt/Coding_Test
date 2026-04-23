const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) {
      return null;
    }

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (this.heap.length !== 0) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }
    return root;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) {
        break;
      }

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];

      index = smallest;
    }
  }
}

const [N, M] = input[0].split(" ").map(Number);
const problems = Array.from({ length: N + 1 }, () => []); // 각 문제 뒤에 올 수 있는 문제들의 목록
const depth = Array(N + 1).fill(0); // 각 문제의 선행 문제 개수를 저장하는 배열

for (let i = 1; i <= M; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  problems[A].push(B);
  depth[B]++;
}

// console.log(problems);

// 선행 조건이 없는 문제들(depth 0)인 모든 문제
const pq = new MinHeap();
for (let i = 1; i <= N; i++) {
  if (depth[i] === 0) {
    pq.push(i);
  }
}

const result = [];
while (pq.heap.length > 0) {
  const curr = pq.pop();
  result.push(curr);

  for (const next of problems[curr]) {
    depth[next]--;
    if (depth[next] === 0) {
      pq.push(next);
    }
  }
}

console.log(result.join(" "));
