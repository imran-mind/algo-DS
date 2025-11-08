// Problem Statement
// Given an array of numbers, move all the zeros to the front of the array without
// changing the order of non-zero elements.

// ✅ Example 1:
// Input:  [0, 1, 0, 3, 12]
// Output: [0, 0, 1, 3, 12]

// ✅ Example 2:
// Input:  [1, 0, 0]
// Output: [0, 0, 1]
// TC -> O(n)
// SC -> O(n) -> SC O(1)
function moveAllZeroToFront(arr) {
    const zeros = arr.filter(item => item === 0);
    const nonZeros = arr.filter(item => item !== 0);
    return [...zeros, ...nonZeros];
}

// TC O(N)
// SC O(1)
function moveAllZeroToFrontV1(arr) { // [0, 0, 1, 3, 12]
    const n = arr.length; // 4
    let pos = n - 1; // 4->3->2->1
    for (let i = n - 1; i >= 0; i--) { // i=4; 0>=0
        if (arr[i] !== 0) {
            arr[pos] = arr[i];
            pos--;
        }
    }
    // pos = 1
    while (pos >= 0) { // -1 >= 0
        arr[pos] = 0;
        pos--;
    }
    return arr;
}

const arr = [0, 1, 0, 3, 12]
const ans = moveAllZeroToFrontV1(arr);
console.log(ans);
