describe('#scrambledPalindromeCheck', function() {
  it('returns true if the string can be made into a palindrome', function() {
    expect(scrambledPalindromeCheck('carrace')).toBe(true);
    expect(scrambledPalindromeCheck('bba')).toBe(true);
    expect(scrambledPalindromeCheck('bbaaa')).toBe(true);
    expect(scrambledPalindromeCheck('e')).toBe(true);
    expect(scrambledPalindromeCheck('amanaplanacanalpanama')).toBe(true);
    expect(scrambledPalindromeCheck('cattaco')).toBe(true);
  });
  
  it('returns false if the string cannot be made into a palindrome', function() {
    expect(scrambledPalindromeCheck('jjqqqjjx')).toBe(false);
    expect(scrambledPalindromeCheck('zzzaaa')).toBe(false);
    expect(scrambledPalindromeCheck('abcdefg')).toBe(false);
    expect(scrambledPalindromeCheck('cattacox')).toBe(false);
  });
});
