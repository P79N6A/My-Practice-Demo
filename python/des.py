from pyDes import *

data = "xlc"
k = des("hahahaha", CBC, "10000309", pad=None, padmode=PAD_PKCS5)
d = k.encrypt(data)

print("%r" % d)
