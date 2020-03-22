const mergeTwoAlternateArray = (arr1, arr2) =>{
    const mergedArray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    if(arr1.length === 0){
        return arr2;
    }
    if(arr2.length === 0){
        return arr1;
    }

    while(arr1Item || arr2Item){

        if(arr1Item){
            mergedArray.push(arr1Item);
        }
        if(arr2Item){
            mergedArray.push(arr2Item);
        }

        arr1Item = arr1[i];
        arr2Item = arr2[i];
        i ++;
    }
    return mergedArray;
}


console.log(mergeTwoAlternateArray([1,2], [3,4,5,6])); // [1,3,2,4]
// O(n)