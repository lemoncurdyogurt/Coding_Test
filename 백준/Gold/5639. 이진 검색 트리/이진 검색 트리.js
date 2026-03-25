// 전위순회 트리 -> 후위순회 트리
// 노드의 왼쪽 서브트리에 있는 모든 노드의 키는 노드의 키보다 작다

// 전위 순회: rootNode -> leftNode -> rightNode
// 후위순회: leftNode -> rightNode -> rootNode

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const tree = input.map(Number);

let postOrder = [];

function getPostOrder(start, end) {
  if (start > end) return;
  const root = tree[start];

  // 오른쪽 자식이 시작하는 인덱스 기억하기
  let rightIdx = start + 1;

  // root보다 커지는 시점이 오른쪽 자식 시작 인덱스
  while (rightIdx <= end) {
    if (tree[rightIdx] > root) {
      break;
    }
    rightIdx++;
  }

  getPostOrder(start + 1, rightIdx - 1);
  getPostOrder(rightIdx, end);

  postOrder.push(root);
}

getPostOrder(0, tree.length - 1);
console.log(postOrder.join("\n"));
