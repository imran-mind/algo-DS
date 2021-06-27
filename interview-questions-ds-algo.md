## STRING 

- How do you print duplicate characters from a string?
```js
const mapString = (s)=>{
    const map = {};
    s.forEach(i => {
        map[i] = map[i] + 1 || 1;
    });
    console.log(map);
    return map;
}

const findDuplicate = (arr) =>{
    const map = mapString(arr);
    for(const c in map){
        if(map[c] > 1){
            console.log(c)
            return c;
        }
    }
}

```
- How do you check if two strings are anagrams of each other?
```js

const charCount = (s)=>{
    const map = {};
    const s1 = s.trim().toLowerCase();
    for(const element of s1){
        map[element] = map[element] + 1 || 1;
    }
    return map;
}

const anagram = (s1,s2) =>{
    const charObj1 = charCount(s1);
    const charObj2 =  charCount(s2);
    if(Object.keys(charObj1).length !== Object.keys(charObj2).length){
        return false;
    }
    for(const ch in charObj1){
        if(charObj1[ch] !== charObj2[ch]){
            return false;
        }
    }
    return true;
}

const sort = (s)=> s.toLowerCase().split('').sort().join("");
const anagramWithSorting = (s1, s2) =>{
    return sort(s1) === sort(s2);
}

const isAnagram = (s1,s2)=>{
    if(s1.length !== s2.length)
        return false;
    const obj = charCount(s1);
    for(const c of s2){
        if(obj[c]){
            obj[c]--;
        }
    }
    const vals = Object.values(obj);
    for(let i=0; i<vals.length; i++){
        if(vals[i] !==0)
            return false;
    }
    return true;
    // console.log(obj)
}

// console.log(anagram("hello world" ,"world hello"));
// console.log(anagramWithSorting("hello world" ,"world hello"));
console.log(isAnagram("hello" ,"llhe"));
```

- How do you print the first non-repeated character from a string?
```js
const firstNonRepeatChar= (str)=>{
    const map = {};
    for(const ch of str){
        map[ch] = map[ch] + 1 || 1;
    }

    for(const key in map){
        if(map[key] == 1){
            console.log(key);
            break
        }
    }
}


firstNonRepeatChar('abcdba');   
```
- How can a given string be reversed using recursion?
```javascrit
const reverseRecursive = (str) =>{
    if(str == ""){
        return "";
    }
    let rev =  reverseRecursive(str.substr(1));
    //console.log(rev,str)
    return rev + str[0];
}
console.log(reverseRecursive('hello'));
```
- How do you check if a string contains only digits?
```js
const stringContainOnlyDigit = str =>{
    // const regex = /^\d+$/;
    const regex = /^[0-9]+$/;
    const result  = regex.test(str);
    console.log(result)

}

stringContainOnlyDigit('123')
```

