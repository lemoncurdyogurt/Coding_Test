N = int(input())
l = list(map(int,input().split()))
l.sort()

# min = int(1e9)

# for i in range(1, N+1):
#   cnt = 0
#   sum= 0
#   for j in l:
#     cnt = abs(i - j)
#     sum +=cntg

#   if sum < min:
#     min = sum
#     ans = i

# print(ans)

if N%2 == 0: # N이 짝수인 경우
  num = l[N//2 - 1] # list index 0부터 시작
else:
  num= l[N//2]
print(num)