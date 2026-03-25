// Inorder (중위 순회) : left Node -> root Node -> right Node
// Postorder (후위 순회) : left Node -> right Node -> root Node
// Preorder (전위 순회) : root Node -> left Node -> right Node

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = input[0];
const inorder = input[1].split(" ").map(Number);
const postorder = input[2].split(" ").map(Number);

let preorder = [];

const position = new Array(n + 1);
for (let i = 0; i < n; i++) {
  position[inorder[i]] = i;
}

function solve(inStart, inEnd, postStart, postEnd) {
  if (inStart > inEnd || postStart > postEnd) return;

  // 1. Root 찾기 (Postorder의 끝)
  const rootNode = postorder[postEnd];
  preorder.push(rootNode);

  // 2. Inorder에서 Root의 위치 (미리 만든 position 배열 사용)
  const rootIndex = position[rootNode];

  // 3. 왼쪽 서브트리의 크기 계산
  const leftSize = rootIndex - inStart;

  // 4. 왼쪽 서브트리 방문
  solve(inStart, rootIndex - 1, postStart, postStart + leftSize - 1);

  // 5. 오른쪽 서브트리 방문
  solve(rootIndex + 1, inEnd, postStart + leftSize, postEnd - 1);
}

solve(0, n - 1, 0, n - 1);

console.log(preorder.join(" "));
