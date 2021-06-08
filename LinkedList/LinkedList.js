class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addLast(val){
        const temp = new Node(val);
        temp.next = null;
        if(this.size === 0){
            this.head = this.tail = temp;
        }else{
            this.tail.next = temp;
            this.tail = temp;
        }
        this.size ++;
    }

    addFirst(val){
        let temp = new Node(val);
        if(this.size === 0){
            this.head = this.tail = temp;
        }
        temp.next = this.head;
        this.head = temp;
        this.size++;
    }

    size(){
        return this.size;
    }

    display(){
        let list = '';
        let temp = this.head;
        while(temp != null){
            let link = temp.next == null ? '=>null' : '=>';
            list = list + temp.data + link;
            temp = temp.next;
        }
        console.log(list);
    }

    removeFirstInLinkedList(){
        if(this.size === 0){
            console.log('LinkedList is empty');
        }else if(this.size === 1){
            this.head = this.tail = null;
        }else{
            this.head = this.head.next;
            this.display();
        }
    }

    getFirst(){
        if(this.size == 0) return -1;
        return this.head.data;
    }

    getLast(){
        if(this.size == 0) return -1;
        return this.tail.data
    }

    getAtIndex(index){
        console.log(this.size)
        if(this.size == 0){
            console.log('Invalid args');
            return -1;
        }else if(index < 0 || index >= this.size){
            console.log('Invalid args=>',this.size,index);
            return -1;
        }else{
            let temp = this.head;
            for(let i=1; i<= index; i++){
                temp = temp.next;
            }
            return temp.data;
        }
    }
}

const linkedList = new LinkedList();
linkedList.addLast(10);
linkedList.addLast(20);
linkedList.addLast(30);
console.log(JSON.stringify(linkedList))
console.log(linkedList.getFirst())
// linkedList.removeFirstInLinkedList();
// console.log(linkedList.getLast())
// console.log(linkedList.getAtIndex(1))
console.log(linkedList.addFirst(5))
console.log(linkedList.addFirst(4))
console.log(linkedList.addFirst(3))
// console.log(JSON.stringify(linkedList))
linkedList.display();