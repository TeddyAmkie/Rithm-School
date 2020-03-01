describe("#almostSort", function() {
  it("sorts the array correctly", function() {
    expect(almostSort([1, 2, 3, 7, 5, 6, 4])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(almostSort([4, 2, 3, 1, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(almostSort([1, 2, 5, 4, 3, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(almostSort([1, 2, 4, 3, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(almostSort([-1, 1, 0, 2])).toEqual([-1, 0, 1, 2]);
    expect(almostSort([2, 1])).toEqual([1, 2]);
  });
  it("handles a sorted array", function() {
    expect(almostSort([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(almostSort([1])).toEqual([1]);
    expect(almostSort([])).toEqual([]);
  })
});
