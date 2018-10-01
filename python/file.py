# f = open('test.txt', 'r')
# f.read()
# f.close()

# with open('test.txt', 'r', encoding="utf-8") as f:
#   print(f.read())


## 写
# with open('test.txt', 'a', encoding = "utf-8") as f:
#   f.write('只剩下钢琴陪我弹了一天')


## StringIO
# from io import StringIO
# f = StringIO()
# f.write('I ')
# f.write('won\'t ')
# f.write('give ')
# f.write('up')

# print(f.getvalue())

## BytesIo
# from io import BytesIO
# f = BytesIO()
# f.write('故梦'.encode('utf-8'))
# print(f.getvalue())


## 操作文件和目录
# import os
# print(os.environ)

# p = os.path.abspath('.')
# pa = os.path.join(p, 'testdir')
# print(os.path.split(pa))
# print(os.path.splitext(pa))
# os.mkdir('testdir')
# os.rmdir('testdir')
# os.rename('test.txt', 'haha.txt')
# os.remove('haha.txt')

# print([x for x in os.listdir('.') if os.path.isfile(x) and os.path.splitext(x)[1] == '.py'])

# import pickle
# import os
# d = dict(
#   name = 'Lin',
#   age = 20
# )
# p = pickle.dumps(d)
# print(p)

# with open('test.txt', 'wb') as f:
#   pickle.dump(d, f)

# with open('test.txt', 'rb') as f:
#   print(pickle.load(f))


## json
import json
# d = dict(
#   name = 'Lin',
#   age = 20
# )

# j = json.dumps(d)
# print(j)
# u = json.loads(j)
# print(u)

class Test (object):
  def __init__ (self):
    self.name = 'Lin'
    self.age = 20

t = Test()
print(json.dumps(t.__dict__))