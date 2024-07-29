class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
} //Task 1

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    remove() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }
    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display();
list.remove();
list.display(); //Task 2