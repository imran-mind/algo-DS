const sorting = (a, b) =>{
  // if(a < b){
  //   return 1;
  // } else if(a > b){
  //   return -1;
  // }
  // return 0;
  return a - b;
}

const mergeTwoArray = (arr1, arr2) => [...arr1, ...arr2].sort((a,b) => sorting(a,b));

console.log(mergeTwoArray([0,3], [1,2,30]));
