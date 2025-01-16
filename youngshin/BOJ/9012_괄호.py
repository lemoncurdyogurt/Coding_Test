import sys
input = sys.stdin.readline

T = int(input())

def check(arr):
    tmp = []
    for i in arr:
        if tmp:
            if i == ')':
                if '(' in tmp:
                    tmp.pop()
            else:
                tmp.append(i)
        else:
            if i == ')':
                return "NO"
            else:
                tmp.append(i)
    if len(tmp) == 0:
        return "YES"
    else:
        return "NO"
    

for i in range(T):
    arr = list(input().strip())
    print(check(arr))
