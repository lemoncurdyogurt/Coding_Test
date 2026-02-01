# https://www.acmicpc.net/problem/15720

B, C, D = list(map(int, input().split())) 
setCount = min(B,C,D)

burger = list(map(int, input().split())) 
side = list(map(int, input().split())) 
drink = list(map(int, input().split()))

# 내림차순으로 정렬
burger.sort(reverse=True)
side.sort(reverse=True)
drink.sort(reverse=True)

whole = sum(burger) + sum(side) + sum(drink) # 할인 전 가격
setPrice = 0
for i in range(setCount):
    setPrice += (burger[i] + side[i] + drink[i]) * 0.9

notSetPrice = sum(burger[setCount:]) + sum(side[setCount:]) + sum(drink[setCount:])

total = int(setPrice + notSetPrice)

print(whole)
print(total)