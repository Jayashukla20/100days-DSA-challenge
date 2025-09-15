class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    insertAtHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    insertAtTail(data) {
        const newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode
            return;

        }
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next
        }
        temp.next = newNode
    }
    insertAtAnyPosition(data, position) {
        if (position == 1) {
            this.insertAtHead(data)
            return;
        }
        let newNode = new Node(data)
        let temp = this.head;
        let count = 1;
        while (count < position - 1 && temp != null) {
            temp = temp.next;
            count++;
        }
        if (temp === null) {
            console.log("Positon out of range")
            return
        }
        newNode.next = temp.next;
        temp.next = newNode
    }
    printList() {
        let temp = this.head
        let output = "";
        while (temp != null) {
            // console.log(temp.data + "->")
            output += temp.data + "->"
            temp = temp.next
        }
        output += "null";
        console.log(output)
    }
}

let list = new SinglyLinkedList();

list.insertAtHead(10);
list.printList();  // Output: 10 -> null

list.insertAtTail(20);
list.printList();  // Output: 10 -> 20 -> null

list.insertAtAnyPosition(15, 2);
list.printList();  // Output: 10 -> 15 -> 20 -> null
