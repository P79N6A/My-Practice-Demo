# l = [1, 2, 3]
# def test (x):
#   return x * x

# result = map(test, l)
# print(list(result))

# from functools import reduce
# l = [1,2,3,4,5,6]
# def add (x, y):
#   return x + y
# result = reduce(add, l)
# print(result)

# def formatInput (name = ''):
#   name[0] = name[0].upper()
#   length = len(name)
#   i = 1
#   for i in length:
#     name[i] = name[i].lower()
#   return name

# print(list(map(formatInput, ['LIn', 'xlc'])))

# def isOdd (x):
#   if (x % 2 == 0):
#     return False
#   else:
#     return True

# l = filter(isOdd, range(1, 11))
# print(list(l))

# print(1 and 'o2i 2r3oij'.strip())

# # 获取奇数序列
# def oddIter ():
#   n = 1
#   while True:
#     n = n + 2
#     print('不会死循环吗？')
#     yield n

# def notDivisible (n: '要拿到判断素数的') -> '返回用来判断当前的数是否是素数的函数':
#   return lambda x: x % n > 0

# def primes ():
#   # 返回第一个素数 2
#   yield 2
#   # 获取奇数序列
#   it = oddIter()
#   while True:
#     # 取出序列的第一个数
#     n = next(it)
#     # 返回素数 n
#     yield n
#     # 构造新的序列。排除掉 n 的倍数的数
#     it = filter(notDivisible(n), it)

# g = primes()
# n = 0
# # 输出前 100 个素数咯
# while (n < 3):
#   n = n + 1
#   print(next(g))

# def test (a: 'it should be an int', b: 'a float' = 5.0) -> 'return a float':
#   # I miss u.
#   ''' I just want to be your everything. '''
#   print(test.__doc__)
#   ''' I just want to be your everything. '''
  
#   return a + b

# print(test(1, 4))

# def test (a: dict(type = int, helpWord = 'it should be an int'),
#           b: {'type': float, 'help': 'a float'}
#     ) -> {'type': 'float', 'help': 'return a float'}:
#   print(test.__annotations__)
#   return a + b
# test(1, 2)


# l = [1, -1, 12, 8, 9, 2, -10]
# print(sorted(l, reverse=True))

# # 闭包
# def count ():
#   fs = []
#   def f(j):
#     def g():
#       return j * j
#     return g
#   for i in range(1, 4):
#     fs.append(f(i))
#   return fs

# (f1, f2, f3) = count()
# print(f1()) # 1
# print(f2()) # 4

# 匿名表达式
f = lambda x: x *x

# 相当于
def f(x):
  return x * x

# 木有参数的写法
def f(x):
  return lambda: x * x

### 装饰器
def log(func):
  def wrapper (*arg, **kw):
    print('call %s():' % func.__name__)
    return func(*arg, **kw)
  return wrapper

import datetime
@log
def now ():
  print(datetime.datetime.now())
# now()


# 需要传参的 decorate
def log(text):
  def decorate (func):
    def wrapper (*arg, **kw):
      print(text)
      return func(*arg, **kw)
    return wrapper
  return decorate

@log('故梦')
def now ():
  print(datetime.datetime.now())
# now()

# 偏函数
import functools
int2 = functools.partial(int, base=2)
print(int2('1000'))