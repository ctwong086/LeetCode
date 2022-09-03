//https://leetcode.com/problems/implement-stack-using-queues/

//Attempt#1
let MyStack = function() {
    this.queue = [];
}

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
}

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let temp = [];
    
    while(this.queue.length > 1) {
        temp.push(this.queue.shift());
    }
    let last = this.queue.shift();
    this.queue = temp;
    return last;
}

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let temp = [];
    
    while(this.queue.length > 1) {
        temp.push(this.queue.shift());
    }
    let last = this.queue.shift();
    temp.push(last);
    this.queue = temp;
    return last;
}

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */