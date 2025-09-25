class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtEnd(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    insertAtBeginning(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    deleteByValue(value) {
        if (this.head === null) {
            return;
        }
        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next !== null && current.next.data !== value) {
            current = current.next;
        }
        if (current.next === null) {
            return;  // value not found
        }
        current.next = current.next.next;
    }

    deleteAtPosition(position) {
        if (this.head === null || position < 1) {
            return;
        }
        if (position === 1) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let count = 1;
        while (current.next !== null && count < position - 1) {
            current = current.next;
            count++;
        }
        if (current.next === null) {
            return;  // position out of bounds
        }
        current.next = current.next.next;
    }

    printList() {
    let current = this.head;
    let result = '';
    while (current !== null) {
        result += current.data;
        if (current.next !== null) {
            result += ' → ';
        }
        current = current.next;
    }
    console.log(result);
}

}

// Usage with an instance:
const list = new LinkedList();

list.insertAtEnd(10);
list.printList();
list.insertAtEnd(20);
list.printList();
list.insertAtEnd(30);
list.printList();
list.insertAtBeginning(5);
list.printList();
list.insertAtBeginning(1);
list.printList();
list.deleteByValue(20);
list.printList();
list.deleteAtPosition(3);

list.printList();