- How are duplicate characters found in a string?
```js
const mapString = (s)=>{
    const map = {};
    s.forEach(i => {
        map[i] = map[i] + 1 || 1;
    });
    console.log(map);
    return map;
}

const findDuplicate = (arr) =>{
    const map = mapString(arr);
    for(const c in map){
        if(map[c] > 1){
            console.log(c)
            return c;
        }
    }
}

const removeDuplicates = (arr)=>{
    const map = {};
    const outArr =[];
    for(let i=0; i<arr.length; i++){
        if(!map[arr[i]]){
            map[arr[i]] = true;
            outArr.push(arr[i]);
        }
    }
    console.log(outArr);
}

findDuplicate([1,2,2,3,3])
removeDuplicates([1,2,2,3,3])
```
- How do you count the number of vowels and consonants in a given string?
```js

/* 
 O(n^2) 
*/
const vovelsCount = (s)=>{
    let vowelCount = 0;
    let consCount = 0;
    const vovels = "aeiou";
    const str = s.toLowerCase();
    for(const ch of str){
        if(vovels.includes(ch)){
            vowelCount++;
        }else{
            consCount++;
        }
    }
    console.log('vowelCount => ',vowelCount)
    console.log('consCount => ',consCount)
}

/* 
O(n)
*/
const _vovelsCount = (s)=>{
    let count = 0;
    const str = s.toLowerCase();
    const map = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true,
    }
    for(const ch of str){
        if(map[ch]){
            count++;
        }
    }
    return count;
}

const vovels = (s)=>{
    const matches = s.toLowerCase().match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(vovelsCount("imran"))
console.log(_vovelsCount("imran"))
console.log(vovels("imran"))
```
- How do you count the occurrence of a given character in a string?
```js
const occurencesOfChar = str =>{
    const map = {};
    for(const c of str){
        map[c] = map[c] + 1 || 1;
    }
    console.log(map);
}

occurencesOfChar('raman')
```
- How do you find all the permutations of a string?
```js
const findPermutations = (s) =>{
    if(!s || typeof s !== 'string'){
        return 'please enter a string';
    }else if(s.length < 2){
        return s;
    }
    const permutationArr = [];
    for(let i=0; i<s.length; i++){
        let char = s[i];
        let remainingChars = s.slice(0,i) + s.slice(i+1,s.length);
        const permList = findPermutations(remainingChars);
        console.log('permList => ',permList)
        for(const permutation of permList){
            permutationArr.push(char + permutation);
        }
    }
    return permutationArr;
}
console.log(findPermutations("ABC"));
```
- How do you reverse words in a given sentence without using any library method?
```js
const reverseWord = (s)=>{
    const wordsReversed = [];
    s.split(" ").forEach(word=>{
        let revWrod = "";
        for(let i=word.length-1; i>=0; i--){
            revWrod = revWrod + word[i];
        }
        wordsReversed.push(revWrod);
    })
    return wordsReversed.join(" ");
}
console.log(reverseWord("shaikh imran"));
```
- How do you check if two strings are a rotation of each other? 
- How do you check if a given string is a palindrome? 
```js
function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

// without reverse func , solution with stack
function isPalindrom(word){
    var name = [];
    for(let i=0; i<word.length; i++){
        name.push(word[i])
    }
    console.log('name',name);
    let rword = "";
    const len = name.length;
    for(let i=0; i<len; i++){
        rword += name.pop();
    }
    console.log('rword',rword);
    return word === rword;
}

console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'
```

## ARRAY
- How do you find the missing number in a given integer array of 1 to 100?
```js
const findMissing = (arr)=>{
    const n = arr.length;
    let total = (n+1)*(n+2)/2;
    for(let i=0; i<n; i++){
        total = total - arr[i];
    }
    console.log('missing ',total);
}

findMissing([1,2,3,4,6])
```
- How do you find the duplicate number on a given integer array?
```js
const mapString = (s)=>{
    const map = {};
    s.forEach(i => {
        map[i] = map[i] + 1 || 1;
    });
    console.log(map);
    return map;
}

const findDuplicate = (arr) =>{
    const map = mapString(arr);
    for(const c in map){
        if(map[c] > 1){
            console.log(c)
            // return c;
        }
    }
}
findDuplicate([1,2,2,3,3])

```
- How do you find the largest and smallest number in an unsorted integer array?
```js

const findMinMax = (arr)=>{
    let min = arr[0];
    let max = arr[0];

    for(let i=1; i<arr.length; i++){
        if(arr[i] < min){
            min =  arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log('Min -> ',min)
    console.log('Max -> ',max)
}

const sort = (arr)=>{
    return arr.sort((a,b)=>b-a);
}
const findSecondLargest = (arr)=>{
    const sortedArr = sort(arr);
    console.log(sortedArr)
    console.log("second largest ",sortedArr[1])
}
const findThirdLargest = (arr)=>{
    const sortedArr = sort(arr);
    console.log(sortedArr)
    console.log("second largest ",sortedArr[2])
}
findMinMax([19,2,3,4,5,56,9])
findSecondLargest([19,2,3,4,5,56,9])
```
- How do you find all pairs of an integer array whose sum is equal to a given number?
```js
const mapString = (s)=>{
    const map = {};
    s.forEach(i => {
        map[i] = i
    });
    console.log(map);
    return map;
}

const getPairsCount = (arr,sum)=>{
    let count = 0;
    let pair = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] === sum){
                count++;
                const sumPair = [arr[i],arr[j] ]
                pair.push(sumPair)
            }
        }
    }
    console.log('count ',count);
    console.log('pair ',pair);
}


const _getPairsCount = (arr,sum)=>{
    const map = {};
    let result =[];
    for(let i=0; i<arr.length; i++){
        if(map[arr[i]]){
            result.push([map[arr[i]],arr[i]]);
        }else{
            map[sum-arr[i]] = arr[i];
        }
    }
    console.log('result => ',result);
}
 getPairsCount([1,2,3,4,5,6],6)
_getPairsCount([1,2,3,4,5,6],6)
``
- How do you find duplicate numbers in an array if it contains multiple duplicates?
```js

