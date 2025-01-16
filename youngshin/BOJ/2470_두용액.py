import sys
input = sys.stdin.readline
n = int(input())
values = list(map(int, input().split()))
values.sort() 
        
i, j = 0, n-1
add = abs(values[i] + values[j])
answer= [values[i], values[j]]

while i<j:
    start, end = values[i], values[j]
    total = start + end

    if abs(total) < add:
        add = abs(total)
        answer = [start, end]
        if add == 0:
            break
    if total < 0:
        i += 1
    else:
        j -= 1

print(answer[0], answer[1])
        
                                             
