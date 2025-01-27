import sys
input = sys.stdin.readline

n = int(input())
target = int(input())

snail = [[0]*n for _ in range(n)]

x = n//2
y = n//2

#위-오른쪽-아래-왼쪽 순서
dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

m= 1  # 해당 위치에 들어갈 숫자 1씩 증가 예정
len = 0  # 특정 방향으로 이동할 길이 얼마나 더할 것인가. for 문으로 동일 작업 수행 가능.
snail[x][y] = 1
answer = []

while True:
    for i in range(4):
        for _ in range(len):
            x += dx[i]
            y += dy[i]
            m += 1
            snail[x][y] = m
            if m == target:
                answer = [x+1, y+1]
    if x == y == 0:
        break
    x -= 1
    y -= 1
    len += 2

for i in range(n):
    print(*snail[i])
print(*answer)