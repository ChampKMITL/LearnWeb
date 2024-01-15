"""
Program 3:
Input string : hello world
Input Keyword: world
Output : 6
Input string : hello world
Input Keyword: word
Output: -1 
"""
def find_keyword(s, keyword):
    len_s = len(s)
    len_keyword = len(keyword)

    for i in range(len_s - len_keyword + 1):
        if s[i:i+len_keyword] == keyword:
            return i

    return -1

#Test
# print(find_keyword('hello world', 'world'))
# print(find_keyword('hello world', 'word')) 

input_string = input("Input string: ")
input_keyword = input("Input keyword: ")
result = find_keyword(f'{input_string}', f'{input_keyword}')
print(result)