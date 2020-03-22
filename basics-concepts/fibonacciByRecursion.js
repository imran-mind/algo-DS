
// const fibo = n => {
//     if(n === 1 || n === 2){
//         return 1;
//     }
//     return fibo(n-1) + fibo(n-2);
// }


const fiboWithMemo = n => {
    const memo = [];
    let result;
    if(memo[n]){
        return memo[n];
    }
    if(n === 1 || n === 2){
        result = 1;
    } else {
        result = fiboWithMemo(n-1) + fiboWithMemo(n-2);
    }
    memo[n] = result;
    return result;
}

// console.log(fiboWithMemo(5))
// console.log(fiboWithMemo(35))
console.log(fiboWithMemo(50));