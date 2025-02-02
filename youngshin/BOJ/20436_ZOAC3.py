import sys
input = sys.stdin.readline

left = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v']
right = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'b', 'n', 'm']
keyboard = {'q':(0,0), 'w':(0,1), 'e':(0,2), 'r':(0,3), 't':(0,4), 'y':(0,5), 'u':(0,6), 'i':(0,7),
            'o':(0,8), 'p':(0,9), 'a':(1,0), 's':(1,1), 'd':(1,2), 'f':(1,3), 'g':(1,4), 'h':(1,5),
            'j':(1,6), 'k':(1,7), 'l':(1,8), 'z':(2,0), 'x':(2,1), 'c':(2,2), 'v':(2,3), 'b':(2,4),
            'n':(2,5), 'm':(2,6)}
sl, sr = map(str, input().split())
(x1, y1) = keyboard[sl]
(x2, y2) = keyboard[sr]
string = input().strip()
time = len(string)
for c in string:
    if c in left:
        (new_x1, new_y1) = keyboard[c]
        time += abs(new_x1-x1) + abs(new_y1-y1)
        x1, y1 = new_x1, new_y1
    elif c in right:
        (new_x2, new_y2) = keyboard[c]
        time += abs(new_x2-x2) + abs(new_y2-y2)
        x2, y2 = new_x2, new_y2
print(time)