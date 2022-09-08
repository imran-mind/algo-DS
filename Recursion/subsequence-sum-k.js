//all subsequences whose sum=k
const subsequences = (idx, arr, ds, n, k) =>{
    if(idx === n){
        if(ds.length){
            let sum = 0;
            ds.forEach(i => sum = sum + i);
            // console.log('sum ',sum,k,sum == k);
            if(sum == k){
                console.log(ds);
            }
            return;
        }
        return;
    }
    //this is the pick case
    ds.push(arr[idx]);
    subsequences(idx + 1, arr, ds, n,k);
    ds.splice(-1);

    // console.log(ds);
    //this is not pick case
    subsequences(idx + 1, arr, ds, n,k);
    return;
}

const ds = [];
const idx = 0;
let arr = [1,2,1];
let k = 2;
subsequences(idx, arr, ds, arr.length, k);
arr.splice(-1);
