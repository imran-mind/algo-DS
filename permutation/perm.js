function permutateWithRepetitions(permutationOptions, 
    permutationLength = permutationOptions.length,
  ) {
    if (permutationLength === 1) {
      return permutationOptions.map(permutationOption => [permutationOption]);
    }
  
    // Init permutations array.
    const permutations = [];
  
    // Get smaller permutations.
    const smallerPermutations = permutateWithRepetitions(
      permutationOptions,
      permutationLength - 1,
    );
  
    // Go through all options and join it to the smaller permutations.
    permutationOptions.forEach((currentOption) => {
      smallerPermutations.forEach((smallerPermutation) => {
        permutations.push([currentOption].concat(smallerPermutation));
      });
    });
    return permutations;
}

const combinations = permutateWithRepetitions([0,1,2,3,4,5],100);
let count = 0;
combinations.forEach(item => {
    const xor = item.reduce((acc, currentVal)=> acc ^ currentVal);
    if(xor === 0){
        count++;    
    }
});
console.log(count);

// Your Name_ChallengeName.txt
// imran_numerator-fullstack-developer-hiring-challenge.txt
// https://codesandbox.io/s/peaceful-herschel-f4f19

// import React, { useState, useEffect } from "react";

// export const GameList = () =>{
//     const [games, setGames] = useState([]);

//     useEffect(()=>{
//       fetch('http://starlord.hackerearth.com/TopSellingGames')
//         .then(data=>{
//           console.log('=--data',data);
//         })
//     }, [])
//     return(
//       <div>GameList</div>
//     )
// }