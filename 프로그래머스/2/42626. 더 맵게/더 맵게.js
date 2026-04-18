class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop(value) {
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

  /**
   *     0
   *   1    2
   *  3 4. 5 6
   */
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      // 부모노드가 현재 탐색하는 노드보다 작거나 같다면 중단
      if (this.heap[parentIndex] <= this.heap[index]) {
        break;
      }
      // 부모노드가 현재 탐색하는 노드보다 크다면 위치 바꿔주기
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
      
      // 왼쪽 자식과 오른쪽 자식이 제일 작은 인덱스의 값보다 작다면 자리 바꿔주기
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

function solution(scoville, K) {
    const heap = new MinHeap();
    scoville.forEach(s => heap.push(s));
    
    let count = 0;
    while (heap.heap[0] < K) {
        if (heap.heap.length < 2) return -1; // 섞을 수 없는 경우

        const first = heap.pop();
        const second = heap.pop();
        const mixed = first + (second * 2);
        
        heap.push(mixed);
        count++;
    }
    
    return count;
}
    
