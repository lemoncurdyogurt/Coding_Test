import sys
from collections import deque
input = sys.stdin.readline

case = int(input())
q = deque()
for i in range(case):
    N, M = map(int, input().split())
    q = list(enumerate(list(map(int, input().split()))))
    v = q[M]
    idx = 0
    while len(q):
        max_v = max([j[1] for j in q])
        if q[0][1] == max_v:
            now = q.pop(0)
            idx += 1
            if now == v:
                print(idx)
                break
        else:
            now = q.pop(0)
            q.append(now)



            
            
    
