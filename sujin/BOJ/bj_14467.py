#소가 길을 건너간 이유 1
#https://www.acmicpc.net/problem/14467

num = int(input())
position_list = []
position_dict = {}

change_cnt = 0

for i in range(num):
  position_list = list(map(int, input().split()))
  if position_list[0] in position_dict: #이미 있으면
    if position_dict[str(position_list[0])] != position_list[1]: #다른 위치로 바뀌었으면
      change_cnt += 1
      position_dict[str(position_list[0])] = position_list[1] #위치 바꾸기
      print(position_dict)
  else: #없으면 추가
    position_dict[str(position_list[0])] = position_list[1]
  print(position_dict)
  print(change_cnt)