
/**
 Given a word composed of lowercase English letters, find the maximum possible score by building exactly 2 palindromic sub-sequences. The score obtained is the product of the length of these 2 sub-sequences.  What tests would you write to verify your program? 

for e.g.  If the word is 
 abcdefAnnaRacecarMom

the palindromes are Anna (4), Racecar (7), and  Mom (3). The maximum product is 
   is Anna - 4 , RaceCar - 7 ,aceCa - 5 = 4*7  = 28 
   7*5= 35 
  How would the program need to change if it needs to analyze a sentence instead of a word and produce a similar result?  e.g  'King, are you glad you are king'?
 */

function isPalindrome(str){
    let rerveseString="";
    for(let i = str.length - 1; i >= 0 ; i--){
        rerveseString = rerveseString + str[i];
    }
    return rerveseString === str;
}

//1. str make in lower case
  //2. iterate with two loops
function maxPalindromProdOfStr(str){
    //1. str make in lower case
    const strLowercase = str.toLowerCase();

    let ans = [];
    
    //2. iterate with two loops
    let m = 0;
    for(let p=0; p<strLowercase.length; p++){
        let k =0;
        for(let i=0; i<strLowercase.length; i++){
            
            let possiblePalindromWord = "";
            
            //3. inside inner loop make possibles strings and call isPalindrom function
            for(let j=m; j<=k; j++){

                possiblePalindromWord = possiblePalindromWord + strLowercase[j];
                
            }

            k++;
            // becasue we have to find two max subsequences
                
            const flag = isPalindrome(possiblePalindromWord);
           
            // if(possiblePalindromWord.length > 3 && flag){
            //     console.log("isPalindrome => "+possiblePalindromWord +" flag "+flag + " len "+possiblePalindromWord.length);
            // }

            //4. if string is palindrom the push count in to ans=[];
            if(flag){
                ans.push(possiblePalindromWord.length)
            }
            
        }
        m++;
    }

    //5. the sort the ans[] array;
    console.log('unorder ',ans);
    const result = ans.sort((a,b)=>b-a);
    console.log(result)
    //maximum possible score by building exactly 2 palindromic sub-sequences
    if(result.length > 1){
       
        console.log("Max prod "+result[0] * result[1])
        //6. take ans[0]*ans[1] as result
        return result[0] * result[1];
    }else{
        return -1;
    }
}

const st = "abcdefAnnaRacecarMom";//"amar";//
// console.log(isPalindrome('amar'))
console.log(maxPalindromProdOfStr(st));