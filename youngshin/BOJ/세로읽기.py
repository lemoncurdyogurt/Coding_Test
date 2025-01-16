'''
import sys

answer = ''
arr = []
for i in range(5):
    exam = (sys.stdin.readline())
    arr.append(exam)
    len_max = max(0, len(exam))

for i in range(len_max):
    for j in range(5):
        if i < len(arr[j]):
            if arr[j][i] != '\n':
                answer += arr[j][i]
            
print(answer)
'''

'''
l=[]
r=''
for i in range(5):
    l.append(input())
for i in range(15):
    for j in range(5):
        if len(l[j])>i:
            r+=l[j][i]
print(r)
'''

arr=[]
answer = ''
for i in range(5):
    arr.append(input())
for i in range(15):
    for j in range(5):
        if i < len(arr[j]):
            answer += arr[j][i]
print(answer)
