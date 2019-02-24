const MyQueue = [], MAXSIZE = 5;
let front = 0, rear = 0;

const enQueue = (element) => {
    if (rear === MAXSIZE) {
        console.log('MyQueue is overflow.');
    } else {
        MyQueue[rear] = element;
        rear++;
    }
}

const deQueue = () => {
    if (isEmpty()) {
        console.log('Myqueue is underflow.');
    } else {
        console.log(MyQueue[front]);
        MyQueue[front] = null;
        front++;
    }
}

const frontQ = () => {
    console.log('Front element of MyQueue : ', MyQueue[front]);
    return MyQueue[front];
}


const size = () => {
    console.log('Size of MyQueue : ', MyQueue.length);
    return MyQueue.length;
}



const isEmpty = () => {
    if (front === rear) {
        return true;
    }
    return false;
}

module.exports = {
    enQueue: enQueue,
    deQueue: deQueue,
    frontQ: frontQ,
    size: size,
    isEmpty: isEmpty
}