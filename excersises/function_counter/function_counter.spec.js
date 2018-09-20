import createCounter from './function_counter';

describe('Function counter', () => {
  test('should create counter with default value', () => {
    const counter = createCounter();
    expect(counter.value).toEqual(0);
  });

  test('should create counter with start value', () => {
    const counter = createCounter(10);
    expect(counter.value).toEqual(10);
  });

  test('should have defined getter property', () => {
    const counter = createCounter(5);
    const descriptor = Object.getOwnPropertyDescriptor(counter, 'value');

    expect(descriptor).toHaveProperty('get');
  });

  describe('#increment', () => {
    test('should increase counter value', () => {
      const counter = createCounter(41);

      counter.increment();
      expect(counter.value).toEqual(42);

      counter.increment();
      expect(counter.value).toEqual(43);
    });
  });

  describe('#decrement', () => {
    test('should decrease counter value', () => {
      const counter = createCounter(11);

      counter.decrement();
      expect(counter.value).toEqual(10);

      counter.decrement();
      expect(counter.value).toEqual(9);
    });
  });
});
