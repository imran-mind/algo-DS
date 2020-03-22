const mergeTwoArray = (arr1, arr2) => {
    arr2.forEach(item => arr1.push(item))
  return arr1.sort((a,b)=> sorting(b,a));
}

const sorting = (a, b) =>{
  if(a < b){
    return 1;
  } else if(a > b){
    return -1;
  }
  return 0;
}

mergeTwoArray([0,3], [1,2,30]);