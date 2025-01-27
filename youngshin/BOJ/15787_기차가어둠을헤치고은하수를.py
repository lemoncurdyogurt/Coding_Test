import sys
input = sys.stdin.readline

N, M = map(int, input().split())
count = 0
seat = [['x']*20 for i in range(N)]
print(seat)
answer = []
for _ in range(M):
    tmp = ''
    tmp2 = ''
    order = list(map(int, input().split()))
    if order[0] == 1:
        seat[order[1]-1][order[2]-1] = 'o'
    elif order[0] == 2:
        seat[order[1]-1][order[2]-1] = 'x'
    elif order[0] == 3:
        for j in range(19, 0, -1):
            seat[order[1]-1][j] = seat[order[1]-1][j-1]
        seat[order[1]-1][0] = 'x'
    elif order[0] == 4:
        for j in range(19):
            seat[order[1]-1][j] = seat[order[1]-1][j+1]
        seat[order[1]-1][-1] = 'x'

for i in seat:
    if i not in answer:
        answer.append(i)
        count += 1
print(count)
    