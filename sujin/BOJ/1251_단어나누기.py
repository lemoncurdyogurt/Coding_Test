#mob/ite/l
#bom/eti/l
import sys
word = sys.stdin.readline().strip()

ans=[]
for i in range(1, len(word)-1): 
  for j in range(i+1, len(word)): 
    first = word[:i][::-1] 
    second = word[i:j][::-1]
    third = word[j:][::-1]
    ans.append(first+second+third)
ans.sort()
print(ans[0])

# mobitel 
# len(word)=7
# for i in range(1,6):
#   for j in range(i+1,7):

# i = 2, j=3
# word[:2][::-1] = mo
# word[2:3][::-1] = b
# word[3:][::-1] = itel