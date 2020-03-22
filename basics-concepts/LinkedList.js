class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  class LinkedList{
    constructor(value){
      this.head = {
        value: value,
        next: null
      }
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value){
      const node = new Node(value);
      this.tail.next = node;
      this.tail = node;
      this.length ++;
      return this;
      // this.head.next = this.tail;
      // this.head = node;
    }
  
    prepand(value){
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
      this.length ++;
      return this;
      // this.head = node;
    }
  
    printList(){
      let node = this.head;
      let list = '';
      for (let i = 0; i < this.length; i++){
        let appender = this.length - 1 === i ? '' : '-->';
        if(node !== null){
          list = list + node.value + appender;
          node = node.next;
        }
      }
      return list;
    }
     
    insert(index, value){
      // check the params
      if(index >= this.length){
        return this.append(value);
      }
      const newNode = new Node(value);
      const leader = this.traversToIndex(index - 1);
      const holdingPointer = leader.next;    
      leader.next = newNode;
      newNode.next = holdingPointer; 
      this.length ++;
      this.printList()
    }
  
    remove(index){
      if(index <= this.length && index > 0 ){
        let prevNode = this.traversToIndex(index - 1); // 10
        if(index === this.length){
          prevNode = null;
        } else {
          let currentNode = prevNode.next; // 99
          const nextNode = currentNode.next;// 5
          prevNode.next = nextNode;
          currentNode = null;
          this.length --;
          this.printList()
        }
      }else{
        console.log('Please enter a valid index between [1..'+this.length+']');
      }
      // console.log('-> length ',this.length);
    }
  
    removeTail(){
      const node = this.head;
      const leader = this.traversToIndex(this.length - 1);
      leader.next = null;
      this.length --;
      this.printList();
    } 
    traversToIndex(index){
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next; 
        counter ++;
      }
      return currentNode;
    }

    search(value){
      let temp = this.head;
      let index = 0;
      while(temp != null){
        // console.log('------------> ', temp.next);
        if(temp.value === value){
          return index;
        }
        temp = temp.next;
        index ++;
      }
      if(temp === null){
        return 'NOT_FOUND';
      }
    }
    revers(){
      if(!this.head.next){
        return this.head;
      } 
      let first = this.head;
      this.tail =  this.head;
      let second = first.next;
      while(second){
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
      this.head.next = null;
      this.head = first;
      return this;
    }
  }
  
  // 10 --> 15
  const myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepand(1);
  // myLinkedList.insert(100, 99)
  myLinkedList.insert(5, 99);
  console.log('Index => ',myLinkedList.search(2));
  // myLinkedList.revers();
  // myLinkedList.removeTail();
  // myLinkedList.removeTail();
  // myLinkedList.remove(1)
  // myLinkedList.remove(1)
  // myLinkedList.remove(1)
  // myLinkedList.remove(1)
  // myLinkedList.remove(1)
  // myLinkedList.insert(3, 30)
  console.log(myLinkedList.printList())
  
  // myLinkedList.append(90);
  // myLinkedList.prepand(12);
  // myLinkedList.prepand(1);
  // myLinkedList.prepand(2);
  // console.log(JSON.stringify(myLinkedList.length))
  console.log(myLinkedList);