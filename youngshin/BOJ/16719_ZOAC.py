# import sys
# input = sys.stdin.readline

# s = input()
# seq = list(s.strip())
# answer = [''] * len(seq)

# sorted_chars = sorted(seq)

# for i in range(len(seq)):
#     char = sorted_chars[i]
#     idx = seq.index(char)
#     answer[idx] = char
#     print(''.join(answer))
#     answer[seq.index(i)] = i
#     for ch in answer:
#         if type(ch) == str:
#             print(''.join(ch), end='')
#     print()
   
import sys

def print_zoac(s, start):
    global answer
    if not s:  # 문자열이 비었으면 종료
        return
    
    # 가장 작은 문자 찾기
    min_char = min(s)
    min_index = s.index(min_char)

    # 결과에 추가하고 출력
    answer[start + min_index] = min_char
    print(''.join(answer))

    # 왼쪽 문자열 그대로 유지하면서, 오른쪽 문자열로 재귀 호출
    print_zoac(s[min_index+1:], start + min_index + 1)
    print_zoac(s[:min_index], start)

# 입력 받기
input_str = sys.stdin.readline().strip()
answer = ['']* len(input_str)
print_zoac(input_str, 0)

    
     
    