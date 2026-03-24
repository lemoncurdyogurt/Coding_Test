N = int(input())
nodes_parent = list(map(int, input().split()))
remove_node = int(input())

remove_nodes_list = [remove_node]
deleted = [False] * N

while(remove_nodes_list):
  node = remove_nodes_list.pop()
  deleted[node] = True
  for x in range(N):
    if nodes_parent[x] == node:
      remove_nodes_list.append(x)

leaf_count = 0

for i in range(N):
  if deleted[i]: 
        continue
  
  # i를 부모로 가지는 자식들 중, '삭제되지 않은' 자식이 있는지 확인
  has_live_child = False
  for x in range(N):
        if nodes_parent[x] == i and not deleted[x]:
            has_live_child = True
            break
  if not has_live_child:
        leaf_count += 1

print(leaf_count)