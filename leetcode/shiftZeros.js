// var a = [0,0,3,4,0,1];
// var a = [0,1,0,3,12]
// var shiftZeros = () =>{
//     let count = 0;
//     let data = [];
//     for(let i=0; i<a.length; i++){
//         if(a[i] === 0){
//            count = count + 1;
//         }
//     }
//     for(let i=0; i<a.length; i++){
//         if(a[i] !== 0){
//             data.push(a[i])
//         }
//     }
//     let zeros = Array.from({ length: count }).fill(0);
//     data  = data.concat(zeros)
//     console.log(data);
// }

var shiftZeros = function(nums) {
    let count = 0;
    let data = [];
    // for(let i=0; i<nums.length; i++){
    //     if(nums[i] !== 0){
    //         data.push(nums[i])
    //     } else{
    //        count = count + 1;
    //     }
    // }
    // nums = data.concat(Array.from({ length: count }).fill(0));
    // console.log(nums.slice())
    // return nums;
    let c = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            nums[c++] = nums[i];
        }
    }
    
    for(let i=c; c<nums.length; i++){
        nums[c++] = 0;
    }
    console.log('---',nums)
    console.log('--c-',c)
};

var shiftZeros1= function(nums) {
    // let initialLength = nums.length;
    // for (let i = 0; i < nums.length; i++) {
    //     if(nums[i] === 0) {
    //         console.log('i ** ',i)
    //         nums.splice(i, 1);
    //         console.log('nums split ',nums)
    //         i--;
    //     }
    // }
    // let currentLength = nums.length;
    // let lengthDiff = initialLength - currentLength;
    // for (let j = 0; j < lengthDiff; j++) {
    //     nums.push(0);
    // }
    let len = nums.length;
    let count = 0;
    for(let i=0; i<len; i++){
        if(nums[i] == 0){
            nums.splice(i, 1);
            i--;
            count ++;
        }
    }
    for(let i=0; i<count; i++){
        nums.push(0);
    }
    return nums;
};
console.log(shiftZeros1([0,0,1]))