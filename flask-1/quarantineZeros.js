//** BROKEN FUNCTION **/
// Does not meet complexity requirements since zeroIndex gets close to O(n) in certain edge cases. Does meet time complexity of O(n);

// Take an input array of numbers, find the zeros, and store the count and index. Delete the index the 0 is stored at, and push it onto the end. 
// Return the original array with all the zeros at the end.
function quarantineZeros(arr) {
    let zeroCount = 0
    let zeroIndex = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0 && arr[i+1] !==0) {
            zeroCount++;
            zeroIndex.push(i);
        }
    }
    if (zeroCount === arr.length) {
        return arr;
    }
    // unnecessary, refactor into if statement on line 8
    while (zeroCount > 0) {
        delete arr[zeroIndex[0]]
        arr.push(0);
        zeroCount--;
        delete zeroIndex[0];
    } return arr;
}
