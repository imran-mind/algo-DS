// const elementCount = (a) =>{
//     let count = 0;
//     for(let i of a){
//         let item = i+1;
//         if(a.includes(item)){
//             count++;
//         }
//     }
//     return count;
// }

const elementCount = (a) =>{
    let count = 0, map = {};
    // let map = {};
    for(let i of a){
        map[i] = i;
    }
    for(let i of a){
        let item = i+1;
        if(map[item]){
            count++;
        }
    }
    return count;
}



console.log(elementCount([1,2,3]));
console.log(elementCount([1,1,3,3,5,5,7,7]));
console.log(elementCount([1,3,2,3,5,0]));
console.log(elementCount([1,1,2,2]));