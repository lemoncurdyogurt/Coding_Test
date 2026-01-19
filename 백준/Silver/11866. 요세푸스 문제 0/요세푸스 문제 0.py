N, K = map(int, input().split())

arr = list(range(1, N + 1))
idx = 0
result = []
while len(arr) > 0:
  idx = (idx + K - 1) % len(arr)
  result.append(arr.pop(idx))

print("<" + ", ".join(map(str, result)) + ">")