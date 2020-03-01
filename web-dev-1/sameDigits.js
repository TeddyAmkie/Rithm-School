// frequency counter from: http://curric.rithmschool.com/r12/lectures/prob-freq-counter-pointers/


function sameDigits(nums1,nums2) {
  if (nums1.length !== nums2.length) {
    return false;
  }
  let nums1Freq = createFrequencyCounter(nums1);
  let nums2Freq = createFrequencyCounter(nums2);
  for (let [key,value] of nums1Freq) {
    if (!(nums2Freq.has(key))) {
      return false;
  }
  return true;
}

function createFrequencyCounter(number) {
  let frequencies = new Map();
  // stack overflow digits > array;
  let digits = (""+number);
  for (let val of digits) {
    let valCount = frequencies.get(val) || 0;
    frequencies.set(val, valCount + 1);
  }

  return frequencies;
}