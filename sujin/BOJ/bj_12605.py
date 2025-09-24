# 백준 12605번 단어순서 뒤집기
# https://www.acmicpc.net/problem/12605

num_case = int(input())
for i in range(num_case):
  word = input().split()
  word.reverse()
  reverse_word = " ".join(word)

  list = []
  list.append(reverse_word)
  print(f"Case #{i+1}: {list[0]}")