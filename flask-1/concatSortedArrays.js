let i = 0;
let j = 0;
let sortedArr = [];

// *** FUNCTION BROKEN** While function works properly for some tests, specific edge cases will cause infinite loops or cause issues when hitting an index outside of the array.

// Takes in 2 sorted arrays, and outputs a new array with the two concat and sorted.
function concatSortedArrays(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr2.length;
    console.log(len1, len2)
    // Length of first array is equal or longer:
    if (len1 >= len2) {
        while (len1 > i) {
            compareIndex(len1, arr1, arr2);
        }
    // Length of 2nd array is longer
    } else {
        while (len2 > j || len2 >= i) {
            compareIndex(len2, arr1, arr2);
        }
    } return sortedArr;
}
// Helper function to compare which index is lower. Pushes the lower index to sorted array. Does not return anything.
function compareIndex(len, arr1, arr2) {
    if (arr1[i] < arr2[j] || arr2[j] === undefined) {
        if (arr1[i] !== undefined) {
            sortedArr.push(arr1[i])
            console.log("arr1 smaller", sortedArr)
            i++;
        }
    } else {
        if (arr2[j] !== undefined) {
            sortedArr.push(arr2[j])
            j++
            console.log("arr2 smaller", sortedArr)
        }
    }
}