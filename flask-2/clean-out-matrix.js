// The instructions say *, but the tests are written for 0s.
// The function can be altered for * on line 14.

// Given a grid with 0s, will return the grid with all 
// items with a similar index or in a similar array to any 0 replaced with 0s. 

// OPTIMIZATIONS: 
    // When a 0 is hit in an array, all of that array's elements should be replaced so
    // the array does not have to be found and looped over again.

    // When a 0 index is found, replace that index for the remainder of the original search loop.
    // When the future loop is called to search for zeroIndex to replace them, it only has to search up to
    // the original index the 0 was found at, and not the whole grid. 

function cleanOutMatrix(grid) {
    let zeroIndex = [];
    let zeroArray = [];

    // Find the 0s in the grid.
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0) {
                zeroIndex.push(j);
                zeroArray.push(i);
            }
        }
    }
    console.log(zeroArray)
    // replace all indexes shared with 0s with 0
    for (let i = 0; i < zeroIndex.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            grid[j][zeroIndex[i]] = 0;
        }
    }
    // replace all elements in arrays containing a 0 with 0
    for (let i = 0; i < zeroArray.length; i++) {
        grid[zeroArray[i]].forEach(function(element, j) {
            grid[zeroArray[i]][j] = 0;
        })
    }
    return grid;
}

