# #1.
# def balancedOrNot(expressions, maxReplacements):
#     result = []
#     for expression, count in zip(expressions, maxReplacements):
#         balance, require = 0, 0
#         for i in expression:
#             if i == '<':
#                 balance += 1
#             elif i == '>':
#                 if balance > 0:
#                     balance -= 1
#                 else:
#                     require += 1
#                     if require > count:
#                         result.append(0)
#                         break
#         else:
#             if balance == 0:
#                 result.append(1)
#             else:
#                 result.append(0)
#     return result

# #2.
# def maxSubsetSum(k):
#     tmp = []
#     for num in k:
#         total = 0
#         for i in range(1, int(num**0.5)+1):
#             if num % i == 0:
#                 total += i
#                 if i != num//i:
#                     total += num // i
#         tmp.append(total)
#     return tmp

# #3.
# def frequency(s):
#     alpha = [0] * 26
#     i = 0
#     while i <len(s):
#         if i+2 <len(s) and s[i+2] == '#':
#             num = int(s[i:i+2])
#             if i +3 < len(s) and s[i+3] == '(':
#                 j = i +4
#                 tmp = ''
#                 while s[j] != ")":
#                     tmp += s[j]
#                     j += 1
#                 count = int(tmp)
#                 alpha[num-1] += count
#                 i = j + 1
#             else:
#                 alpha[num-1] += 1
#                 i += 3
#         elif i+1 <len(s) and s[i+1] == '(':
#             num = int(s[i])
#             j = i+2
#             tmp = ''
#             while s[j] != ")":
#                 tmp += s[j]
#                 j += 1
#             count = int(tmp)
#             alpha[num-1] += count
#             i = j+1
#         elif s[i].isdigit():
#             num = int(s[i])
#             alpha[num-1] += 1
#             i += 1
#         else:
#             i += 1
#     return alpha

# #4.
# from collections import Counter
# from itertools import permutations
# from math import factorial
# def count_permutations(s):
#     count = Counter(s)
#     total = factorial(len(s))
#     for k in count.values():
#         total //= factorial(k)
#     return total

# def findSimilar(a, b):
#     a = a.lstrip('0')
#     b = b.lstrip('0')
#     if Counter(a) == Counter(b):
#         total_p = count_permutations(a)
#         zero = 0
#         if '0' in a:
#             tmp = a.replace('0', '', 1)
#             zero = count_permutations(tmp)
#         return total_p - zero
#     else:
#         total_p = count_permutations(b)
#         zero = 0
#         if '0' in b:
#             tmp = b.replace('0', '', 1)
#             zero = count_permutations(tmp)
#         return total_p - zero
        

def getMinCost(cost, time):
    task = zip(cost, time)
    
getMinCost([1,2,3,2], [1,2,3,2])