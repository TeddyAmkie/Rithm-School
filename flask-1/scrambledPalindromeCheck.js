// Take in a word and if it has an even length, it cannot be a palindrome if it has an odd amount of any letter.
// If it has an odd length, it cannot be a palindrome if it doesn't have only 1 odd letter.
// Return true if the word is a palindrome, else false.

function scrambledPalindromeCheck(word) {
    let counter = createFrequencyCounter(word);
    let letterCount = Object.values(counter);
    let oddCount = 0;
    for (let val of letterCount) {
        if (val % 2 !== 0) {
            oddCount++;
        }
    }


    if (word.length %2 === 0) {
        console.log("word is even")
        return (oddCount > 0) ? false : true;
    }
    if (word.length %2 !== 0) {
        console.log("word is odd")
        return (oddCount === 1) ? true : false;
    }
}

// Freq. Counter courtesy of: http://curric.rithmschool.com/r12/lectures/prob-freq-counter-pointers/
function createFrequencyCounter(string) {
    let frequencies = {};
  
    for (let val of string) {
      let valCount = frequencies[val] || 0;
      frequencies[val] = valCount + 1;
    }
  
    return frequencies;
  }