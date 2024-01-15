"""
Program 2:
ให้นักศึกษาเขียนโปรแกรม สร้าง Class Stack และรับ input เป็น expression ทางคณิตศาสตร์ แล้วทำการตรวจสอบ expression ว่ามีการเติมวงเล็บถูกต้องหรือไม่โดยใช้ Stack
ตัวอย่าง
Input : (1+(2-3))
Output : True
ตัวอย่าง
Input : 1+(2*3)-4)
Output : False
"""
class Stack:
    def __init__(self):
        self.items = []

    def is_empty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

def is_balanced(expressionC):
    s = Stack()
    for char in expressionC:
        if char == "(":
            s.push(char)
        elif char == ")":
            if s.is_empty():
                return False
            s.pop()
    return s.is_empty()

str_input = input("Input expression Is: ")
print(is_balanced(str_input)) 