describe("#cleanOutMatrix", () => {
  it("a matrix without zeroes doesn't change:", function() {
    expect(cleanOutMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
  });
  it("if there's a zero, zero both that row and column", function() {
    expect(cleanOutMatrix([[1, 0, 3], [4, 5, 6], [7, 8, 9]])).toEqual([
      [0, 0, 0],
      [4, 0, 6],
      [7, 0, 9]
    ]);
    expect(cleanOutMatrix([[1, 2, 3], [4, 5, 6], [7, 0, 9]])).toEqual([
      [1, 0, 3],
      [4, 0, 6],
      [0, 0, 0]
    ]);
  });
  it("works with multiple zeroes", function() {
    expect(cleanOutMatrix([[1, 0, 0], [4, 5, 6], [7, 8, 9]])).toEqual([
      [0, 0, 0],
      [4, 0, 0],
      [7, 0, 0]
    ]);
    expect(cleanOutMatrix([[1, 2, 0], [4, 5, 6], [7, 0, 9]])).toEqual([
      [0, 0, 0],
      [4, 0, 0],
      [0, 0, 0]
    ]);
  });
  it("Make sure it works with non - square matrices:", function() {
    expect(
      cleanOutMatrix([[1, 0, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
    ).toEqual([[0, 0, 0, 0], [5, 0, 7, 8], [9, 0, 11, 12]]);
  });
});
