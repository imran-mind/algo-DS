//approach 1 
//that has TC - O(n^2), SC - O(n) 
const findSubarraySum = (arr, targetSum)=>{
    const n = arr.length;
    let minLen = Number.MAX_VALUE;
    for(let i=0; i<n; i++){
        let currSum = arr[i];
        if(currSum === targetSum){
            console.log('sum found at index ',i);
            return;
        }
        for(let j=i+1; j<n; j++){
            currSum = currSum + arr[j];
            if(currSum >= targetSum){
                const len = j-i+1;
                minLen = Math.min(len, minLen);
            }
        }
    }
    console.log('min Len ',minLen);
    return minLen;
}




// findSubarraySum(arr, sum);


//so we can improve the TC with the sliding window technique
var minSubArrayLen = function(target, nums) {
    if(!nums || nums.length === 0)
        return 0;
    const n = nums.length;
    let start = 0;
    let end = 0;
    let sum = 0;
    let min = Number.MAX_VALUE;
    
    while(end < n){
        sum = sum + nums[end];
        end++;
        
        while(sum>=target){
            min = Math.min(min, end-start);
            sum = sum - nums[start];
            start++;
        }
    }
    return min === Number.MAX_VALUE ? 0 : min;
};


const arr = [15, 2, 4, 8, 9, 5, 3, 20 , 19, 2, 2 ];
const sum = 23;

minSubArrayLen(arr, sum);