const mapString = (s)=>{
    const map = {};
    s.forEach(i => {
        map[i] = map[i] + 1 || 1;
    });
    console.log(map);
    return map;
}

const findDuplicate = (arr) =>{
    const map = mapString(arr);
    for(const c in map){
        if(map[c] > 1){
            console.log(c)
            // return c;
        }
    }
}
findDuplicate([1,2,2,3,3])
```
- How are duplicates removed from a given array in Java?
```js
const removeDuplicates = (arr)=>{
    const map = {};
    const outArr =[];
    for(let i=0; i<arr.length; i++){
        if(!map[arr[i]]){
            map[arr[i]] = true;
            outArr.push(arr[i]);
        }
    }
    console.log(outArr);
}

removeDuplicates([1,2,2,3,3])
```
- How is an integer array sorted in place using the quicksort algorithm?

- How do you remove duplicates from an array in place?

- How do you reverse an array
```js

const reverse = (s) =>{
    return s.split('').reverse().join('');
}

// stack
const _reverse= (s)=>{
    const stack =[];
    for(const c of s){
        stack.push(c);
    }
    let res = "";
    const len = stack.length;
    for(let i=0;i<len; i++){
        res += stack.pop();
    }
    return res;
}

// read from last in arr;
const __reverse = (s) =>{
    let res = "";
    for(let i=s.length-1; i>=0; i--){
        res += s[i];
    }
    return res;
}


const ___reverse = (s)=>{
    let res = "";
    for(let i=0; i<s.length; i++){
        res = s[i] + res;
    }
    return res;
}

const reverseNum = (n)=>{
    return parseInt(n.toString().split('').reverse().join(''));
}
// console.log(reverse('naman'));
// console.log(_reverse('imran'));
// console.log(__reverse('imran'));
// console.log(___reverse('rail'));
// console.log(___reverse(1234));
console.log(reverseNum(1234));
```
- How are duplicates removed from an array without using any library
- Write a program to find intersection of two sorted arrays in Java?
```js


const intersection = (arr1,arr2)=>{
    return arr1.filter(item=>{
        console.log(item, arr2.indexOf(item))
        return arr2.indexOf(item) !== -1;
    })
}

const a1 = [[1,2],[3,4]];
const a2 = [[1,2]];

const _intersection = (arr1,arr2)=>{
    const map = {};
    const commonElements = [];
    arr1.forEach(item=>{
        map[item] = 1;
    });

    arr2.forEach(item=>{
        if(map[item] == 1){
            commonElements.push(item);
        }
    })
    console.log(commonElements);
}
// console.log(intersection(a1,a2))
_intersection([1,2,3],[2,4,1]);
```
- There is an array with every element repeated twice except one. Find that element?
{1, 1, 2, 2, 3, 4, 4, 5, 5} output 3"
```js
const repeatedTwiceExceptOne = arr =>{
    const map = mapString(arr);
    for(const c in map){
        if(map[c] === 1){
            console.log('repeatedTwiceExceptOne => ',c)
            // return c;
        }
    }
    
}
repeatedTwiceExceptOne([1, 1, 2, 2, 3, 4, 4, 5, 5]);
```
- How to find kth smallest element in unsorted array? 
 For example if given array is {1, 2, 3, 9, 4} and k=2 then you need to find the 2nd smallest number in the array, which is 2."
```js
const sort = (arr)=>{
    return arr.sort((a,b)=>a-b);
}
const findKthSmallest = (arr,k) =>{
    const sortedArr = sort(arr);
    console.log(sortedArr)
    console.log("second largest ",sortedArr[k-1]);
}

findKthSmallest([1, 2, 3, 9, 4],2)
```

- How to find kth largest element in unsorted array? 
```js
const sort = (arr)=>{
    return arr.sort((a,b)=>b-a);
}
const findSecondLargest = (arr,k)=>{
    const sortedArr = sort(arr);
    console.log(sortedArr)
    console.log("second largest ",sortedArr[k-1])
}
```
- How to find common elements in three sorted array?
input1 = {1, 5, 10, 20, 40, 80}
input2 = {6, 7, 20, 80, 100}
input3 = {3, 4, 15, 20, 30, 70, 80, 120}
Output: 20, 80"
- How find the first repeating element in an array of integers?
Input:  input [] = {10, 5, 3, 4, 3, 5, 6}
```js
const mapString = (s)=>{
    const map = {};
    s.forEach(i => {
        map[i] = map[i] + 1 || 1;
    });
    return map;
}
const firstRepeatedElement = arr =>{
    const map = mapString(arr);
    for(const i of arr){
        if(map[i] > 1){
            return i;
        }
    }
}

