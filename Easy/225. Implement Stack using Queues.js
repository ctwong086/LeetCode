//https://leetcode.com/problems/implement-stack-using-queues/

//Attempt#1
let MyStack = function() {
    this.stack = [];
}

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack.push(x);
}

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let temp = [];
    
    while(this.stack.length > 1) {
        temp.push(this.stack.shift());
    }
    let e = this.stack.shift();
    this.stack = temp;
    return e;
}

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let temp = [];
    
    while(this.stack.length > 1) {
        temp.push(this.stack.shift());
    }
    let e = this.stack.shift();
    temp.push(e);
    this.stack = temp;
    return e;
}

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.stack.length === 0;
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */