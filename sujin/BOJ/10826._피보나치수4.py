#https://www.acmicpc.net/problem/10826
def getFibonacci(prev, temp, n):
  for _ in range(n):
    next = prev + temp
    prev = temp
    temp = next
  return prev
  
prev = 0
temp = 1

n = int(input())

print(getFibonacci(0, 1, n))
