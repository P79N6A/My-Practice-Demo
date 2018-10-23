import matplotlib.pyplot as plt

# plt.figure()
# plt.plot(year, pop)
# plt.show()

#2
# plt.figure()
# year = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014]
# pop = [6.49, 6.558, 6.656, 6.725, 6.804, 6.884, 6.965, 7.043, 7.125, 7.207]
# pop_cn = [1.30756, 1.31448, 1.32129, 1.32802, 1.33450, 1.34091, 1.34735, 1.35404, 1.36072, 1.36782]
# plt.plot(year, pop, color = 'g')
# plt.plot(year, pop_cn, linestyle = '--', color = 'r')
# plt.show()

#3
# plt.figure()
# year = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014]
# pop = [6.49, 6.558, 6.656, 6.725, 6.804, 6.884, 6.965, 7.043, 7.125, 7.207]
# pop_cn = [1.30756, 1.31448, 1.32129, 1.32802, 1.33450, 1.34091, 1.34735, 1.35404, 1.36072, 1.36782]
# plt.plot(year, pop, color = 'g', label = 'World population')
# plt.plot(year, pop_cn, linestyle = '--', color = 'r', label = 'China population')
# plt.legend()
# plt.show()

#4
# plt.figure()
# year = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014]
# pop = [6.49, 6.558, 6.656, 6.725, 6.804, 6.884, 6.965, 7.043, 7.125, 7.207]
# plt.title('World Population Summary')
# plt.xlabel('Year')
# plt.ylabel('Polulation')
# plt.plot(year, pop, color = 'b')
# plt.show()

#5
# plt.figure()
# year = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014]
# pop = [6.49, 6.558, 6.656, 6.725, 6.804, 6.884, 6.965, 7.043, 7.125, 7.207]
# plt.plot(year, pop, color = 'b')
# plt.title('World Population Summary')
# plt.xlabel('Year')
# plt.ylabel('Polulation')
# plt.yticks([6, 6.5, 7, 7.5], ['6B', '6.5B', '7B', '7.5B'])
# plt.show()

#6
# plt.figure()
# year = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014]
# pop = [6.49, 6.558, 6.656, 6.725, 6.804, 6.884, 6.965, 7.043, 7.125, 7.207]
# plt.scatter(year, pop)
# plt.title('World Population Summary')
# plt.xlabel('Year')
# plt.ylabel('Polulation(Billion)')
# plt.show()

#7
# plt.figure()
# year = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014]
# pop = [6.49, 6.558, 6.656, 6.725, 6.804, 6.884, 6.965, 7.043, 7.125, 7.207]
# plt.scatter(year, pop)
# plt.title('World Population Summary')
# plt.xlabel('Year')
# plt.ylabel('Polulation(Billion)')
# plt.text(2013, 7.13, '2013')
# plt.show()

#8
# plt.figure()
# year = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014]
# pop = [6.49, 6.558, 6.656, 6.725, 6.804, 6.884, 6.965, 7.043, 7.125, 7.207]
# pop_cn = [1.30756, 1.31448, 1.32129, 1.32802, 1.33450, 1.34091, 1.34735, 1.35404, 1.36072, 1.36782]
# f, (ax1, ax2) = plt.subplots(2, sharex = True)
# ax1.scatter(year, pop)
# ax1.set_title('World Population Summary')
# ax2.scatter(year, pop_cn)
# ax2.set_title('China Population Summary')
# plt.show()

#9
# fig = plt.figure()
# year = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014]
# pop = [6.49, 6.558, 6.656, 6.725, 6.804, 6.884, 6.965, 7.043, 7.125, 7.207]
# pop_cn = [1.30756, 1.31448, 1.32129, 1.32802, 1.33450, 1.34091, 1.34735, 1.35404, 1.36072, 1.36782]

# ax3 = fig.add_subplot(111)
# ax3.plot(year, pop, color = 'g', label = 'World population')
# ax3.set_ylabel('World population')
# ax3.set_xlabel('Year')
# ax3.set_title('Double Y axis')

# ax4 = ax3.twinx()
# ax4.plot(year, pop_cn, color = 'r', linestyle = '--', label = 'China population')
# ax4.set_ylabel('China population')

# plt.show()

# 10
# plt.savefig('figure.svg', dpi = 400, bbox_inches = 'tight')

#11
import numpy as np
height = np.array([1.69,1.88,1.56,1.68,1.57,1.78,1.67,1.77])
weight = np.array([55,78,50,60,48,89,44,80])
plt.figure()
plt.scatter(height, weight)
plt.title('weight-height')
plt.xlabel('height')
plt.ylabel('weight')
plt.show()

