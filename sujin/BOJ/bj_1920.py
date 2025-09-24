# (시간초과) 수 찾기
# https://www.acmicpc.net/problem/1920
# 5
# 4 1 5 2 3
# 5
# 1 3 7 9 5 

# M배열에서 N배열에 있는 수 찾기
# 정렬 후에 이분탐색(중간부터 찾기)으로 풀어야함 ㅡ 중복도 없애야함


N = int(input())
split_N = list(map(int, input().split()))
M = int(input())
split_M = list(map(int, input().split()))

output = []

for i in range(M):
  for j in range(N):
    if split_M[i] == split_N[j]:
      print("i,M,N:", i,split_M[i], split_N[j])
      output.append(1)
      print(1)
      break 

    else:
      print("i,M,N:", i, split_M[i], split_N[j])
      if(j == N-1): #N의 마지막까지 갔는데도 없으면
        output.append(0)
        print(0)

  print(output) 