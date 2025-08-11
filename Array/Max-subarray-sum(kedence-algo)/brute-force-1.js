// Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
// Output: 11
// Explanation: The subarray [7, -1, 2, 3] has the largest sum 11.


function maxSubArraySum(arr) {
    let res = arr[0], startIndex, endIndex;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let sum = 0;
            let subarr = "";
            for (let k = i; k <= j; k++) {
                sum = sum + arr[k];
                subarr = subarr + arr[k] + ",";
            }
            console.log(subarr)
            if (sum > res) {
                res = sum
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