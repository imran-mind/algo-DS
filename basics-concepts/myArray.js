class MyArray{
    constructor(){
      this.length = 0;
      this.data = {};
    }
  
    push(item) {
      this.data[this.length] = item;
      this.length ++;
      return this.length;
    }
  
    pop(){
      if(this.length > 0){
        const lastItem = this.data[this.length - 1]; // c
        delete this.data[this.length - 1];
        this.length --;
        return lastItem;
      }
    }
  
    delete(index){
      this.shiftItems(index)
    }
  
    shiftItems(index){
      for(let i = index; i < this.length - 1; i++){
        this.data[i] = this.data[i+1];
      }
      delete this.data[this.length - 1];
    }
  }
  
  const myArray = new MyArray();
  myArray.push('a');
  myArray.push('b');
  myArray.push('c');
  myArray.delete(0)
  // myArray.pop();
  // myArray.pop();
  // myArray.pop();
  // myArray.pop();
  console.log(myArray);