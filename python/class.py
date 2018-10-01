# # class Student (object):
# #   def __init__ (self, name, score):
# #     self.__name = name
# #     self.__score = score
  
# #   def print_score (self):
# #     print('name: %s score: %s' % (self.name, self.score))

# #   def _test ():
# #     print('aha')

# # s1 = Student('Lin', 99)
# # # s1.print_score()
# # # print(s1.__name)
# # print(s1._Student__name)

# ## 继承
# # 父类
# class Animal (object):
#   def run (self):
#     print('Aninmal can run')

# # 子类
# class Dog (Animal):
#   def run (self):
#     print('Dog is runing')

# class Cat (Animal):
#   def run (self):
#     print('Cat is running')

# dog = Dog()
# cat = Cat()
# dog.run()
# cat.run()

# print(isinstance(dog, Dog))
# print(isinstance(dog, Animal))

# def run_twice (animal):
#   animal.run()

# run_twice(dog)
# run_twice(Animal())


## 获取对象信息
# print(type(123)) # <class 'int'>
# print(type('Lin')) # <class 'str'>
# print(type(())) # <class 'tuple'>
# print(type({})) # <class 'dict'>
# print(type(type)) # <class 'type'>

# def fn ():
#   pass
# print(type(fn)) # <class 'function'>

# import types
# print(type(123) == int)
# print(type(fn) == types.FunctionType)


# class Animal (object):
#   pass
# class Dog (Animal):
#   pass
# print(isinstance(Dog(), Animal))
# print(isinstance(Dog(), (Animal, Dog)))

# print(dir(Animal))

# print('Lin'.__len__())

# class A (object):
#   def __init__ (self):
#     pass
#     # self.x = 'haha'

# A.x = 'xixi'
# print(A().x)

# class Test (object):
#   pass

# t1 = Test()
# # 往 Test 类上添加方法
# Test.print = lambda self: print('xixi')
# t1.print()

## 限制实例属性
# class Student (object):
#   __slots__ = ('name', 'age') # 通过 tuple，里面的属性就是允许的属性名

# s = Student()
# s.name = 'Lin'
# s.age = 20
# s.func = lambda self: print('test')
# s.score = 99 # AttributeError: 'Student' object has no attribute 'score'

# ## 属性装饰器
# class Student (object):
#   ''' 这个相当于 getter '''
#   @property
#   def score (self):
#     return self._score
#   ''' 这个相当于 setter '''
#   @score.setter
#   def score (self, value):
#     if value > 0 and value < 100:
#       self._score = value
#     else:
#       raise ValueError('must between 0 to 100')

# s = Student()
# s.score = 10
# s.score = 1000

## 多重继承
# class Animal (object):
#   def say (self):
#     print('I\'m animal.')
#   pass
# class Runable (object):
#   def run (self):
#     print('I can run.')
#   pass
# class Dog (Animal, Runable):
#   pass
# dog = Dog()
# dog.say() # I'm animal.
# dog.run() # I can run.


## 定制类
class Student (object):
  def __str__ (self):
    return 'I will try to give you up.'

stu = Student()
# print(stu)

# 迭代
class Fib (object):
  def __init__ (self):
    # 初始化计数器
    self.a = 0
    self.b = 1
  def __iter__ (self):
    return self
  def __next__ (self):
    (self.a, self.b) = (self.b, self.a + self.b)
    # 退出循环
    if self.a > 500:
      raise StopIteration()
    else:
      return self.a

# for i in Fib():
#   print(i)

# getItem
class Fib (object):
  def __getitem__ (self, n):
    a, b = 1, 1
    for x in range (n):
      a, b = b, a + b
    return a

f = Fib()
# print(f[100])

# getattr
class Test (object):
  def __init__ (self):
    self.a = 'xixi'
  def __getattr__ (self, attr):
    print('attr', attr)
    return None

# t = Test()
# t.a
# t.b

# call
class Test (object):
  def __call__ (self, arg):
    print('call myself')
    print(arg)
t = Test()
# t(1)


## 枚举类
from enum import Enum
Month = Enum('Month', ('Jan', 'Feb'))
print(Month.Jan)
print(Month.Jan.value)
print(Month.Jan.name)

class Week (Enum):
  Mon = 10
print(Week.Mon)
print(Week(10))