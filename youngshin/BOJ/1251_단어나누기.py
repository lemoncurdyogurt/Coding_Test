import sys
input = sys.stdin.readline
word = input().strip()
words = []

for i in range(1, len(word)-1):
    for j in range(i+1, len(word)):
        w1= word[:i]
        reversed_w1 = w1[::-1]
        w2 = word[i:j]
        reversed_w2 = w2[::-1]
        w3 = word[j:]
        reversed_w3 = w3[::-1]
        words.append(reversed_w1 + reversed_w2 + reversed_w3)
        
print(sorted(words)[0])
    
