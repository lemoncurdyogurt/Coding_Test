import sys
input = sys.stdin.readline
from collections import deque

N = int(input())
ballons = deque(enumerate(map(int, input().split())))
nums = []

while ballons:
    idx, num = ballons.popleft()
    nums.append(idx + 1)
    
    if num > 0:
        ballons.rotate(-(num-1))
    elif num < 0:
        ballons.rotate(-num)

print(nums)
        
        
        