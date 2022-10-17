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
            if(currSum === targetSum){
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

const minSubArraySumSlidingWindow = (arr, targetSum) =>{
    const n = arr.length;
    let start = 0;
    let end;
    let currSum = arr[0];
    let minLen = Number.MAX_VALUE;
    //pick the starting point
    for(end = 1; end<=n; end ++){
        //if currSum exceeds the sum, then remove the starting element
        while(currSum > targetSum){
            currSum = currSum - arr[start];
            start++;
        }
        if(currSum === targetSum){
            let newEnd = end - 1;
            minLen = Math.min(minLen, newEnd - start + 1);
            console.log('len -> ',start, ' ', newEnd);
        }
        if(end < n){
            currSum = currSum + arr[end];
        }
    }
    console.log('minLen ',minLen);
}



const arr = [15, 2, 4, 8, 9, 5, 3, 20 , 19, 2, 2 ];
const sum = 23;

minSubArraySumSlidingWindow(arr, sum);
