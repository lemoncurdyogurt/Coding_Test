# 0: 빈칸, 1: 벽, 2: 바이러스
# M * N 연구소 크기
from collections import deque
from itertools import combinations

N,M = map(int, input().split())

grid = []
for i in range(N):
  row = list(map(int, input().split()))
  grid.append(row)

# print(grid)
# 벽을 3개 세웠을 때, 안전영역의 최대 크기 구하기

dx = [0,1,0,-1]
dy = [1,0,-1,0]
max_result = 0

# 바이러스 퍼지는 함수 작성
def virusBlow():
  test_grid = [row[:] for row in grid]
  queue = deque()

  for y in range(N):
    for x in range(M):
      if test_grid[y][x] == 2:
        queue.append((x, y))

  while queue:
    cx, cy = queue.popleft()
    for i in range(4):
      nx, ny = cx + dx[i], cy + dy[i]

      if 0 <= nx < M and 0 <= ny < N:
        if test_grid[ny][nx] == 0: # 빈칸이면 바이러스 전파
          test_grid[ny][nx] = 2
          queue.append((nx, ny))

  cnt = 0
  for row in test_grid:
      cnt += row.count(0)
  return cnt


# 임의의 0 3개를 1로 전환 -> 바이러스 퍼지는 함수 실행 -> 안전영역 세기
# 안전영역이 최대가 나올 때까지 탐색

empty_spaces = []
for y in range(N):
    for x in range(M):
        if grid[y][x] == 0:
            empty_spaces.append((x, y))

# 2. combinations를 이용해 빈칸 중 3개를 뽑는 루프
for walls in combinations(empty_spaces, 3):
    # 벽 세우기
    for wx, wy in walls:
        grid[wy][wx] = 1
    
    # 바이러스 퍼뜨리기 & 안전 영역 계산
    max_result = max(max_result, virusBlow())
    
    # 벽 다시 허물기
    for wx, wy in walls:
        grid[wy][wx] = 0
        
print(max_result)