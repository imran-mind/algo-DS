

const subsequences = (idx, arr, ds, n) =>{
    if(idx === n){
        console.log(ds);
        return;
    }
    //this is the pick case
    ds.push(arr[idx]);
    subsequences(idx + 1, arr, ds, n);
    ds.splice(-1);

    // console.log(ds);
    //this is not pick case
    subsequences(idx + 1, arr, ds, n);
    return;
}

const ds = [];
const idx = 0;
let arr = [3,1,2];

subsequences(idx, arr, ds, arr.length);
arr.splice(-1);
