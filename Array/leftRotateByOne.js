//[1, 2, 3, 4, 5]
function leftRotateByOne(arr) {
    const [first, ...rest] = arr;
    return [...rest, first];
}

function leftRotateByOneV2(arr) {
    // console.log(arr.shift())
    arr.push(arr.shift())
    return arr;
}

//TC O(n)
//SC O(1)
function leftRotateByOneV3(arr) {
    if (arr.length <= 1)
        return arr;
    const n = arr.length;

    const first = arr[0];
    for (let i = 0; i < n - 1; i++) { //[ 2, 3, 4, 5]
        arr[i] = arr[i + 1];
    }
    arr[n - 1] = first;
    return arr;
}

const arr = [1, 2, 3, 4, 5];
console.log(leftRotateByOneV3(arr));
