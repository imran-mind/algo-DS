const selectionSort = (a) => {
    const len = a.length
    for(let i = 0; i < len; i++ ){
      let min = i;
      for(let j = i + 1; j < len; j++ ){
        // 5 < 5 true
        if(a[j] < a[min]){ 
          //j= 3, min = 2
          min = j;
        }
      }
      const temp = a[i];
      a[i] = a[min];
      a[min] = temp;
    }
    return a;
  }
  
  selectionSort([3,1,0,2,5]);