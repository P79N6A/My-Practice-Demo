sum = 0
for i in range(1, 51):
  sum = sum + i
print('1 到 50 的和为 %d' %sum)


count = 51
while count > 50 and count <= 100:
  sum = sum + count
  count = count + 1
print('1 到 100 的和为 %d' %sum)

height = 1.78
weight = 79
bmi = weight / height**2

if (bmi < 18.5):
  print('过轻')
elif (bmi < 25):
  print('正常')
elif (bmi < 28):
  print('过重')
elif (bmi < 32):
  print('肥胖')
else:
  print('非常肥胖')

