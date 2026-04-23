const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

class MaxHeap {
  constructor() {
    this.heap = [null]; // 0번 인덱스 비움
  }

  // 데이터 삽입
  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  // 최대값 삭제
  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const max = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.bubbleDown();
    return max;
  }

  // 크기 확인
  size() {
    return this.heap.length - 1;
  }

  // 힙 성질 유지 - 위로 이동
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 1) {
      let parentIndex = Math.floor(index / 2);
      if (this.heap[parentIndex] >= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  // 힙 성질 유지 - 아래로 이동
  bubbleDown() {
    let index = 1;
    let leftChildIndex = index * 2;
    let rightChildIndex = index * 2 + 1;

    while (leftChildIndex < this.heap.length) {
      let higherChildIndex = leftChildIndex;
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[leftChildIndex]
      ) {
        higherChildIndex = rightChildIndex;
      }

      if (this.heap[index] >= this.heap[higherChildIndex]) break;
      [this.heap[index], this.heap[higherChildIndex]] = [
        this.heap[higherChildIndex],
        this.heap[index],
      ];
      index = higherChildIndex;
      leftChildIndex = index * 2;
      rightChildIndex = index * 2 + 1;
    }
  }
}

const [N, K] = input[0].split(" ").map(Number);

// 가방에 한 개만 보석을 넣을 수 있음
// 훔칠 수 있는 보석 합의 최대 가격
const jewerlys = [];
const bags = [];
for (let i = 1; i <= N; i++) {
  const [M, V] = input[i].split(" ").map(Number); // 무게M, 가격V
  jewerlys.push([M, V]);
}
jewerlys.sort((a, b) => a[0] - b[0]); // 보석 무게 오름차순

for (let i = N + 1; i <= N + K; i++) {
  const C = Number(input[i]);
  bags.push(C);
}
bags.sort((a, b) => a - b); // 가방 수용 무게 오름차순 정렬
// console.log(jewerlys);
// console.log(bags);

// 아이디어: 해당 가방에 넣을 수 있는 보석들 heap에 넣기
let jewerlyIdx = 0;
let maxPrice = 0; // 가방에 담을 수 있는 최대 무게
const heap = new MaxHeap();

for (const c of bags) {
  while (jewerlyIdx < N && jewerlys[jewerlyIdx][0] <= c) {
    heap.push(jewerlys[jewerlyIdx][1]);
    jewerlyIdx++;
    // console.log(heap);
  }

  if (heap.size() > 0) {
    maxPrice += heap.pop();
  }
}

console.log(maxPrice);
