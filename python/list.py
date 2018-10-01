# list = [1, 2, 3]
# print(list[-3:-1])

# l = list(range(100))
# print(l[:10])
# print(l[90:])
# print(l[::10])
# print(l[:5:2])
# print(l[:])

# t = tuple(range(100))
# print(t[::10])

# str = 'xixi'
# print(str[0])

l = [1,2,3]
for item in l:
  print(item)

d = {
  'name': 'xlc',
  'age': 20
}
for key in d:
  print(key)
for value in d.values():
  print(value)
for k, v in d.items():
  print(k, v)

l = [x * x for x in range(1, 11)]
print(l)