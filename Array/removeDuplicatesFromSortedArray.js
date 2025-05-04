
function removeDuplicatesFromSortedArray(arr) {
    const n = arr.length; // 9
    if (n <= 1)
        return n;
    let idx = 1; // 5;
    for (let i = 1; i < n; i++) { // i = 9 < 9
        if (arr[i] !== arr[i - 1]) { // 5 != 5
            arr[idx] = arr[i];
            idx++
        }
    }
    return idx;
}

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
// Output index=5
//  [1, 2, 3, 4, 5, 4, 4, 5, 5]
const lastIndex = removeDuplicatesFromSortedArray(arr)
// console.log(lastIndex);
for (let i = 0; i < lastIndex; i++) {
    console.log(arr[i])
}
