describe('#quarantineZeros', () => {
  it('mutates input array', function() {
    let arr = [0, 1, 0, 3, 12];
    quarantineZeros(arr);
    expect(arr).toEqual([1, 3, 12, 0, 0]);
  });

  it('moves zeros in shorter arrays', function() {
    expect(quarantineZeros([0, 1])).toEqual([1, 0]);
    expect(quarantineZeros([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
    expect(quarantineZeros([0, 0, 0, 0, 1])).toEqual([1, 0, 0, 0, 0]);
  })

  it('moves zeros in longer arrays', function() {
    expect(quarantineZeros([4, 1, 2, 0, 0, 1, 2, 1, 0]))
      .toEqual([4, 1, 2, 1, 2, 1, 0, 0, 0]);
    expect(quarantineZeros([6, 1, 2, 3, 5, 1, 0]))
      .toEqual([6, 1, 2, 3, 5, 1, 0]);
    expect(quarantineZeros([0, 6, 1, 2, 3, 5, 1, 0]))
      .toEqual([6, 1, 2, 3, 5, 1, 0, 0]);
    expect(quarantineZeros([12, 2, 0, 0, 2, 1]))
      .toEqual([12, 2, 2, 1, 0, 0]);
    expect(quarantineZeros([0, 1, 0, 2, 0, 3, 0, 4, 0, 5]))
      .toEqual([1, 2, 3, 4, 5, 0, 0, 0, 0, 0]);
  });
  
  it('does nothing if there are no zeroes or all zeroes', function() {
    expect(quarantineZeros([1, 3, 10, 2])).toEqual([1, 3, 10, 2]);
    expect(quarantineZeros([0, 0, 0])).toEqual([0, 0, 0]);
    expect(quarantineZeros([0])).toEqual([0]);
    expect(quarantineZeros([1])).toEqual([1]);
    expect(quarantineZeros([])).toEqual([]);
  });
});
