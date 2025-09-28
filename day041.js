class PlayerNode {
    constructor(name) {
        this.name = name;
        this.next = null;
    }
}

class CircularQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // 1. Insert Player at End
    insertEnd(name) {
        const newNode = new PlayerNode(name);
        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = this.head; // circular link
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // 2. Insert Player at Beginning
    insertBeginning(name) {
        const newNode = new PlayerNode(name);
        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head; // maintain circular link
        }
        this.size++;
    }

    // 3. Traverse Forward (1 full cycle)
    traverseForward() {
        if (!this.head) {
            console.log("(empty)");
            return;
        }
        let result = [];
        let current = this.head;
        do {
            result.push(current.name);
            current = current.next;
        } while (current !== this.head);
        console.log(result.join(" → "));
    }

    // 4. Traverse Multiple Rounds
    traverseRounds(k) {
        if (!this.head) {
            console.log("(empty)");
            return;
        }
        let result = [];
        let current = this.head;
        let steps = k * this.size;
        for (let i = 0; i < steps; i++) {
            result.push(current.name);
            current = current.next;
        }
        console.log(result.join(" → "));
    }
}

// Example usage
const queue = new CircularQueue();
queue.insertEnd("Alice");
queue.insertEnd("Bob");
queue.insertEnd("Charlie");
queue.insertBeginning("Zara");

queue.traverseForward();   // Zara → Alice → Bob → Charlie
queue.traverseRounds(2);   // Zara → Alice → Bob → Charlie → Zara → Alice → Bob → Charlie
