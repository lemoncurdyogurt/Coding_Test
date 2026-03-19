import math
min, max = map(int,input().split())

# 정수 X가 1보다 큰 제곱수로 나누어 떨어지지 않을 때
# X는 제곱 ㄴㄴ수

# 제곱수 예시) 4, 9, 16, 25 ....
# 제곱 ㄴㄴ 수) 2, 3, 5, 6, 7, 8, 10

is_sq_free = [True] * (max - min + 1)

for i in range(2, int(math.sqrt(max)) + 1):
    square = i * i
    
    # square의 배수 중 min보다 크거나 같은 첫 번째 배수 찾기
    # 예: min이 10이고 square가 4라면, 10//4 = 2, start = 4 * 3 = 12
    start = math.ceil(min / square) * square

    for j in range(start, max + 1, square):
        if is_sq_free[j - min]:
            is_sq_free[j - min] = False

print(sum(is_sq_free))