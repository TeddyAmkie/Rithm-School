describe('#charsInOrder', function() {
  it('should_return_false_for_long_string', function() {
    // Failure message:
    // charsInOrder should return false if the first string is longer than the second
    expect(charsInOrder('test', 't')).toBe(false);
    expect(charsInOrder('hello world', 'hello')).toBe(false);
  });
  it('should_return_true_for_empty_first_string', function() {
    // Failure message:
    // charsInOrder should return true if the first string is empty
    expect(charsInOrder('', 'test')).toBe(true);
    expect(charsInOrder('', 'another test')).toBe(true);
    expect(charsInOrder('', '')).toBe(true);
  });
  it('should_return_false_for_empty_second_string', function() {
    // Failure message:
    // charsInOrder should return true if the first string is empty
    expect(charsInOrder('a', '')).toBe(false);
    expect(charsInOrder('abc', '')).toBe(false);
  });
  it('should_return_true_for_substrings', function() {
    // Failure message:
    // charsInOrder should return true if the characters in the first string
    // form a subsequence of the characters in the second string
    expect(charsInOrder('hello', 'hello world')).toBe(true);
    expect(charsInOrder('yo', 'yo')).toBe(true);
    expect(charsInOrder('sing', 'sting')).toBe(true);
    expect(charsInOrder('abc', 'abracadabra')).toBe(true);
    expect(charsInOrder('aaa', "Madam, I'm Adam")).toBe(true);
    expect(
      charsInOrder(
        'Thqckbrwnfxjmpdvrthlzydg',
        'The quick brown fox jumped over the lazy dog'
      )
    ).toBe(true);
  });
  it('should_return_false_for_non_substrings', function() {
    // Failure message:
    // charsInOrder should return false if the characters in the first string
    // do not form a subsequence of the characters in the second string
    expect(charsInOrder('hello', 'dlrow olleh')).toBe(false);
    expect(charsInOrder('abcde', 'fghijklmnopqrstuvwxyz')).toBe(false);
    expect(charsInOrder('hello', 'HELLO')).toBe(false);
    expect(charsInOrder('aaaa', "Madam, I'm Adam")).toBe(false);
    expect(
      charsInOrder(
        'oaeeoeuooiue',
        'The quick brown fox jumped over the lazy dog'
      )
    ).toBe(false);
    expect(charsInOrder('not a substring', 'substring, this is not a')).toBe(
      false
    );
  });
});