console.log(firstRepeatedElement([10, 5, 3, 4, 3, 5, 6]));
```
Output: 5 [5 is the first element that repeats]"
- How to find first non-repeating element in array of integers?
```js
const mapString = (s)=>{
    const map = {};
    s.forEach(i => {
        map[i] = map[i] + 1 || 1;
    });
    return map;
}

const firstNonRepeatedElement = arr =>{
    const map = mapString(arr);
    for(const i of arr){
        if(map[i] == 1){
            return i;
        }
    }
}
console.log(firstNonRepeatedChar([10, 5, 3, 4, 3, 5, 6]));
output 4
```
- How to find top two numbers from an integer array?
       This is another one of the easy array questions you will find on telephonic round of Interviews, but its also little bit tricky. You are asked to find top two numbers not just the top or highest numbers? Can you think of how you would do it without sorting? before looking at solution."
- How to find the smallest positive integer value that cannot be represented as sum of any subset of a given array?
- How to rearrange array in alternating positive and negative number?
- How to find if there is a sub array with sum equal to zero?
```js
const mapString = (s)=>{
        const map = {};
        s.forEach(i => {
            map[i] = i
        });
        console.log(map);
        return map;
    }

    const getPairsCount = (arr,sum)=>{
        let count = 0;
        let pair = [];
        for(let i=0; i<arr.length; i++){
            for(let j=i+1; j<arr.length; j++){
                if(arr[i]+arr[j] === sum){
                    count++;
                    const sumPair = [arr[i],arr[j] ]
                    pair.push(sumPair)
                }
            }
        }
        console.log('count ',count);
        console.log('pair ',pair);
    }


    const _getPairsCount = (arr,sum)=>{
        const map = {};
        let result =[];
        for(let i=0; i<arr.length; i++){
            if(map[arr[i]]){
                result.push([map[arr[i]],arr[i]]);
            }else{
                map[sum-arr[i]] = arr[i];
            }
        }
        console.log('result => ',result);
    }

 getPairsCount([1,2,3,4,5,6,-4],6)
 _etPairsCount([1,2,3,4,5,-5,6],6)
```
-How to remove duplicates from array in place?

-How to remove a given element from array in
```js

const removeGivenElementFromArr = (arr, item) =>{
    const index = arr.indexOf(item);
    arr.splice(index,1);
    console.log(arr);
}

removeGivenElementFromArr([2,3,4,5,6],5);
```
- How to merge sorted array?
- How to find sub array with maximum sum in an array of positive and negative number? 
- How to find sub array with largest product in array of both positive and negative number?
- Write a program to find length of longest consecutive sequence in array of integers
```js
const findLongestConseqSubseq = (arr) =>{
    let ans=0, count=0;
    arr.sort((a,b)=>a-b);
    
    const v = [];
    v.push(arr[0]);
    for(let i=1; i<arr.length; i++){
        if(arr[i] !== arr[i-1]){
            v.push(arr[i])
        }
    }

    for(let i = 0; i < v.length; i++){
        if(i>0 && v[i] === v[i-1]+1){
            count++;
        }else{
            count = 1;
        }

        ans = Math.max(count,ans);
    }
    console.log(ans);
};


// var a = [1, 9, 3, 10, 4, 20, 2,2,3];
var a = [1,2,2,3];
findLongestConseqSubseq(a);
```

- How to find minimum value in a rotated sorted array
 Given an array of of size n and a number k, find all elements that appear more than n/k times?


## LinkedList
- How do you find the middle element of a singly linked list in one pass?
- How do you check if a given linked list contains a cycle? How do you find the starting node of the cycle?
- How do you reverse a linked list?
- How do you reverse a singly linked list without recursion?
 - How are duplicate nodes removed in an unsorted linked list?
 - How do you find the length of a singly linked list?-->
 - How do you find the third node from the end in a singly linked list?
- How do you find the sum of two linked lists using Stack?

