class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    return this.stack.push(element);
  }

  pop() {
    return this.stack.splice(-1);
  }

  size() {
    return this.stack.length;
  }

  printStack() {
    var stackString = "";
    for (var i = 0; i < this.size(); i++) {
      stackString += this.stack[i] + ",";
    }
    console.log("stack: " + stackString);
  }
}

var stacks = new Stack();
stacks.push(5);
stacks.push(10);
stacks.push(15);
stacks.push(20);
stacks.pop();
stacks.pop();
stacks.push(66665);
stacks.push(20);
console.log(stacks.printStack());
