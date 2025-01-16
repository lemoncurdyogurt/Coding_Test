import sys
num = int(input())
def vps(string):
    stack = []
    for i in string:
        stack.append(i)
        if i == ')':
            if stack in '(':
                stack.remove('(')
            else:
                stack.append(i)
        else:
            stack.append(i)
    if len(stack) == 0:
        return "YES"
    else:
        return "NO"
     
    
for i in range(num):
    string = sys.stdin.readline()
    print(vps(string))

