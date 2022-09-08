const findAllSubsetSum = (ind, arr, ds, sum, ans, n)=>{
    if(ind == n){
        ans.push(sum);
        return;
    }

    //this is the pick , in this case we have to add in to sum variable arr[ind];
    ds.push(arr[ind]);
    findAllSubsetSum(ind+1, arr, ds, sum + arr[ind], ans, n);
    ds.splice(-1);

    //this is not pick case, here we don't need to add arr[ind] into sum variable
    findAllSubsetSum(ind+1, arr, ds, sum, ans, n);
    return ans;
}

const arr = [3,1,2];
const ds = [];
const sum = 0;
const ans = [];

let subsets = [];
console.log(findAllSubsetSum(0, arr, ds, sum, ans, arr.length))
