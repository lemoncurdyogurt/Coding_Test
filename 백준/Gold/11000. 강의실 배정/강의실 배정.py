#https://www.acmicpc.net/problem/11000

import sys
import heapq
input = sys.stdin.readline

n = int(input())
lectures = []
for _ in range(n):
  s, t = map(int, input().split())
  lectures.append((s, t))
lectures.sort(key= lambda x: x[0]) # 시작시간 기준 오름차순 정렬

# 강의실 종료시간 배열에 저장 후 
# 새로운 강의 시작시간이 종료시간 중 제일 작은 값에 있으면 종료시간 배열에서 제거 후 새로운 강의 종료시간 추가

end_times = []
for i in range(n):
  time = lectures[i][0]
  if end_times and end_times[0] <= time: # end_times배열이 있는지 확인 먼저 해야함(런타임에러)
    heapq.heappop(end_times)
    heapq.heappush(end_times, lectures[i][1])
  else:
    heapq.heappush(end_times, lectures[i][1])
print(len(end_times))

