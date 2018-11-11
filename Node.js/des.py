from pyDes import * # des 算法模块
import random # 随机数模块
import pyDes

#数据加密
def dataEncrypt(key , data): #key为密钥，data为明文
    if (type(key) != type(b'1')):
        # print('l: %d' % len(key))
        key = key.encode()
        # print('key')
        # print(key)
    # print(len(key))
    k = des(key, pyDes.CBC, "\0\0\0\0\0\0\0\0", pad=None)
    d = k.encrypt(data)#加密
    return d

data = b'12345678' #明文
key = b'abcdefgh' #密钥
firstCrypt = dataEncrypt(key, data) #密文

#字符串转二进制
def strToBit(s):
    # print(s)
    # print(len(' '.join([bin(c).replace('0b', '').zfill(8) for c in s])))
    return ''.join([bin(c).replace('0b', '').zfill(8) for c in s])

#二进制转字符串
def bitToStr(s):
    # arr = []
    # # 分割成8组
    # for i in range(0, 8):
    #     arr.append(s[i*8: (i+1)*8])

    # print('arr')
    # print(int(s, 2).to_bytes(8, 'big'))
    # print(len(int(s, 2).to_bytes(8, 'big')))
    # print(arr)
    # print(''.join([chr(i) for i in [int(b, 2) for b in arr]]))
    # print([int(b, 2) for b in arr])
    # return ''.join([chr(i) for i in [int(b, 2) for b in arr]])
    return int(s, 2).to_bytes(8, 'big')

#生成随机数
def getRan():
    return random.randint(0,63) #生成0-63的随机数

#计算两字符串不同的位数
def countDiff(str1, str2):
    # print('str1: %s' % str1)
    # print('str2: %s' % str2)
    length = len(str1)
    count = 0
    for i in range(0, length):
       if(str1[i] != str2[i]):
           count = count + 1 
    return count

#改变随机一位的值
def changeRanBit(message , changeBitNum): #bitNum是要改变的次数，1-64
    temp = None
    change = []  #记录已经改变过的位置
    for i in range(0,changeBitNum):
        ran = getRan() #获取随机数
        while(ran in change and len(change) != 64): #如果随机产生的位数重复则重新获取
            ran = getRan()
        change.append(ran) #把获得的随机数加入记录数组
        # print('change 数组')
        # print(change)
        if message[ran] == '0': #改变值
            temp = '1'
        else:
            temp = '0'
        # print('ran: %d' %ran)
        message = message[:ran] + temp + message[ran+1:] #重新拼接数组
        # print('message: %s' % message)
        # print('message len: %d' %len(message))
    return message

#多次计算取平均值
def getAvg(str:'要改变的字符串', num:'重复计算的次数', bitNum:'更改的次数', changeType: '改的是明文(m)还是密钥(k)'):
    changeStr = [] #记录出现过的字符串
    count = 0
    for i in range(0,num):
        afterChangeBit = changeRanBit(str, bitNum) #改变值
        while(afterChangeBit in changeStr and bitNum != 64): #如果改变后的字符串有重复则重新改变
            afterChangeBit = changeRanBit(str, bitNum)
        changeStr.append(afterChangeBit) #把改变后的字符串放入记录数组
        afterChangeStr = bitToStr(afterChangeBit) #把二进制字符串变成8位字节
        if(changeType == 'd'): #改变的是明文
            changeCrypt = strToBit(dataEncrypt(afterChangeStr, key))
        else: #改变的是密钥
            changeCrypt = strToBit(dataEncrypt(data, afterChangeStr))
        count = count + countDiff(strToBit(firstCrypt), changeCrypt) #记录改变的总位数
    return count / num #求平均值

def main():
    strBit = strToBit(data) #把明文转为二进制格式
    for i in range(1,65):
        avg = getAvg(strBit, 20, i, 'd') #求平均改变位数
        print('密钥固定，明文改变%d位时，密文平均改变了%.1f位'%(i, avg))
    print('********************************************')
    strBit = strToBit(key)
    for i in range(1,65):
        avg = getAvg(strBit, 20, i, 'k')
        print('明文固定，密钥改变%d位时，密文平均改变了%.1f位'%(i, avg))

main()








