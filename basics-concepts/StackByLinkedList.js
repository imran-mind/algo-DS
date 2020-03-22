class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack{
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
  
    push(value){
      const newNode = new Node(value);
      if(this.isEmpty()){
        this.top = newNode;
        this.bottom = newNode;
      } else {
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
      }
      this.length += 1;
      return this; 
    }
  
    pop(){
      if(this.isEmpty()){
        return null;
      }
      const popedItem = this.top;
      this.top = this.top.next;
      this.length --;
      return popedItem.value
    }
  
  
    peek(){
      if(this.isEmpty()){
        return null;
      }
      return this.top.value;
    }
  
    isEmpty(){
      return (this.top === null && this.bottom === null) ? true : false;
    }
  
  }
  
  const myStack = new Stack();
  
  // myStack.isEmpty();
  myStack.push('google');
  myStack.push('linkedin');
  myStack.push('gmail');
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.pop());
  // console.log(myStack.pop());
  // console.log(myStack.pop());
  // console.log(myStack.peek());
  // console.log('--------------------')
  // console.log(myStack)