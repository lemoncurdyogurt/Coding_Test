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

# N_list.sort()
# print(N_list)
# #1 2 3 4 5 6 7 8 9 10

# mid_N = len(N_list)//2
# print(mid_N) #10인 경우 5, 9인경우 4

# random_N_sum = 0
# for _ in range(3): #10인경우 5,6,7더하기, 9인경우 4,5,6더하기
#   print(N_list)
#   random_N_sum += N_list[mid_N]
#   print(mid_N)
#   mid_N += 1
#   print(random_N_sum)
# print("합",random_N_sum)

# if random_N_sum < M:
#   mid_N = len(N_list)//2
#   mid_N += 1
#   random_N_sum = 0
#   for _ in range(3): 
#     random_N_sum += N_list[mid_N]
#     mid_N += 1
#   print("새로운합1",random_N_sum)
# elif random_N_sum > M:
#   mid_N = len(N_list)//2
#   mid_N -=1
#   random_N_sum = 0
#   for _ in range(3):
    
#     random_N_sum += N_list[mid_N]
#     print(mid_N)
#     mid_N += 1
#     print(random_N_sum)
#   print("새로운합2",random_N_sum)
  