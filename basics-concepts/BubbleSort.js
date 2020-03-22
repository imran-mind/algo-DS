


const bubbleSort = (arr) =>{
    const length = arr.length;
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            if(arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

const nums = [60, 2, 1, 0, 6, 9];
bubbleSort(nums);
console.log(nums)
