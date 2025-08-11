// Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
// Output: 11
// Explanation: The subarray [7, -1, 2, 3] has the largest sum 11.

// Input: arr[] = [-2, -4]
// Output: -2
// Explanation: The subarray [-2] has the largest sum -2.

// Input: arr[] = [5, 4, 1, 7, 8]
// Output: 25
// Explanation: The subarray [5, 4, 1, 7, 8] has the largest sum 25.

function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];

        if (sum > maxi) {
            maxi = sum;
        }

        // If sum < 0: discard the sum calculated
        if (sum < 0) {
            sum = 0;
        }
    }

    // To consider the sum of the empty subarray
    // uncomment the following check:

    //if (maxi < 0) maxi = 0;

    return maxi;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const n = arr.length;
const maxSum = maxSubarraySum(arr, n);
console.log("The maximum subarray sum is: " + maxSum);

// const arr = [-8, -7, -1];
// const arr = [2, 3, -8, 7, -1, 2, 3];
// const result = maxSubArraySum(arr);
// console.log(result);
// { res: -1, startIndex: 2, endIndex: 2 }

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