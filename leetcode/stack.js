var MinStack = function() {
    this.stack = [];
    this.min = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if(this.min === null){
      this.min = x;
  }else{
      this.min = Math.min(x, this.min);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
   const poped = this.stack.pop();
   if(poped === this.min){
       this.min = this.stack.length ? Math.min(...this.stack) : null;
   }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};


var obj = new MinStack();
// console.log(obj.top());

obj.push(30);
obj.push(20);
obj.push(10);
obj.push(40);

obj.pop();
obj.pop();
console.log('stack: ',obj);
// console.log('getMin: ',obj.getMin());
// console.log('stack: ',obj.top());