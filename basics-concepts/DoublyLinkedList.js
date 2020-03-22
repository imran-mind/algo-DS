class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class LinkedList{
  constructor(value){
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const node = new Node(value);
    node.prev = this.tail;
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
    this.head.prev = node;
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
    console.log('---> leader ', leader.value)
    const follower = leader.next;    
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower; 
    follower.prev = newNode;
    // console.log(this)
    this.length ++;
    this.printList()
  }

  remove(index){
    if(index <= this.length && index > 0 ){
      let prevNode = this.traversToIndex(index - 1); // 10
      if(index === this.length){
        prevNode = null;
      } else {
        let currentNode = prevNode.next; // 10
        const nextNode = currentNode.next;// 17
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
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
}

// 10 --> 15
const myLinkedList = new LinkedList(10);
myLinkedList.append(17);
// myLinkedList.append(5);
// myLinkedList.append(16);
myLinkedList.prepand(3);
// myLinkedList.prepand(2);
// myLinkedList.prepand(1);
myLinkedList.insert(1, 99)
// myLinkedList.insert(100, 99)

// myLinkedList.removeTail();
// myLinkedList.removeTail();
myLinkedList.remove(2)
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
// console.log(myLinkedList);