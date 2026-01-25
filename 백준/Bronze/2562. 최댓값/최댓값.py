numbers = []

for _ in range (9):
    num = int(input())
    numbers.append(num)
    
max_value = max(numbers)
print(max_value)
print(numbers.index(max_value) + 1)