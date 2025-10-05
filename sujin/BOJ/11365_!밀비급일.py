#https://www.acmicpc.net/problem/11365
#!밀비 급일

import sys
input = sys.stdin.readline

while True:
  word = input().strip()
  if word == "END":
    break
  print("출력:",word[::-1])