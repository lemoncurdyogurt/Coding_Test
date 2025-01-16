import sys

input = sys.stdin.readline

n = int(input())
meeting= []
endPoint, answer = 0, 0
for i in range(n):
    arr = tuple(map(int, input().split()))
    meeting.append(arr)

meeting.sort(key = lambda x: (x[1], x[0]))

for start, end in meeting:
    if start >= endPoint:
        answer += 1
        endPoint = end

print(answer)
        
