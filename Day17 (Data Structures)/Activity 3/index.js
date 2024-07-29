class Queue {
    constructor() {
        this.arr = [];
    }

    enqueue(value) {
        this.arr.push(value);
    }
    dequeue() {
        if (this.arr.length !== 0) return this.arr.shift();
        return null;
    }
    front() {
        if (this.arr.length !== 0) return this.arr[0];
        return null;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.front()); //Task 5

class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addJob(job) {
        this.queue.enqueue(job);
        console.log(`Added a print job: ${job}`);
    }
    processJob() {
        while (this.queue.front() !== null) {
            const job = this.queue.dequeue();
            console.log(`Processing print job: ${job}`);
        }
    }
}

let printer = new PrinterQueue();
printer.addJob("Paper 1");
printer.addJob("Paper 2");
printer.addJob("Paper 3");
printer.processJob(); //Task 6
