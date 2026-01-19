# https://www.acmicpc.net/problem/1758

import sys
input = sys.stdin.readline

n = int(input())
tips = []

for _ in range(n):
    tips.append(int(input()))

# 큰 팁부터 정렬
tips.sort(reverse=True)

total = 0
for i in range(n):
    earn = tips[i] - i
    if earn > 0:
        total += earn
    else:
        break

print(total)
