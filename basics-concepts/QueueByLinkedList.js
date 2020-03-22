class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
  
    enqueue(value){
      const newNode = new Node(value);
      if(this.length === 0){
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length ++;
      return this;
    }
  
    dequeue(){
      if(this.length === 0){
        return null;
      }
      // console.log('--> ',this.first)
      const dequeItem = this.first;
      this.first = this.first.next;
      this.length --;
      return dequeItem.value;
    }
  }
  
  const myQue = new Queue();
  myQue.enqueue(3);
  myQue.enqueue(1);
  myQue.enqueue(2);
  myQue.dequeue();
  