#https://www.acmicpc.net/problem/1977
#완전제곱수
import math


M = int(input())
N = int(input())

M_Sqrt = int(math.sqrt(M))
N_Sqrt = int(math.sqrt(N))

sqrt_result = 0
sqrt_list = []


if M_Sqrt == N_Sqrt:
  print(-1)
else:
  for i in range(M_Sqrt, N_Sqrt+1):
    sqrt_list.append(i*i)
    sqrt_result += i*i

 

  if sqrt_list[0] < M:
    sqrt_result = sqrt_result - sqrt_list[0]
    print(sqrt_result)
    print(sqrt_list[1])
  else:
    print(sqrt_result)
    print(sqrt_list[0])
