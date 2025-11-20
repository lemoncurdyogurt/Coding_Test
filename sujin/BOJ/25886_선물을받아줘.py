
# 1 2 3 4 5 6
# eewwew
# -> -> <- <- -> 

# +1 +1 -1 -1 +1
# -> -> -> -> <-
#1 2 3 4 3

N = int(input())
movement = input().strip()
cnt = 0

for i in range(N-1):
  if movement[i] == 'E' and movement[i + 1] == 'W':
    cnt += 1

if cnt == 0:
    cnt = 1
print(cnt)