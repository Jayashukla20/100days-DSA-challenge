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
    insert(data, position) {
        const newNode = new Node(data)
        if (position == 1) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        let count = 1;
        while (current != null && count < position - 1) {
            current = current.next;
            count++;
        }
        if (current == null) {
            console.log("Invalid position")
            return;
        }
        newNode.next = current.next
        current.next = newNode;
    }
    delete(position) {
        if (this.head == null) {
            console.log("List is empty")
            return;
        }
        if (position === 1) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let count = 1;
        while (current.next != null && count < position - 1) {
            current = current.next;
            count++;
        }
        if (current.next == null) {
            console.log("Invalid position")
            return;
        }
        current.next = current.next.next
    }
    printList() {
        let current = this.head;
        let output = "";
        while (current != null) {
            output += current.data;
            if (current.next != null) {
                output += " -> ";
            }
            current = current.next;
        }
        console.log(output);
    }
}

const list = new LinkedList();
list.insert(10, 1);  // List: 10
list.insert(20, 2);  // List: 10 -> 20
list.insert(30, 2);  // List: 10 -> 30 -> 20
list.delete(1);      // List: 30 -> 20
list.printList();    // Output: 30 -> 20
