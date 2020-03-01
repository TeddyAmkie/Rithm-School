describe("#sameDigits", function() {
  // TODO: write tests!
  it("properly returns true", function() {
    expect(sameDigits(182,281)).toBe(true)
    expect(sameDigits(3589578, 5879385)).toBe(true)
  });
  it("properly returns false", function() {
    expect(sameDigits(34,14)).toBe(false)
    expect(sameDigits(22, 222)).toBe(false)
  });
});
