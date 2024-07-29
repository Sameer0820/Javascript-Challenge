class Stack {
    constructor() {
        this.arr = [];
    }
    push(value) {
        this.arr.push(value);
    }
    pop() {
        if (this.arr.length !== 0) return this.arr.pop();
        return null;
    }
    peek() {
        if (this.arr.length !== 0) return this.arr[this.arr.length - 1];
        return null;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek()); //Task 3

let stringStack = new Stack();
let str = "sameer raj";

for (const i of str) {
    stringStack.push(i);
}

let newString = "";
while (stringStack.peek()) {
    newString += stringStack.pop();
}
console.log(newString); //Task 4
