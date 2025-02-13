import sys
input = sys.stdin.readline

def check(bingo):
    for i in range(5):
        if arr[i] == ['x']*5:
            bingo += 1
    for i in range(5):
        if all(arr[j][i] == 'x' for j in range(5)):
            bingo += 1
    if all(arr[i][i] == 'x' for i in range(5)):
        bingo += 1
    if all(arr[i][4-i] == 'x' for i in range(5)):
        bingo += 1
    return bingo

arr = []
speak = []
count = 0
x, y = 0, 0
bingo = 0
for _ in range(5):
    arr.append(list(map(int, input().split())))
for _ in range(5):
    speak += list(map(int, input().split()))
for i in range(25):
    for x in range(5):
        for y in range(5):
            if speak[i] == arr[x][y]:
                arr[x][y] = 'x'
                count += 1
    if count >= 12:
        answer = check(bingo)
        if answer >= 3:
            print(i+1)
            break