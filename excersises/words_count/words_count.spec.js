import wordsCount from './words_count';

describe('Words count', () => {
  test('should count words in phrase', () => {
    const phrase = 'foo bar baz foo bar foo';
    expect(wordsCount(phrase)).toEqual({
      foo: 3,
      bar: 2,
      baz: 1,
    });
  });

  test('should ignore doubled whitespaces', () => {
    const phrase = 'foo  bar  foo';
    expect(wordsCount(phrase)).toEqual({
      foo: 2,
      bar: 1,
    });
  });
});
