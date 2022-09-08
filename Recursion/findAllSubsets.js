
const findSubsets = (subsets, arr, ds, index)=>{
    if(index == arr.length){
        // console.log(ds);
        subsets.push(ds);
        return;
    }

    //this is the pick , in this case we have to add in to sum variable arr[ind];
    ds.push(arr[index]);
    findSubsets(subsets, arr, [...ds], index + 1);
    ds.splice(-1);

    //this is not pick case, here we don't need to add arr[ind] into sum variable
    findSubsets(subsets, arr, [...ds], index + 1);

}

const arr = [3,1,2];
const ds = [];
const sum = 0;
const ans = [];

let subsets = [];
// console.log(findSubsetSum(0, arr, ds, sum, ans, arr.length))
console.log(findSubsets(subsets, arr, [], 0))
console.log('-> <-- ',subsets);
