class Stack{
    constructor(){
      this.stack = [];
    }
  
    push(value){
      this.stack.push(value);
      return this;
    }
  
    pop(){
      return this.stack.pop();
    }
  
    peek(){
      return this.stack[this.stack.length - 1];
    }
  }
  
  const myStack = new Stack();
  myStack.push(12)
  myStack.push(13)
  myStack.push(14)
  myStack.pop()
  // myStack.pop()
  // myStack.pop()
  // myStack.pop()
  myStack.peek()