var makeSound = function (animal) {
  animal.sound()
}

var Duck = function () {}
Duck.prototype.sound = function () {
  console.log('嘎嘎')
}

var duck = new Duck()

makeSound(duck)