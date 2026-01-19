#left_hand = [[1,1,1,1,1],[1,1,1,1,1],[1,1,1,0]]
#right_hand = [[0,1,1,1,1,1],[0,1,1,1,1,0],[1,1,1,0,0,0]]

left_hand = {"q":(0,0), "w":(1,0), "e":(2,0), "r":(3,0), "t":(4,0),
             "a":(0,1), "s":(1,1), "d":(2,1), "f":(3,1), "g":(4,1),
             "z":(0,2), "x":(1,2),"c":(2,2), "v":(3,2)}

right_hand = {"y":(1,0), "u":(2,0), "i":(3,0), "o":(4,0), "p":(5,0),
              "h":(1,1), "j":(2,1), "k":(3,1), "l":(4,1),
              "b":(0,2), "n":(1,2), "m":(2,2)}


Sl, Sr = input().split()
word = list(input())

Sl_pos = left_hand[Sl]
Sr_pos = right_hand[Sr]


sec = 0
for i in word:
  if i in left_hand:
    x, y = left_hand[i]
    sec += abs(Sl_pos[0] - x) + abs(Sl_pos[1] - y)
    Sl_pos = (x, y)
    sec += 1
  else:
    x, y = right_hand[i]
    sec += abs(Sr_pos[0] - x) + abs(Sr_pos[1] - y)
    Sr_pos = (x, y)
    sec += 1
print(sec)