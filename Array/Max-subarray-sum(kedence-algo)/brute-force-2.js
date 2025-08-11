// Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
// Output: 11
// Explanation: The subarray [7, -1, 2, 3] has the largest sum 11.

// Input: arr[] = [-2, -4]
// Output: -2
// Explanation: The subarray [-2] has the largest sum -2.

// Input: arr[] = [5, 4, 1, 7, 8]
// Output: 25
// Explanation: The subarray [5, 4, 1, 7, 8] has the largest sum 25.

function maxSubArraySum(arr) {
    let res = arr[0], startIndex, endIndex;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;

        for (let j = i; j < arr.length; j++) {
            sum = sum + arr[j];
            // res = Math.max(res, sum);
            if (sum > res) {
                res = sum;
                startIndex = i;
                endIndex = j
            }
        }
    }
    return { res: res, startIndex, endIndex };
}

const arr = [2, 3, -8, 7, -1, 2, 3]
const result = maxSubArraySum(arr);
console.log(result);


//8889657702 mahajan shahpur
// [2, 3, -8, 7, -1, 2, 3]
/**
 * maxEnding = 2-> 5->3->11;
 * res = 2->5->5->10->10->11
 * for loop
 * 
 * maxEnding = max(arr[i], maxEnding + arr[i]);
 * maxEnding = max(3, 11+3)// 11
 * 
 * res = max(res, maxEnding);
 * res = max(10, 11)// 5
 * 
 */