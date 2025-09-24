# 백준 5618 공약수
# https://www.acmicpc.net/problem/5618

num = int(input("num: ")) # 입력받을 숫자의 갯수
user_input = list(map(int, input("숫자들: ").split())) # 입력받은 숫자들을 공백 기준으로 나누어 리스트로 변환

list = []# 공약수 리스트
for i in user_input:
  i = int(i)
  for j in range(1, 10**8):
    # print(i, j)
    if i % j != 0: # 공약수가 아니면
      continue
    else:
      list.append(j) # 공약수 출력
  print(list)


# n값이 2or 3이므로 이중반복문가능하겠구나하심...

# for n in range(1, 10**8):
#   for i in user_input:
#     j = int(j)
#     print(j, n)
#     if j % n != 0: # 공약수가 아니면
#       continue
#     else:
#       list.append(n) # 공약수 출력

#   set(list) # 중복 제거
#   for n in list:
#     list = set(list).pop()
#   print(list)

# #왜 1에서 끝나는겨...
# print(list)

######################
# 브루트포스