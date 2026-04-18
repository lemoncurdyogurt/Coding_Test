const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const grid = [];

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);
  grid.push(line);
}

// 두 칸의 거리 |r1-r2| + |c1-c2|
function getDistance(r1, c1, r2, c2) {
  const distance = Math.abs(r1 - r2) + Math.abs(c1 - c2);
  return distance;
}

function getCitySum(selectedChickens) {
  let citySum = 0;
  for (const house of houses) {
    let minForHouse = Infinity;

    for (const chicken of selectedChickens) {
      const dist = getDistance(chicken[0], chicken[1], house[0], house[1]);
      if (minForHouse > dist) {
        minForHouse = dist;
      }
    }
    citySum += minForHouse;
  }
  return citySum;
}
// 치킨집 grid 만들고, 방문의 경우 0으로 바꾸기
const chickens = [];
const houses = [];

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (grid[r][c] === 1) houses.push([r, c]);
    if (grid[r][c] === 2) chickens.push([r, c]);
  }
}

// 치킨집 M개 골랐을 때, 치킨거리 최소값을 출력
let totalMinDistance = Infinity;
const selectedStore = [];

function backtrack(start) {
  if (selectedStore.length === M) {
    const currentCitySum = getCitySum(selectedStore);
    if (totalMinDistance > currentCitySum) {
      totalMinDistance = currentCitySum;
    }
    return;
  }

  for (let c = start; c < chickens.length; c++) {
    selectedStore.push(chickens[c]);
    backtrack(c + 1);
    selectedStore.pop();
  }
}

backtrack(0);
console.log(totalMinDistance);
