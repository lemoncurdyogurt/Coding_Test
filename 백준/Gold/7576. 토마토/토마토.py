from collections import deque

M,N = map(int, input().split())
tomatos = [list(map(int, input().split())) for _ in range(N)]

# 1: 익은 토마토, 0: 익지않은 토마토, -1: 없음

dx =[0,1,0,-1]
dy = [1,0,-1,0]

# 1인 곳을 기점으로 탐색 -> 0인경우 1로 변경 -> cnt+=1
# 다시 1인 곳 기점을 재탐색
# 0인 곳이 없을 때까지 반복

cnt = 0 # 토마토가 익을 떄까지의 최소 날짜

# 0인 경우 1로 바꾸는 함수
def makeTomatoGrow(curX, curY):
  for i in range(4):
    nextX = curX + dx[i]
    nextY = curY + dy[i]
  
    if 0 <= nextX < M and 0 <= nextY < N:
      if(tomatos[nextY][nextX]==0):
        tomatos[nextY][nextX] = tomatos[y][x] + 1
        queue.append((nextX, nextY))


# 토마토가 익은 곳 큐에 저장
queue = deque()
for y in range(N):
  for x in range(M):
    if(tomatos[y][x]==1):
      queue.append([x,y])


while(queue):
  x,y = queue.popleft()
  makeTomatoGrow(x, y)

result = 0
for row in tomatos:
  for cell in row:
    if cell == 0:
      print(-1)
      exit()
  
    # cell의 최대값을 찾기
    if(result < cell):
      result = cell

# 1부터 시작했으므로 -1처리해주기
print(result -1)