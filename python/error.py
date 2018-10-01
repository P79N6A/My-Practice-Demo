# import logging

# def foo(s):
#     return 10 / int(s)

# def bar(s):
#     return foo(s) * 2

# def main():
#     try:
#         bar('0')
#     except Exception as e:
#         logging.exception(e)

# main()
# print('continue execute')

# def foo(s):
#     n = int(s)
#     if n==0:
#         raise ValueError('invalid value: %s' % s)
#     return 10 / n

# def bar():
#     try:
#         foo('0')
#     except ValueError as e:
#         print('ValueError!')
#         raise

# bar()

## 调试
# def foo (s):
#   n = int(s)
#   assert n != 0, 'n is zero'

# def main():
#   foo('0')

# main()

# import logging
# logging.basicConfig(level=logging.INFO)
# s = '0'
# n = int(s)
# logging.info('n = %d' % n)
# print(10 / n)

import pdb

s = '0'
n = int(s)
pdb.set_trace() # 运行到这里会暂停（类似打断点）
print(10 / 0)