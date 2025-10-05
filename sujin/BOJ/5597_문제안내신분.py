#https://www.acmicpc.net/problem/5597
#문제 안내신분

import sys
input = sys.stdin.readline

submitted = [False] * 31

for _ in range(28):
  num = int(input().strip())
  submitted[num] = True

for i in range(1,31):
  if not submitted[i]:
    print(i)