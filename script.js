// Pattern definition
/** Create an abstract Animal class that only have speak method */
class Animal {
  /** Very simple constructor */
  constructor() { }

  /** Empty speak method, to explicit the required methods */
  speak = () => ''
}

/** Dog class inherit from Animal */
class Dog extends Animal {
  speak = () => 'Ouaf'
}

/** Cat class inherit from Animal */
class Cat extends Animal {
  speak = () => 'Miaou'
}

/** Duck class inherit from Animal */
class Duck extends Animal {
  speak = () => 'Quack'
}

/** Factory who creates the Animals */
class AnimalFactory {

  /** Methods who randomly creates and return an Animal */
  createAnimal = () => {
    const rand = Math.random() * 3

    if( rand <= 1 ) return new Dog()
    else if ( rand <= 2 ) return new Cat()
    else return new Duck()
  }
}

// Pattern usage
const factory = new AnimalFactory()
console.log(factory.createAnimal().speak())
console.log(factory.createAnimal().speak())
console.log(factory.createAnimal().speak())
console.log(factory.createAnimal().speak())
console.log(factory.createAnimal().speak())
