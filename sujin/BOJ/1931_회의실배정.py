import sys

n = int(sys.stdin.readline())

# 2차원 배열로 저장
table = [list(map(int, sys.stdin.readline().split()))for _ in range(n)]
table.sort(key=lambda x: (x[1], x[0]))

end = 0
cnt = 0
for x in table:
  if x[0] >= end:
    cnt += 1
    end = x[1]

print(cnt)