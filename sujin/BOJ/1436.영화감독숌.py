# https://www.acmicpc.net/problem/1436
# 영화감독 숌

index = int(input())

count = 0
num = 666

while True:
  if "666" in str(num):
    count += 1
    if count == index:
      print(num)
      break
  num += 1