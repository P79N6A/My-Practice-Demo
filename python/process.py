# from multiprocessing import Process
# import os

# # 子进程执行的代码
# def run_proc (name):
#   print('Run child process %s (%s)' % (name, os.getpid()))

# print(os.getpid())

# if __name__ == '__main__':
#   print('Parent process %s.' % os.getpid())
#   p = Process(target = run_proc, args = ('test',))
#   print('child process will start')
#   p.start()
#   p.join()
#   print('child process end')

# from multiprocessing import Pool
# import os, time, random

# def long_time (name):
#   print('Run task %s (%s)' % (name, os.getpid()))
#   start = time.time()
#   time.sleep(random.random() * 3)
#   end = time.time()
#   print('child process (%s) execute %.2f s' % (name, end - start))

# if __name__ == '__main__':
#   print('Parent process %s' % os.getpid())
#   # 创建容量为4的进程池
#   p = Pool(4)
#   # 开启 5 个进程
#   for i in range(5):
#     p.apply_async(long_time, args=(i,))
#   print('waiting...')
#   p.close() # 调用后，不能再创建子进程
#   p.join() # 等待子进程执行完毕（进程同步）
#   print('end')

import subprocess

r = subprocess.call(['nslookup', 'www.python.org'])
print('exit code', r)