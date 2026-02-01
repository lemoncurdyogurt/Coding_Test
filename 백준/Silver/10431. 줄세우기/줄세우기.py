N = int(input())

def sortStudent(arr):
  cnt = 0
  for i in range(1, 20):
    for j in range(0, i):
      # 나보다 앞에 있는 큰 사람들 중에서 가장 앞에 있는 사람에 넣는 것임
      if (arr[j] > arr[i]):
        tmp = arr[i]
        arr.pop(i)
        arr.insert(j, tmp)
        return (i - j) + sortStudent(arr)
      
  return 0

for _ in range(N):
  arr = list(map(int, input().split())) # 테스트 케이스 입력받기
  students = arr[1:]
  moves = sortStudent(students)
  print(arr[0], moves)

