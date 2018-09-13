@testable
class MyTestClass {

}

function testable (target) {
  target.isTestable = true
}

MyTestClass.isTestable