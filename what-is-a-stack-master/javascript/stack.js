class Stack {
  constructor() {
    this.stack = [];
    this.limit = 10;
  }

  // add item to top of stack if not full
  // if full throw error
  push(item) {
    if (!this.isFull()) {
      this.stack.push(item);
    } else {
      throw new Error('Stack is full!');
    }
  }

  // remove item from top of stack and return it
  pop() {
    return this.stack.pop();
  }

  // return item at top of stack without removing it
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // return true if stack is empty, otherwise false
  isEmpty() {
    return this.stack.length === 0;
  }

  // return true if stack is full, otherwise false
  isFull() {
    return this.stack.length >= this.limit;
  }

  // return number of items in stack
  size() {
    return this.stack.length;
  }

  // return -1 if item not in stack, otherwise integer representing how far it is from the top
  search(target) {
    const index = this.stack.lastIndexOf(target);
    return index !== -1 ? this.stack.length - index - 1 : -1;
  }

  // print contents of stack: do not return the stack itself!
  print() {
    console.log(this.stack.join(' <- '));
  }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // Output: 3
console.log(stack.pop()); // Output: 3
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
stack.print(); // Output: 2 <- 1