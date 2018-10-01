#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# print(r'\\r')

# print(True and False)
# print(True or False)
# print(not True)

# if (not None):
#   print('xiix')
# else:
#   print('haha')

# name = 'Lin'
# print(name)
# name = 123
# print(name)

# a = 'abc'
# b = a
# a = 'Lin'
# print(b)

# print(9 / 3)
# print(10 // 3)
# print(10 % 3)

# print(99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999.0)

# print(ord('a'))
# print(chr(98))
# print('\u4e2d\u6587')

# x = b'ABC'
# print(x)

# print('ABC'.encode('ascii'))
# print('中文'.encode('UTF-8')) # b'\xe4\xb8\xad\xe6\x96\x87'

# print(len('ABC'))
# print(len(b'ABC'))
# print(len('中文'.encode('UTF-8')))

# str = 'xixi'
# print('Hello, %s' % 'world')
# print('%s want to make money %d' % (str, 10000000))
# print('%30d' % 1)
# print('%02d' % 1)
# print('%2d' % 1)
# print('%.2f' % 1)

# print('Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125)) # Hello, 小明, 成绩提升了 17.1%

# classmates = ['Lin', 'xlc', 'xlc']
# print(classmates[0]) # Lin
# print(len(classmates))
# print(classmates[-1]) # xlc
# classmates.insert(1, 'haha') 
# print(classmates)

# people = ('Lin', 'xlc', [1,2,3])
# people[2][1] = 1000
# print(people)

# age = 10
# if (age > 10):
#   print('> 10')
# elif (age < 10):
#   print('< 10')
# else:
#   print('= 10')

# fruits = ['apple', 'orange', 'pear']
# for fruit in fruits:
#   print(fruit)

# for number in range(5):
#   print(number)

# length = len(range(5))
# while (length > 0):
#   length = length-1
#   print(length)

# dict = {
#   'name': 'Lin',
#   'age': 20
# }

# print(dict)
# print(dict['name'])
# print('name' in dict)

# print(dict.get('name'))
# print(dict.get('born'))
# print(dict.get('born', -1))
# print(dict)

# print(dict.pop('name'))

# list = [1,2,3]
# dict[list] = 'list'

# s = set([1, 1 ,2 ,3 ])
# print(s.add(44))
# print(s.remove(44))
# print(s)

# tuple1 = (1,2,3)
# tuple2 = (1, (2,3))
# dict = {}
# dict[tuple1] = 1
# dict[tuple2] = 2 
# print(dict)

# def test (a):
#   if not isinstance(a, (int, float)):
#     raise TypeError('type orror')  
#   else:
#     print(a)

# test('aha')

# def test(a, b = 2, c = 3):
#   return a, b, c

# m = test(2, c = 1)
# print(m)

# def test (L = []):
#   L.append('end')
#   return L

# print(test())
# print(test())
# print(test())

# def test (*number):
#   print(number)
# test(1,2,3,4)

# list = [5,6,7,8]
# test(*list)

# def person (name, age, **other):
#   print(other)
# person('xlc', 20) # {}
# person('Lin', 20, city='guangzhou', money='little') # {'city': 'guangzhou', 'money': 'little'}

# other = {
#   'city': 'guangzhou'
# }
# person('Lin', 20, **other)

# def person (name, age, *kw, city, home):
#   print(city)
# person('Lin', 12, 'blue' , city='gz', home='everywhere')

# list = []
# list.append('x')

# g = (x * x for x in range(1, 11))
# print(g)

# print(next(g))
# print(next(g))
# print(next(g))
# for x in g:
#   print(x)

# def fib (max):
#   n, a, b = 0, 0, 1
#   try:
#     while (n < max):
#       yield b
#       a, b = b, a + b
#   except StopIteration as e:
#     print('Generator return value:', e.value)
#     break

# f = fib(100)
# print(f)

from collections import Iterator
def test ():
  a = 1
  yield a
g = test()
print(isinstance(g, Iterator))

