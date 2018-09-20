import Counter from './class_counter';

describe('Class Counter', () => {
  describe('Counter', () => {
    test('should create counter with default value', () => {
      const counter = new Counter();
      expect(counter.value).toEqual(0);
    });

    test('should create counter with start value', () => {
      const counter = new Counter(-5);
      expect(counter.value).toEqual(-5);
    });

    describe('#increment', () => {
      test('should increase counter value', () => {
        const counter = new Counter(41);

        counter.increment();
        expect(counter.value).toEqual(42);

        counter.increment();
        expect(counter.value).toEqual(43);
      });
    });

    describe('#decrement', () => {
      test('should decrease counter value', () => {
        const counter = new Counter(11);

        counter.decrement();
        expect(counter.value).toEqual(10);

        counter.decrement();
        expect(counter.value).toEqual(9);
      });
    });
  });
});
