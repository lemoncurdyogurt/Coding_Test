import sys
n = int(sys.stdin.readline())

for _ in range(n):
  str = list(sys.stdin.readline().strip())
  st = []

  for x in str:
    if x == "(":
      st.append(x)
    else:
      if len(st) == 0: #")"만났는데 stack이 비어있는 경우
        print("NO")
        break
      else:
        st.pop()
  else:
    if len(st)==0:
      print("YES")
    else:
      print("NO")