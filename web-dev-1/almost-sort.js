// Checks previous index and next index and compares the element value.
// The elements out of ordered are held and then swapped.

function almostSort(array) {
    let notInOrder = [];
    for (let i = 1; i < array.length; i++) {
        if (!(array[i] > array[i-1] && array[i] < array[i+1])) {
            notInOrder.push(i);
        }
    } [[array[notInOrder[0]] = array[notInOrder[1]]], [array[notInOrder[1]] = array[notInOrder[0]]]]
    return array;
}
