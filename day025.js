
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
    insertAthead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    insertAtTail(data) {
        const newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            return
        }
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode
    }
    insertAtAnyPosition(data, position) {
        if (position == 1) {
            this.insertAthead(data)
            return;
        }
        const newNode = new Node(data);
        let temp = this.head;
        let count = 1;
        while (count < position - 1 && temp != null) {
            temp = temp.next
            count++;
            
        }
        if (temp == null) {
            console.log("Position out of range")
            return;
        }
        newNode.next = temp.next
        temp.next = newNode;
    }
    printList() {
        let temp = this.head;
        let output = "";
        while (temp != null) {
            // console.log(temp.data + "->")
            output += temp.data + "->";
            temp = temp.next;
        }
        output+="null"
        console.log(output);
    }
}
let list = new SinglyLinkedList();
list.insertAthead(10);
list.printList(); 

list.insertAtTail(20);
list.printList();

list.insertAtAnyPosition(15, 2);
list.printList();
