const LinkedList = require('./LinkedList');
console.log(LinkedList)
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }
// }

class LinkedListToStackAdapter{

    constructor(){
        this.list = new LinkedList();
    }

    size(){

    }

    push(){

    }

    pop(){

    }

    top(){

    }
}

const llStackAdapter = new LinkedListToStackAdapter();
console.log(llStackAdapter)