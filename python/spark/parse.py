# 1
import re
DATAFILE_PATTERN = '^(.+),"(.+)",(.*),(.*),(.*)'

def removeQuotes(s):
    return ''.join(i for i in s if i != '"')

def parseDatafileLine(datafileLine):
    match = re.search(DATAFILE_PATTERN, datafileLine)
    if match is None:
        print 'Invalid datafile line: %s' % datafileLine
        return (datafileLine, -1)
    elif match.group(1) == '"id"':
        print 'Header datafile line: %s' % datafileLine
        return (datafileLine, 0)
    else:
        product = '%s %s %s' % (match.group(2), match.group(3), match.group(4))
        return ((removeQuotes(match.group(1)), product), 1)


#2
import sys
import os

baseDir = os.path.join('/data')
inputPath = os.path.join('12', '4')

GOOGLE_PATH = 'Google.csv'
GOOGLE_SMALL_PATH = 'Google_small.csv'
AMAZON_PATH = 'Amazon.csv'
AMAZON_SMALL_PATH = 'Amazon_small.csv'
GOLD_STANDARD_PATH = 'Amazon_Google_perfectMapping.csv'
STOPWORDS_PATH = 'stopwords.txt'

def loadData(path):
    filename = os.path.join(baseDir, inputPath, path)
    raw = (sc
           .textFile(filename, 4, 0)
           .map(parseDatafileLine)
           .cache())
    failed = (raw
              .filter(lambda s: s[1] == -1)
              .map(lambda s: s[0]))
    for line in failed.take(10):
        print '%s - Invalid datafile line: %s' % (path, line)
    valid = (raw
             .filter(lambda s: s[1] == 1)
             .map(lambda s: s[0])
             .cache())
    print '%s - Read %d lines, successfully parsed %d lines, failed to parse %d lines' % (path,
                                                                                        raw.count(),
                                                                                        valid.count(),
                                                                                        failed.count())
    return valid

googleSmall = loadData(GOOGLE_SMALL_PATH)
# 省略输出
google = loadData(GOOGLE_PATH)
# 省略输出
amazonSmall = loadData(AMAZON_SMALL_PATH)
# 省略输出
amazon = loadData(AMAZON_PATH)
# 省略输出

for line in googleSmall.take(3):
    print 'google: %s: %s\n' % (line[0], line[1])
for line in amazonSmall.take(3):
    print 'amazon: %s: %s\n' % (line[0], line[1])


#3
quickbrownfox = 'A quick brown fox jumps over the lazy dog.'
split_regex = r'\W+'

def simpleTokenize(string):
    return [x for x in re.split(split_regex, string.lower()) if x != '']

print simpleTokenize(quickbrownfox)


#4
stopfile = os.path.join(baseDir, inputPath, STOPWORDS_PATH)
stopwords = set(sc.textFile(stopfile).collect())

print 'These are the stopwords: %s' % stopwords

def tokenize(string):
    return [x for x in re.split(split_regex, string.lower()) if x != '' and x not in stopwords]

print tokenize(quickbrownfox)


#5
amazonRecToToken = amazonSmall.map(lambda x : (x[0], tokenize(x[1])))
googleRecToToken = googleSmall.map(lambda x : (x[0], tokenize(x[1])))

def countTokens(vendorRDD):
    return vendorRDD.flatMap(lambda x : x[1]).count()

totalTokens = countTokens(amazonRecToToken) + countTokens(googleRecToToken)
print 'There are %s tokens in the combined datasets' % totalTokens


#6 (id, [])
amazonRecMost = (amazonRecToToken
                    .map(lambda x : (x[0], len(x[1])))
                    .takeOrdered(1, lambda x : x[1] * -1))[0]
print 'The Amazon record with ID %s has the most tokens %s' %(amazonRecMost[0], amazonRecMost[1])


#7
def tf(tokens):
    N = float(len(tokens))
    tokenDict = {}
    for token in tokens:
        tokenDict[token] = tokenDict[token] + 1 if token in tokenDict.keys() else 1
    for k in tokenDict.keys():
        tokenDict[k] = tokenDict[k] / N
    return tokenDict

print tf(tokenize(quickbrownfox))


#8
corpusRDD = amazonRecToToken .union(googleRecToToken)


#9
def idfs(corpus):
    N = float(corpus.count())
    uniqueTokens = corpus.map(lambda x : list(set(x[1])))
    tokenCountPairTuple = uniqueTokens.flatMap(lambda tokens : [(t, 1) for t in tokens])
    tokenSumPairTuple = tokenCountPairTuple.reduceByKey(lambda a, b : a + b)
    return (tokenSumPairTuple.map(lambda (t, f) : (t, N / f)))

idfsSmall = idfs(corpusRDD)

uniqueTokenCount = idfsSmall.count()

print 'There are %s unique tokens in the small datasets.' % uniqueTokenCount

print idfsSmall.takeOrdered(5, lambda s: s[1])


