N = int(input())
array = list(map(int, input().split()))

# biggestDiff = 0

# for i in range(N):
#     diffArray = []
#     for j in range(i + 1):  # 0부터 i까지 비교
#         diff = array[i] - array[j]  # 현재값 - 이전값
#         diffArray.append(diff)

#     biggestDiff = max(biggestDiff, int(max(diffArray)))
#     print(biggestDiff, end = " ")

################################################################
# 최소값은 일단 배열의 첫번째 숫자, 최소값이 등장할 때마다 min_value 업데이트    #
# 새로운 배열의 값과 최소값의 차이 비교 -> 최대차이보다 크다면 max_diff 업데이트 #
# max_diff 저장 배열 인덱트 호출 

min_value = array[0]
max_diff = 0
result = [0]

for i in range(1, N):
    diff = array[i] - min_value

    if diff > max_diff:
        max_diff = diff

    if array[i] < min_value:
        min_value = array[i]

    result.append(max_diff)

print(*result)
