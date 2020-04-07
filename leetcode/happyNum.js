const sumOfDigits = (n) => {
    let sum = 0;
    // while (n > 0) { //&& (sum===0 || sum > 1)
    //     let r = parseInt(n % 10);
    //     sum = sum + (r * r);
    //     n = parseInt(n / 10);
    // }
    // return sum;
    let arr = (n+'').split('');
    for(let i=0; i<arr.length; i++){
        sum = sum + (arr[i]*arr[i]);
    }
    return sum;
}


// const isHappy = n => {
//     let set = new Set();
//     set.add(n);
//     while (true) {
//         if (n === 1) {
//             return true;
//         }
//         n = sumOfDigits(n);
//         if(set.has(n)){
//             return false;
//         }
//         console.log(set);
//         set.add(n);
//     }
// }

// var isHappy = function(n) {

//     if (n === 1 || n === 7) {
//       return true
//     }
//     if (n < 10) {
//       return false
//     }
//     let arr = (n + '').split(''), s = 0
//     console.log(arr);
//     for (let i = 0;i < arr.length; i++) {
//       s = arr[i] * arr[i] + s;
//     }
//     return isHappy(s)
//   };

var isHappy = function(n){
    let map = {};
    while(true){
        if(n===1){
            return true;
        }
        map[n] = true;
        n = sumOfDigits(n);
        if(map[n]){
            console.log(map,n);
            return false;
        }
    }
}

console.log(isHappy(19));