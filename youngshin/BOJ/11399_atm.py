import sys

input = sys.stdin.readline
n = int(input())
times = list(map(int, input().split()))
total = 0
times.sort()

for i in range(n):
    total += sum(times[:i+1])
print(total)


