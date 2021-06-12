class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
var rLeft;
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
        // console.log('temp => ',JSON.stringify(temp))
        // while(temp != null){
        //     let link = temp.next == null ? '=>null' : '=>';
        //     list = list + temp.data + link;
        //     temp = temp.next;
        // }
        for(let i=0; i<this.size; i++){
            let link = temp.next == null ? '=>null' : '=>';
            list = list + temp.data + link;
            temp = temp.next;
        }
        console.log(list);
    }

    removeFirst(){
        if(this.size === 0){
            console.log('LinkedList is empty');
        }else if(this.size === 1){
            this.head = this.tail = null;
            this.size--;
        }else{
            this.head = this.head.next;
            this.size--;
            // this.display();
        }

    }
    removeLast(){
        if(this.size === 0){
            console.log('LinkedList is empty');
        }else if(this.size === 1){
            this.head = this.tail = null;
            this.size--;
        }else{
            
            let temp = this.head;
            for(let i=0; i<this.size-2; i++){
                temp = temp.next;
            }
            this.tail = temp;
            console.log('removelast',this.tail)
            temp.next = null;
            this.size--;
            // this.display();
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

    addAt(index,val){
        if(index < 0 || index >= this.size){
            console.log('Invalid args');
            return -1;
        }else if(index === 0){
            this.addFirst(val);
        }else if(index === this.size - 1){
            this.addLast(val);
        }else{
            let node = new Node(val);
            let temp = this.head;
            for(let i=0; i<index-1; i++){
                temp = temp.next;
            }
            node.next = temp.next;
            temp.next = node;
            this.size++;
        }
    }

    getAt(index){
        let temp = this.head;
        for(let i=0; i< index; i++){
            temp = temp.next;
        }
        return temp;
    }
    reverseDataIterativly(){
        if(this.size === 0){
            console.log("Linked list is empty");
        }else if(this.size === 1){
            return this.head;
        }else{
            let li = 0;
            let ri = this.size-1;
            while(li < ri){
                let left = this.getAt(li);
                let right = this.getAt(ri);

                let temp = left.data;
                left.data = right.data;
                right.data = temp;
                li++;
                ri--;
            }
        }
    }

    removeAt(index){
        if(index === 0){
            this.removeFirstInLinkedList(val);
        }else if(index === this.size - 1){
            this.removeLast(val);
        }else{
            let temp = this.head;
            for(let i=0; i<index-1; i++){
                temp = temp.next;
            }
            temp.next = temp.next.next;
            this.size--;
        }
    }

    kthFromLast(k){
        if(this.size === 0){
            console.log('LinkedList is empty');
            return -1;
        }else if(k >= this.size){
            console.log('Invalid args');
            return -1;
        }else if(this.size === 1){
            return this.head.data;
        }else{
            let slow = this.head;
            let fast = this.head;

            for(let i=0; i<k; i++){
                fast = fast.next;
            }

            while(fast != this.tail){
                slow = slow.next;
                fast = fast.next;
            }
            return slow.data;
        }
    }
 // getNodeAt(index){
    //     let temp = this.head;
    //     for(let i=0; i<index; i++){
    //         temp = temp.next;
    //     }
    //     return temp;
    // }
    middleOfLinkedList(){
        let slow = this.head;
        let fast = this.head;

        while(fast.next != null && fast.next.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }
    

    mergeTwoSortedList(one,two){
        const newList = new LinkedList(); 
        console.log('one two',one,two)
        while(one != null && two != null){
            if(one.data < two.data){
                // console.log('one.data ',one.data)
                newList.addLast(one.data);
                one = one.next;
            }else{
                // console.log('two.data ',two)
                newList.addLast(two.data);
                two = two.next;
            }
        }
        while(one != null){
            newList.addLast(one.data);
            one = one.next;
        }
        while(two != null){
            newList.addLast(two.data);
            two = two.next;
        }
        // newList.display();
        console.log('newList',newList)
        return newList;
    }
    middleOfList(head,tail){
        let slow = head;
        let fast = head;

        while(fast != tail && fast.next != tail){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    
    mergeSort(head, tail){
        if(head == tail){
            const newList = new LinkedList();
            // console.log(head);
            newList.addLast(head.data);
            return newList;
        }
        const mid = this.middleOfList(head, tail);
        const fsh = this.mergeSort(head,mid);
        const ssh = this.mergeSort(mid.next, tail);
        console.log('ssh => ',fsh,ssh);
        const ll = this.mergeTwoSortedList(fsh.head,ssh.head);
        console.log('ll => ',ll);
        ll.display();
    }


    removeDeuplicates(){
        const res = new LinkedList();
        while(this.size > 0){
            const val = this.getFirst();
            this.removeFirst();

            if(res.size == 0 || res.tail.data != val){
                console.log('val ,',val);
                res.addLast(val);
            }
        }
        res.display();
    }
    
    oddEvenList(){
        let odd = new LinkedList();
        let even = new LinkedList();
        while(this.size > 0){
            const val = this.getFirst();
            this.removeFirst();
            if(val%2 == 0){
                even.addLast(val);
            }else{
                odd.addLast(val);
            }
        }
        
        if(odd.size > 0 && even.size >0){
            odd.tail.next = even.head;
            this.head = odd.head;
            this.tail = even.tail;
            this.size = odd.size + even.size;
        }else if(odd.size>0){
            this.head = odd.head;
            this.tail = odd.tail;
            this.size = odd.size;
        }else{
            this.head = even.head;
            this.tail = even.tail;
            this.size = even.size;
        }
        this.display();
    }

    kthReverse(k){
        let prev = new LinkedList();

        while(this.size > 0){
            let curr = new LinkedList();
            if(this.size >= k) {
                for(let i=0; i<k; i++){
                    const val = this.getFirst();
                    this.removeFirst();
                    curr.addFirst(val);
                }
            }else{
                const os = this.size;
                for(let i=0; i<os; i++){
                    const val = this.getFirst();
                    this.removeFirst();
                    curr.addLast(val);
                }
            }

            if(prev.head == null){
                console.log('prev.null<=> ',prev.tail)
                prev = curr;
            }else{
                console.log('prev.tail=> ',prev.tail)
                prev.tail.next = curr.head;
                prev.tail = curr.tail;
                prev.size += curr.size;
            }
        }
        prev.display();
    }


    reverseLinkedList(){
        if(this.size == 0){
            console.log('list is empty');
            return -1;
        }
        const list = new LinkedList();
        const len = this.size;
        for(let i=0; i<len; i++){
            const val = this.getFirst();
            this.removeFirst();
            list.addFirst(val);
        }
        list.display();
    }

    reverseLinkedListRecursivly(node){
        if(node == null){
            return;
        }
        console.log('node.next');
        this.reverseLinkedListRecursivly(node.next);
    }

    reversePRHelper(node){
        if(node == null) return;
        this.reversePRHelper(node.next);

        if(node == this.tail){
            // nothing to do
        }else{
            node.next.next = node;
        }
    }
    reversePR(){
        this.reversePRHelper(this.head);
        this.head.next = null;
        const temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        this.display();
    }

    reversePRHelper(right, floor){
        if(right == null) return;
        this.reversePRHelper(right.next, floor+1);
        if(floor >= this.size/2){
            const temp = right.data;
            right.data = rLeft.data;
            rLeft.data = temp;
            rLeft = rLeft.next;
        }
    }
    
    reverseDR(){
        rLeft = this.head;
        // console.log('rLeft ',rLeft)
        this.reversePRHelper(this.head,0);
        return rLeft;
    }

    isPalindromHelper(right){
        if(right == null) return true;
        const res = this.isPalindromHelper(right.next);
        if(res == false){
            return false;
        }else if(rLeft.data != right.data){
            return false;
        }else{
            rLeft = rLeft.next;
            return true;
        }
    }

    isPalindrom(){
        rLeft = this.head;
        return this.isPalindromHelper(this.head);
    }
}


const linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(2);
linkedList.addLast(5);
linkedList.addLast(6);
linkedList.addLast(7);
linkedList.addLast(8);
linkedList.addLast(9);
linkedList.addLast(10);
linkedList.display();
console.log(linkedList.isPalindrom());
// linkedList.reversePR();

// console.log('rLeft ',linkedList.reverseDR())
// rLeft.display();
// linkedList.reverseLinkedListRecursivly(linkedList.head);
// linkedList.display();
// linkedList.reverseLinkedList()
// linkedList.kthReverse(2);
// linkedList.display();
// linkedList.oddEvenList();
// linkedList.addLast(50);
// linkedList.removeDeuplicates();
// linkedList.mergeSort(linkedList.head,linkedList.tail);
// const linkedList2 = new LinkedList();
// linkedList2.addLast(2);
// linkedList2.addLast(1);
// linkedList2.addLast(4);
// linkedList2.addLast(3);

// linkedList.mergeTwoSortedList(linkedList.head, linkedList2.head);
// linkedList.addLast(50);
// linkedList.display();
// console.log(linkedList.middleOfLinkedList());
// console.log(linkedList.middleOfList(linkedList.head,linkedList.tail));
// console.log(linkedList.kthFromLast(4));
// console.log(JSON.stringify(linkedList))
// console.log(linkedList.getFirst())
// linkedList.removeFirst();
// console.log(linkedList.getLast())
// console.log(linkedList.getAtIndex(1))
// console.log(linkedList.addFirst(5))
// console.log(linkedList.addFirst(4))
// console.log(linkedList.addFirst(3))
// console.log(JSON.stringify(linkedList))
// linkedList.addAt(5,500);
// linkedList.addAt(3,11);
// linkedList.removeLast();
// linkedList.removeLast();
// linkedList.addAt(6,900);

// linkedList.reverseDataIterativly()
// linkedList.removeAt(1);

// console.log(linkedList.size)


class LinkedListToStackAdapter{

    constructor(){
        this.list = new LinkedList();
        // console.log(this.list.size);
    }

    size(){
        return this.list.size;
    }

    push(val){
        this.list.addFirst(val);
    }

    pop(){
        this.list.removeFirst();
    }

    top(){
        return this.list.getFirst();
    }

    display(){
        this.list.display();
    }
}

// const llStackAdapter = new LinkedListToStackAdapter();
// llStackAdapter.push(10);
// llStackAdapter.push(20);
// llStackAdapter.push(30);
// llStackAdapter.push(40);
// console.log('---',llStackAdapter.size())
// llStackAdapter.display();
// llStackAdapter.pop();
// // llStackAdapter.pop();
// console.log('---top--',llStackAdapter.top());
// console.log('---',llStackAdapter.size())
// llStackAdapter.display();



class LinkedListToQueueAdapter{

    constructor(){
        this.list = new LinkedList();
        // console.log(this.list.size);
    }

    size(){
        return this.list.size;
    }

    add(val){
        this.list.addLast(val);
    }

    remove(){
        this.list.removeFirst();
    }

    peek(){
        return this.list.getFirst();
    }

    display(){
        this.list.display();
    }
}

const queueAdapter = new LinkedListToQueueAdapter();
// queueAdapter.add(10);
// queueAdapter.add(20);
// queueAdapter.add(30);
// queueAdapter.add(40);
// console.log('---',queueAdapter.size())
queueAdapter.display();
// queueAdapter.remove();
// queueAdapter.remove();
// console.log('---peek--',queueAdapter.peek());
// console.log('---',queueAdapter.size())
// queueAdapter.display();