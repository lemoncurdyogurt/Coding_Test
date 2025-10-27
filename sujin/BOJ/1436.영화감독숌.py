#https://www.acmicpc.net/problem/1436
#영화감독 숌

# 아이디어
# 666 1 
# x666 666x -> 9*2 = 18
# xx666 x666x 666xx -> (9*9)*3 = 81*3 = 243
# xxx666 x666xx xx666x 666xxx -> (9*9*9)*4 -> 2916

# N = (9**m)*(m+1)

#2초면 코테에서 여유로운 시간 

N = int(input())
if N == 1:
    print(666)
else:
    num_x = 1
    sum_len_list = 1
    while sum_len_list < N:
      len_list = (9 ** num_x) * (num_x + 1)
      sum_len_list += len_list
      num_x += 1
    num_x -= 1

    # N이 현재 구간에서 몇번째 인지
    prev_sum = 1
    for i in range(1, num_x):
      prev_sum += (9 ** i) * (i + 1)
    index_in_group = N - prev_sum

    patterns = []
    if num_x == 1:
      for i in range(10):
        patterns.append(int(f"{i}666"))
        patterns.append(int(f"666{i}"))
    elif num_x == 2:
      for i in range(10):
        for j in range(10):
          patterns.append(int(f"{i}{j}666"))
          patterns.append(int(f"{i}666{j}"))
          patterns.append(int(f"666{i}{j}"))
    elif num_x == 3:
      for i in range(10):
        for j in range(10):
          for k in range(10):
            patterns.append(int(f"{i}{j}{k}666"))
            patterns.append(int(f"{i}{j}666{k}"))
            patterns.append(int(f"{i}666{j}{k}"))
            patterns.append(int(f"666{i}{j}{k}"))

    patterns = sorted(set(patterns))  # 중복제거 + 정렬
    print(patterns[index_in_group - 1])
