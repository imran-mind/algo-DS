//  Check for Palindromic Array
// [1, 2, 3, 2, 1]  == true
// [1, 2, 3] == false

// TC O(n)
// SC O(n)
function isPalindromicArray(arr) {
    console.log(JSON.stringify(arr));
    console.log(JSON.stringify([...arr].reverse()))
    return JSON.stringify(arr) == JSON.stringify([...arr].reverse());
}
// LinkedIn: https://www.linkedin.com/in/imran-mind/

//TC O(n)
//SC O(1)
function isPalindromicArrayV2(arr) {
    let left = 0;// 0->1->2->3
    let right = arr.length - 1;//4->3->2->1
    while (left < right) { // 0<4
        if (arr[left] != arr[right]) // 3 != 3
            return false;
        left++;
        right--;
    }
    return true;
}

const arr = [1, 2, 3, 2, 1];
// const arr = [1, 2, 3];
console.log(isPalindromicArrayV2(arr));
