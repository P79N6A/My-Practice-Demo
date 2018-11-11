from pyDes import * # des 算法模块
import random # 随机数模块

# 生成密文
def getCrypt (message: 'byte', key: 'byte'):
  k = des(key, mode=ECB, IV=None, pad=None)
  d = k.encrypt(message)
  return d

# 比较两个字符串位数不同
def countDiffBit (s1, s2):
  length = len(s1)
  count = 0
  for i in range(0, length):
    if (s1[i] != s2[i]):
      count = count + 1
  return count

# 改变位数
def changeBit (message: 'byte 类型的', bitNum):
  # 用来记录当前改变的位置
  changePosList = set([])
  for i in range(0, bitNum):
    # 随机获取还木有改变过的位置
    pos = getPos()
    # 当随机数重复取得，并且不是需要改变64位的时候
    # 就重新取随机数
    # 当需要改变64位的时候，只会有一种改变情况的呢
    while (pos in changePosList and len(changePosList) != 64):
      pos = getPos()
    changePosList.add(pos)
    # 当前位置的二进制数取反
    res = '1' if message[pos] == '0' else '0'
    # 重新拼接结果
    message = message[:pos] + res + message[pos+1:]
  return message

# 生成随机数 0-63
def getPos ():
  return random.randint(0, 63)

# 字节转为二进制字符串
def byteToBit (byte):
  bitStr = bin(int.from_bytes(byte, 'big'))[2:].rjust(len(byte) * 8, '0')
  return bitStr 

# 二进制字符串转为字节
def bitToByte (bitStr):
  n = int(bitStr, 2)
  str = n.to_bytes(len(bitStr) // 8, 'big')
  return str

# 多次计算，取得改变的密文位数的平均值
def getAverageChangeNum (str: '等待转换的字符串', countTimes: '要重复计算的次数', 
                        bitNum: '要改变的位数', type: '改的是明文(m)还是密钥(k)'):
  # 用来存放改变后的字符串
  changeStr = set([])
  # 用来存放总共改变的次数
  total = 0
  # 获取不重复的、指定次数的改变后的字符串
  for i in range(0, countTimes):
    afterChange = changeBit(str, bitNum)
    # 判断是否有重复，有重复的话重新获取
    # 当需要改变64位的时候，由于全部都改变了，因而只会有一种改变的结果
    while (afterChange in changeStr and bitNum != 64):
      afterChange = changeBit(str, bitNum)
    changeStr.add(afterChange)
    # 获取字符串
    afterChange = bitToByte(afterChange)
    # 判断当前是改明文还是密钥
    if (type == 'm'):
      changeCrypt = byteToBit(getCrypt(afterChange, key))
    else:
      changeCrypt = byteToBit(getCrypt(message, afterChange))
    # 获取前后密文的改变的位数
    total = total + countDiffBit(byteToBit(crypt), changeCrypt)
    # print('当前一共改了%d位' % total)
  # 返回前后密文的平均改变的位数
  return total / countTimes

message = b'12345678' # 初始明文
key = b'abcdefgh' # 初始密钥
crypt = getCrypt(message, key) # 初始密文

# 主函数
def main ():
  # 把明文从字符串转为二进制
  bitStr = byteToBit(message)
  # 明文从改变1位到64位
  for i in range(1, 65):
    c = getAverageChangeNum(bitStr, 10, i, 'm')
    print('当改变%d位明文时，平均改变了密文 %.1f位' %(i, c))
  print('----------------------------------------')
  # 把密钥从字符串转为二进制
  bitStr = byteToBit(key)
  # 密钥从改变1位到64位
  for i in range(1, 65):
    c = getAverageChangeNum(bitStr, 10, i, 'k')
    print('当改变%d位密钥时，平均改变了密文 %.1f位' %(i, c))

main()