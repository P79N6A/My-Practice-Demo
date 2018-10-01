import unittest

from mydict import Dict

class TestDict (unittest.TestCase):
  def test_init (self):
    d = Dict(a = 1, b = 'test')
    self.assertEqual(d.a, 2, msg='...')
    

unittest.main()