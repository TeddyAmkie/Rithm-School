describe("#romanToInteger", function() {
  // TODO: write tests!
  it("should_return_4_when_I_is_Before_V", function() {
    // Failure message:
    //romanToInteger should return 4 when an I appears before a V
    expect(romanToInteger("IV")).toBe(4)
  });
  it("should_return_6_for_I_after_V", function() {
    // Failure message:
    //romanToInteger should return 6 when I comes after V
    expect(romanToInteger("VI")).toBe(6)
  });
  it("should_return_9_when_I_is_Before_X", function() {
    // Failure message:
    //romanToInteger should return 4 when an I appears before an X
    expect(romanToInteger("IX")).toBe(9)
  });
  it("test_for_all_roman_numerals_up_to_l", function() {
    // Failure message:
    //romanToInteger should return 68 for LXVIII
    expect(romanToInteger("LXVIII")).toBe(68)
  });

  it("test_for_roman_numeral_D", function() {
    // Failure message:
    //romanToInteger should return 650 for DCL
    expect(romanToInteger("DCL")).toBe(650)
  });

  it("test_for_roman_numeral_M", function() {
    // Failure message:
    //romanToInteger should return 1664 for MDCLXIV
    expect(romanToInteger("MDCLXIV")).toBe(1664)
  });
  it("test_for_C_before_M", function() {
    // Failure message:
    //romanToInteger should return 1996 for MCMXCVI
    expect(romanToInteger("MCMXCVI")).toBe(1996)
  });
});

// romanToInteger('IV')       // 4
// romanToInteger('VI')       // 6
// romanToInteger('IX')       // 9
// romanToInteger('LXVIII')   // 68
// romanToInteger('DCL')      // 650
// romanToInteger('MDCLXIV')  // 1664
// romanToInteger('MCMXCVI')  // 1996