#10
def tfidf(tokens, idfs):
    tfIdfDict = {}
    tfs = tf(tokens)
    for token in tfs.keys():
        tfIdfDict[token] = tfs[token] * idfs[token]
    return tfIdfDict

recb000hkgj8k = amazonRecToToken.filter(lambda x: x[0] == 'b000hkgj8k').collect()[0][1]
idfsSmallWeights = idfsSmall.collectAsMap()
rec_b000hkgj8k_weights = tfidf(recb000hkgj8k, idfsSmallWeights)
print 'Amazon record "b000hkgj8k" has tokens and weights:\n%s' % rec_b000hkgj8k_weights


#11
import math

def dotprod(a, b):
    dp = 0.0
    for k in set(a.keys()).intersection(set(b.keys())):
        dp += a[k] * b[k]
    return dp

def norm(a):
    x = 0.0
    for k in a.keys():
        x += a[k] ** 2
    return math.sqrt(x)

def cossim(a, b):
    return dotprod(a, b) / (norm(a) * norm(b))

testVec1 = {'foo': 2, 'bar': 3, 'baz': 5 }
testVec2 = {'foo': 1, 'bar': 0, 'baz': 20 }
dp = dotprod(testVec1, testVec2)
nm = norm(testVec1)
print dp, nm


## 12
def cosineSimilarity(string1, string2, idfsDictionary):
    w1 = tfidf(tokenize(string1), idfsDictionary)
    w2 = tfidf(tokenize(string2), idfsDictionary)
    return cossim(w1, w2)

cossimAdobe = cosineSimilarity('Adobe Photoshop',
                               'Adobe Illustrator',
                               idfsSmallWeights)
print cossimAdobe


## 13
crossSmall = (googleSmall
              .cartesian(amazonSmall)
              .cache())

def computeSimilarity(record):
    googleRec = record[0]
    amazonRec = record[1]
    googleURL = googleRec[0]
    amazonID = amazonRec[0]
    googleValue = googleRec[1]
    amazonValue = amazonRec[1]
    cs = cosineSimilarity(googleValue, amazonValue, idfsSmallWeights)
    return (googleURL, amazonID, cs)

similarities = (crossSmall
                .map(computeSimilarity)
                .cache())
def similar(amazonID, googleURL):
    return (similarities
            .filter(lambda record: (record[0] == googleURL and record[1] == amazonID))
            .collect()[0][2])

similarityAmazonGoogle = similar('b000o24l3q', 'http://www.google.com/base/feeds/snippets/17242822440574356561')
print 'Requested similarity is %s.' % similarityAmazonGoogle


## 14
GOLDFILE_PATTERN = '^(.+),(.+)'

def parse_goldfile_line(goldfile_line):
    match = re.search(GOLDFILE_PATTERN, goldfile_line)
    if match is None:
        print 'Invalid goldfile line: %s' % goldfile_line
        return (goldfile_line, -1)
    elif match.group(1) == '"idAmazon"':
        print 'Header datafile line: %s' % goldfile_line
        return (goldfile_line, 0)
    else:
        key = '%s %s' % (removeQuotes(match.group(1)), removeQuotes(match.group(2)))
        return ((key, 'gold'), 1)

goldfile = os.path.join(baseDir, inputPath, GOLD_STANDARD_PATH)
gsRaw = (sc
         .textFile(goldfile)
         .map(parse_goldfile_line)
         .cache())

gsFailed = (gsRaw
            .filter(lambda s: s[1] == -1)
            .map(lambda s: s[0]))

for line in gsFailed.take(10):
    print 'Invalid goldfile line: %s' % line

goldStandard = (gsRaw
                .filter(lambda s: s[1] == 1)
                .map(lambda s: s[0])
                .cache())

print 'Read %d lines, successfully parsed %d lines, failed to parse %d lines' % (gsRaw.count(),
                                                                                 goldStandard.count(),
                                                                                 gsFailed.count())


## 15
sims = similarities.map(lambda x : (x[1] + ' ' + x[0], x[2]))

trueDupsRDD = (sims
               .join(goldStandard)
               .map(lambda x : (x[0], x[1][0])))
trueDupsCount = trueDupsRDD.count()
# 省略部分输出
print 'There are %s true duplicates.' % trueDupsCount


## 16
avgSimDups = (trueDupsRDD
              .map(lambda x : x[1])
              .reduce(lambda a, b : a + b) / trueDupsCount)
print 'The average similarity of true duplicates is %s.' % avgSimDups


## 17
nonDupsRDD = (sims
              .join(gsFailed)
              .map(lambda x : (x[0], x[1][0])))
avgSimNon = (nonDupsRDD
             .map(lambda x : x[1])
             .reduce(lambda a, b : a + b) / trueDupsCount)
# 省略部分输出
print 'And for non duplicates, it is %s.' % avgSimNon

# gsFailed 


# 18