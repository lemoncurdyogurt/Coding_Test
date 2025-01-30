import sys
input = sys.stdin.readline

def rotation(arr):
    for i in range(min(N, M)//2):
        x, y = i, i
        key = arr[x][y]   #맨 처음 좌표가 가진 값
         
        for j in range(i+1, N-i):  #왼쪽
            x = j
            tmp = arr[x][y]
            arr[x][y] = key
            key = tmp
        
        for j in range(i+1, M-i): # 아래
            y = j
            tmp = arr[x][y]
            arr[x][y] = key
            key = tmp
        
        for j in range(i+1, N-i): #오른쪽
            x = N-j-1
            tmp = arr[x][y]
            arr[x][y] = key
            key = tmp
        
        for j in range(i+1, M-i): #위
            y = M-j-1
            tmp = arr[x][y]
            arr[x][y] = key
            key = tmp
            
    return arr

N,M,R = map(int, input().split())
arr = [[0]*M for i in range(N)]

for i in range(N):
    values = list(map(int, input().split()))
    arr[i] = values

for _ in range(R):
    result = rotation(arr)

for i in range(N):
    for j in range(M):
        print(result[i][j], end =' ')
    print()

