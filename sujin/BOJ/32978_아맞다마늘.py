# https://www.acmicpc.net/problem/32978
# 아맞다마늘

import sys
input = sys.stdin.readline

n = int(input())

ingredients = list(input().split())
put_ingredients = list(input().split())

for i in put_ingredients:
  ingredients.remove(i)

print(ingredients.pop())