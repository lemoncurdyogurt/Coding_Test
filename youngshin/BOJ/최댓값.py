#arr = list(map(int, input().split()))

arr = []
max_num = 0
row, col = 0, 0
for i in range(9):
    arr.append(list(map(int, input().split())))
    
for i in range(9):
    for j in range(9):
        if arr[i][j] >= max_num:
            max_num = arr[i][j]
            row = i+1
            col = j+1

print(max_num)
print(row, col)

