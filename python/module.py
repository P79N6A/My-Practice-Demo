#!/usr/bin/env python3
# -*- coding: utf-8 -*-

' a test module '

__author__ = 'Linhh'

import sys

def test ():
  args = sys.argv
  if (len(args) == 1):
    print('hello world')

test()

def _test():
  pass
_test()