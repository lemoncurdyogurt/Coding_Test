import sys
input = sys.stdin.readline

N, L = map(int, input().split())
index = list(map(int, input().split()))
index.sort()
standard = index[0]
count= 1

for i in index:
    if i > standard + L -1:
        count += 1
        standard = i
        
print(count)
