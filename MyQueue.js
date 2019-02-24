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
    if (front === rear) {
        console.log('Myqueue is underflow.');
    } else {
        console.log(MyQueue[front]);
        MyQueue[front] = null;
        front++;
    }
}


module.exports = {
    enQueue: enQueue,
    deQueue: deQueue
}