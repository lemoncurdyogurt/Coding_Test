import sys

def push(x):
  command.append(x)
  #print("push함")
  return(command)

def pop():
  if len(command)==0:
    print(-1)
  else:
    x = command.pop()
    print(x)
  #print("pop함")

def size():
  print(len(command))
  #print("size함")

def empty():
  if len(command)==0:
    print(1)
  else:
    print(0)
  #print("empty함")

def top():
  if len(command)==0:
    print(-1)
  else:
    print(command[-1])
 # print("top함")

st = []
command=[]

n = int(sys.stdin.readline())
for _ in range(n):
  st = sys.stdin.readline().split()
  for i in range(len(st)):
    if st[i] == "push":
      push(st[i+1])
    elif st[i] =="pop":
      pop()
    elif st[i] == "size":
      size()
    elif st[i] =="empty":
      empty()
    elif st[i] =="top":
      top()