#https://www.acmicpc.net/problem/2798
#블랙잭
  
num_N , M = map(int,input().split())
N_list = list(map(int, input().split()))

max_sum = 0

for i in range(num_N):
    for j in range(i + 1, num_N):
        for k in range(j + 1, num_N):
            total = N_list[i] + N_list[j] + N_list[k]
            if total <= M:
                max_sum = max(max_sum, total)

print(max_sum)
  