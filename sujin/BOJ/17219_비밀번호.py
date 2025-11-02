# https://www.acmicpc.net/problem/17219

# 주소 + 비밀번호 배열을 -> 하나씩 저장
# 주소만 따로 저장 -> index확인
# 그 index에 해당하는 배열의[1]을 찾기



# address_with_pw = [] 
# address_only = []

# for _ in range(n):
#     pair = input().split()
#     address_with_pw.append(pair)
#     address_only.append(pair[0])

# for _ in range(m):
#     query = input().strip()
#     index = address_only.index(query)
#     print("비밀번호"+ address_with_pw[index][1])

n, m = map(int, input().split())
password_dict = {}

for _ in range(n):
    address, pw = input().split()
    password_dict[address] = pw

for _ in range(m):
    query = input().strip()
    print(password_dict[query])
