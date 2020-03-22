

const findPairOfSum = (arr, sum) =>{
    const mapSum = {};
    arr.forEach(item => {
        if(mapSum[sum-item]){
            console.log('Pair : => ',mapSum[sum-item] ,':', item);
        }else{
            mapSum[item] = item;
        }
    });    
}


const findPairOfSum1= (arr, sum) =>{
    arr = arr.sort((a,b) => a-b);
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        if(arr[left] + arr[right] === sum){
            return true;
        }else if (arr[left] + arr[right] < sum){
            left ++;
        } else {
            right --;
        }
    }
    return false;
}

console.log(findPairOfSum([1,4,45,6,10,9, 0, 5,7, 32,11 ,-16], 16))
