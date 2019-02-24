const MyStack = [], MAXSIZE = 5;
let top = -1;

// MyStack implementation.
// This function check whether MyStack is full or not,
// if its full then it return true otherwise it returns false
const isFull = () => {
    if (MAXSIZE === top)
        return true;
    else
        return false;
}

// MyStack implementation.
// This function check whether MyStack is Empty or not,
// if its empty then it return true otherwise it returns false
const isEmpty = () => {
    if (top === -1)
        return true;
    else
        return false;
}

// MyStack implementation.
// This function inserts the element into the MyStack
// it does not return any value.
const push = (element) => {
    if (!isFull()) {
        top = top + 1;
        MyStack[top] = element;
    } else {
        console.log('MyStack is Fulled.');
    }
}

// MyStack implementation.
// This function removes the element from the MyStack
// and return the removed element.
const pop = () => {
    let element;
    if (!isEmpty()) {
        element = MyStack[top];
        top = top - 1;
        return element;
    } else {
        console.log('MyStack is empty.');
        return -1;
    }
}

// MyStack implementation.
// This function always gives the last element or top
// element of the MyStack 
const peek = () => {
    if (!isEmpty()) {
        console.log('MyStack peek : ',MyStack[top])
        return MyStack[top];
    }
}

const size = () => {
    console.log('MyStack size : ',MyStack.length)
    return MyStack.length;
}


module.exports = {
    isFull: isFull,
    isEmpty: isEmpty,
    push: push,
    pop: pop,
    peek: peek,
    size: size
}
