length = int(input())
nums = list(map(int, input().split()))

card_nums = []

for i in range(length):
    card_nums.append([i + 1, nums[i]])

#print(card_nums) # [[1, 3], [2, 2], [3, 1], [4, -3], [5, -1]]


start_num = 1
next_nums = [1]
for _ in range(length-1):
  for i in range(len(card_nums)):
     if card_nums[i][0] == start_num:
        start_idx = i
        break
     
  move = card_nums[start_idx][1] 

  card_nums.pop(start_idx)  

  if not card_nums:
      break

  next_idx = start_idx + move 

  if move > 0: 
      next_idx -= 1 # 미리 pop했기 때문에 양수라면 -1, 음수일 경우 거꾸로 끝부터 -1로 시작해서 가능

  next_idx %= len(card_nums)

  next_num = card_nums[next_idx][0] # num = 4
  next_nums.append(next_num)
  start_num = next_num
print(*next_nums)