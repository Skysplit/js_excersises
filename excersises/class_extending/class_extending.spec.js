import { Animal, Dog, Bird } from './class_extending';

describe('Class extending', () => {
  describe('Animal', () => {
    test('should create animal with a name', () => {
      const animal = new Animal('Judy');

      expect(animal.name).toEqual('Judy');
      expect(animal.say()).toEqual('I am Judy');
    });
  });

  describe('Dog', () => {
    test('should inherit from Animal', () => {
      expect(Dog.prototype).toBeInstanceOf(Animal);
    });

    test('should allow setting dog color', () => {
      const dog = new Dog('Borky', 'beige');

      expect(dog.name).toEqual('Borky');
      expect(dog.color).toEqual('beige');
    });

    describe('#say', () => {
      // Challenge: try using parent's method method when creating this one
      // Check `super` documentation
      test('should introduce itself', () => {
        const dog = new Dog('Borky', 'beige');
        expect(dog.say()).toEqual('I am Borky and I am beige');
      });
    });
  });

  describe('Bird', () => {
    test('should inherit from Animal', () => {
      expect(Bird.prototype).toBeInstanceOf(Animal);
    });

    test('should have name like all animals do', () => {
      const bird = new Bird('Rico');
      expect(bird.name).toEqual('Rico');
    });

    describe('#say', () => {
      test('should introduce itself', () => {
        const bird = new Bird('Rico');
        expect(bird.say()).toEqual('I am flying Rico!');
      });
    });

    describe('#fly', () => {
      test('should make bird fly', () => {
        const bird = new Bird('Kowalski');
        expect(bird.fly()).toEqual('*Kowalski is flapping his wings*');
      });
    });
  });
});
