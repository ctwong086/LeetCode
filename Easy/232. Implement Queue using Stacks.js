//232. Implement Queue using Stacks

//Attempt#1
let MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
}

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
    }
    
    let e = this.stack2.pop();
    
    while(this.stack2.length > 0) {
        this.stack1.push(this.stack2.pop());
    }
    return e;
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while(this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
    }
    let e = this.stack2.pop();
    this.stack2.push(e);
    while(this.stack2.length > 0) {
        this.stack1.push(this.stack2.pop());
    }
    return e;
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0;
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */