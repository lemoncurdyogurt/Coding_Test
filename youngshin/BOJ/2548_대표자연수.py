'''
import sys

input = sys.stdin.readline
n = int(input())
num = list(map(int, input().split()))
total = 0
tmp = []
answer = []

for i in range(n):
    for j in range(n):
        total += abs(num[i] - num[j])
    tmp.append(total)
    total = 0
    
for i in range(len(tmp)):
    if tmp[i] == min(tmp):
        answer.append(num[i])
print(min(answer))
'''

import sys

input = sys.stdin.readline
n = int(input())
num = list(map(int, input().split()))
num.sort()
if n%2 == 0:
    print(num[n//2 -1])
else:
    print(num[n//2])
