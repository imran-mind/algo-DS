
//https://www.geeksforgeeks.org/find-the-longest-substring-with-k-unique-characters-in-a-given-string/

const longestSubstrWithKDistinctChar=(s,k)=>{
    if(!s) return -1;
    let n = s.length;
    if(k>n) return -1;
    let start =0, end = 0, maxLen = 0;
    const map = {};
    while(end < n){
        const ch = s.charAt(end);
        if(map[ch]){
            map[ch] = map[ch] + 1;
        }else{
            map[ch] = 1;
        }
        console.log(map)
        //if the map size is > k
        while(Object.keys(map).length > k){
            const frontChar = s.charAt(start);
            map[frontChar] = map[frontChar] - 1;
            if(map[frontChar] === 0){
                delete map[frontChar];
            }
            start++;
        }
        maxLen = Math.max(maxLen, end - start + 1);
        end++;
    }
    return maxLen;
}

const st = "bccbababd";
console.log(longestSubstrWithKDistinctChar(st,2));
