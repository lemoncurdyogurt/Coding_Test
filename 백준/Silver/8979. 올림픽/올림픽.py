# 금메달 수 비교
# 금메달 같은 경우, 은메달 수 비교
# 금,은 갯수 같은 경우, 동메달 비교

N, K = map(int, input().split())
medal_record = [[] for _ in range(N)]


for _ in range(N):
  row = list(map(int, input().split()))
  countryIdx = row[0]
  medals = row[1:4]

  medal_record[countryIdx-1] = medals

#print(medal_record)


target_medals = medal_record[K-1]
cnt = 0
for i in range(N):
  if medal_record[i] > target_medals:
    cnt +=1

print(cnt+1)