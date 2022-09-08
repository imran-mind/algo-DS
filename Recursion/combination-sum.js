
//https://leetcode.com/problems/combination-sum/
//all subsequences whose sum = k
const combinationSum = (idx, arr, ds, n, target) =>{
    if(idx === n){
        if(target === 0){
            console.log(ds);
        }
        return;
    }

    if(arr[idx] <= target){
        //this is the pick condition
        ds.push(arr[idx]);
        combinationSum(idx, arr, ds, n, target - arr[idx],);
        ds.splice(-1);
    }
    //this is not pick condition
    combinationSum(idx+1, arr, ds, n, target );
}

const ds = [];
const idx = 0;
let arr = [1,2];
let target = 3;
combinationSum(idx, arr, ds, arr.length, target);
