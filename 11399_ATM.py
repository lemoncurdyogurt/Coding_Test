N = int(input())
p = list(map(int, input().split()))
p.sort()

t = 0
sum = 0
for i in p:
  t += i
  sum += t
print(sum)