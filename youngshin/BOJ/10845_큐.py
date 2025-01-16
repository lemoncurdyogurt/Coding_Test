'''
import sys

queue = []
input = sys.stdin.readline
num = int(input())

for i in range(num):
    command = input().strip().split()
    if command[0] == 'push':
        queue.append(command[1])
    elif command[0] == 'pop':
        if queue:
            print(queue.pop(0))
        else:
            print(-1)
    elif command[0] == 'size':
        print(len(queue))
    elif command[0] == 'empty':
        if queue:
            print(0)
        else:
            print(1)
    elif command[0] == 'front':
        if queue:
            print(queue[0])
        else:
            print(-1)
    elif command[0] == 'back':
        if queue:
            print(queue[-1])
        else:
            print(-1)
'''
import sys
from collections import deque

#큐 초기화
queue = deque()

input = sys.stdin.readline
num = int(input())
for _ in range(num):
    command = input().strip()
    if command.startswith('push'):
        _,value = command.split()
        queue.append(int(value))
    elif command == 'pop':
        print(queue.popleft() if queue else -1)
    elif command == 'size':
        print(len(queue))
    elif command == 'empty':
        print(1 if not queue else 0)
    elif command == 'front':
        print(queue[0] if queue else -1)
    elif command == 'back':
        print(queue[-1] if queue else -1)
        
    


        
        
    
