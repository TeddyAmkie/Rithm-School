describe('#concatSortedArrays', () => {
  it('concatenates when the inputs are the same length', function() {
    expect(concatSortedArrays([1, 3, 4, 5], [2, 4, 6, 8]))
      .toEqual([1, 2, 3, 4, 4, 5, 6, 8]);
    expect(concatSortedArrays([3, 9, 27], [4, 8, 16]))
      .toEqual([3, 4, 8, 9, 16, 27]);
    expect(concatSortedArrays([1, 2, 3], [4, 5, 6]))
      .toEqual([1, 2, 3, 4, 5, 6]);
    expect(concatSortedArrays([37, 41, 43, 47, 53], [2, 3, 5, 7, 11]))
      .toEqual([2, 3, 5, 7, 11, 37, 41, 43, 47, 53]);
    expect(concatSortedArrays([2], [3])).toEqual([2, 3]);
  });

  it('concatenates when the first array is shorter', function() {
    expect(concatSortedArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(concatSortedArrays([1, 10], [5, 7, 9]))
      .toEqual([1, 5, 7, 9, 10]);
    expect(
      concatSortedArrays([-2, -1, 0, 4, 5, 6], [-3, -2, -1, 2, 3, 5, 7, 8])
    ).toEqual([-3, -2, -2, -1, -1, 0, 2, 3, 4, 5, 5, 6, 7, 8]);
  });

  it('concatenates when the second array is shorter', function() {
    expect(concatSortedArrays([3, 4, 5], [1, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(concatSortedArrays([5, 7, 9], [1, 10]))
      .toEqual([1, 5, 7, 9, 10]);
    expect(concatSortedArrays([-1, 1, 2, 4, 6], [0, 3, 5, 6]))
      .toEqual([-1, 0, 1, 2, 3, 4, 5, 6, 6]);
  });

  it('should be a pure function', function() {
    // Failure message:
    // it should not modify the input arrays at all
    var arr1 = [1, 3, 4, 5];
    var arr2 = [2, 4, 6, 8];
    concatSortedArrays(arr1, arr2);
    expect(arr1).toEqual([1, 3, 4, 5]);
    expect(arr2).toEqual([2, 4, 6, 8]);
  });
});
