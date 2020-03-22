const isValidArray = a => {
    return a && a.length ? true : false;
}


/* 
 this is the brute force approach we will take two loops and check whether
 two numbers addition is equal to "v"
 Time Complexity -> O(n^2)
 Space Complexity-> O(1)
*/
const sumOfTwo = (a, b, v) => {
    if (!isValidArray(a) || !isValidArray(b)) {
        return false
    }
    for (let i = 0; i < a.length; i++) {
        let neededValue = v - a[i];
        for (let j = 0; j < b.length; j++) {
            if (neededValue === b[j]) {
                return true;
            }
        }
    }
    return false;
}


/*
Time Complexity O(N)
Space Complexity O(N) 
 */
const sumOfTwo1 = (a, b, v) =>{
    let map = {};
    for(let i=0; i<a.length; i++){
        if(!map[a[i]]){
            map[v-a[i]] = v-a[i];
        }
    }

    for(let j=0; j<b.length; j++){
        if(map[b[j]]) {
            return true;
        }
    }
    return false;
    console.log(map);
}

/*
Time Complexity O(N)
Space Complexity O(N) 
 */
const sumOfTwo2 = (a, b, v) =>{
    let set = new Set();
    for(let i=0; i<a.length; i++){
       set.add( v-a[i]);
    }
    console.log(set);
    for(let j=0; j<b.length; j++){
        if(set.has(b[j])) return true;
    }
    return false;
}
// console.log(sumOfTwo([0, 0, -5, 30212], [-10, 40, -3, 9], -8));
// console.log(sumOfTwo1([-5, 30212], [-3, 9], -8));
console.log(sumOfTwo2([0, 0, -5, 30212], [-10, 40, -3, 9], -8));