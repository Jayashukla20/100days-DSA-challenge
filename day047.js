class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    traverse() {
        let result = [];
        if (!this.head)
            return result;
        let current = this.head;
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);
        return result;
    }

    insertAtHead(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head
        }
    }

    insertAtAnyPosition(data, pos) {
        let length = this.getLength();
        const newNode = new Node(data);
        if (pos < 1 || pos > length + 1) {
            console.log("Invalid Positon");
            return;
        }
        if (pos == 1) {
            this.insertAtHead(data);
            return;
        }
        let current = this.head;
        let prev = null;
        let count = 1;
        while (count < pos) {
            prev = current;
            current = current.next;
            count++;
        }
        prev.next = newNode;
        newNode.next = current;
    }

    deleteNode(value) {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        let temp = this.tail;
        if (current.data === value && current.next === this.head) {
            this.head = null;
            this.tail = null;
            return;
        }
        do {
            if (current.data === value) {
                temp.next = current.next;
                if (current === this.head) {
                    this.head = this.head.next;
                    this.tail.next = this.head;
                    temp = this.head;
                }
                if (current === this.tail) {
                    this.tail = temp;
                    this.tail.next = this.head;
                    current.next = null;
                }
                return;
            }
            temp = current;
            current = current.next;
        }
        while (current !== this.head);
        console.log("Value not found in the list");
    }

    deleteAtPosition(pos) {
        let length = this.getLength();
        if (pos < 1 || pos > length) {
            console.log("Invalid Position");
            return;
        }
        if (pos == 1) {
            if (this.head === this.tail) {
                this.head = this.tail = null;
            }
            else {
                this.head = this.head.next;
                this.tail.next = this.head;
            }
            return;
        }
        let current = this.head;
        let prev = null;
        let count = 1;
        while (count < pos) {
            prev = current;
            current = current.next;
            count++;
        }
        prev.next = current.next;
        if (current === this.tail) {
            this.tail = prev;
        }
    }
    getLength() {
        if (!this.head) return 0;
        let current = this.head;
        let count = 0;
        do {
            count++;
            current = current.next;
        }
        while (current !== this.head);
        return count;
    }
}
// example usage
const cll = new CircularLinkedList();
cll.insertAtHead(10);
cll.insertAtHead(20);
cll.insertAtAnyPosition(30, 2);
console.log(cll.traverse());
cll.deleteNode(20);
console.log(cll.traverse());
cll.deleteAtPosition(2);
console.log(cll.traverse());
