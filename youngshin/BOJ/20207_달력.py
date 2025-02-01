import sys
input = sys.stdin.readline

N = int(input())
calendar = [0]*366
result, row, col = 0, 0, 0
for _ in range(N):
    S,E = map(int, input().split())
    for i in range(S, E+1):
        calendar[i] += 1

for day in calendar:
    if day != 0:
        col = max(col, day)
        row += 1
    else:
        result += row * col
        row, col = 0, 0
result += row * col
print(result)

