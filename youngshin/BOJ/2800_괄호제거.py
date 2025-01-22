import sys
from itertools import combinations
input = sys.stdin.readline
answer = []
stack = []
result = set()

arr = list(input().strip())

for i in range(len(arr)):
    if arr[i] == '(':
        stack.append(i)   
    elif arr[i] == ')':
        answer.append((stack.pop(), i))

for i in range(len(answer)):
    for j in combinations(answer, i):
        tmp = arr[:]
        for idx in j:
            tmp[idx[0]] = tmp[idx[1]] = ''
        result.add("".join(tmp))
        
for item in sorted(result):
    print(item)
    
            