import sys
input = sys.stdin.readline
N, C = map(int,input().split())
weights = list(map(int,input().split()))
weights.sort()

def binary_search(left,right,diff):
    while left <= right:
        mid = (left + right) // 2
        if weights[mid] == diff:
            return 1
        elif weights[mid] > diff:
            right = mid - 1
        else:
            left = mid + 1
    return 0

def check(N, C):
    if C in weights:
        return 1
    i, j = 0, N-1
    while i < j:
        total = weights[i] + weights[j]
        if total > C:
            j -= 1
        elif total == C:
            return True
        else:
            diff = C - total
            if weights[i] != diff and weights[j] != diff and binary_search(i,j,diff):
                return True
            i += 1
          
if check(N, C):
    print(1)
else:
    print(0)

'''
def binary_search(target, data):
    data.sort()
    start, end = 0, len(data)-1

    while start <= end:
        mid = (start + end) // 2

        if data[mid] == target :
            return mid         #target 위치 반환
        elif data[mid] > target :
            high = mid - 1
        else:
            low = mid + 1
    return -1  #리스트 안에 target이 존재하지 않는다.
'''

def binary_search(target, start, end):
    if start > end:
        return -1    #범위를 넘어도 못찾으면 -1
    
    mid = (start + end )//2
    if data[mid] == target:
        return mid

    elif data[mid] > target:
        high = mid -1

    else:
        low = mid + 1

    return binary_search(target, start, end)     #줄어든 범위를 더 탐색

def solution(target, data):
    data.sort()
    start, end = 0, len(data)-1
    return binary_search(target, start, end)
        
        
    
