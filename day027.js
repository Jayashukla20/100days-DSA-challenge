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
        newNode.next = this.head
        this.head = newNode;
        this.printLinkedList();
    }
    insertAtTail(data) {
        const newNode = new Node(data);
        newNode.next = null;
        if (this.head === null) {
            this.head = newNode;

        } else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;

            }
            temp.next = newNode
        }
        this.printLinkedList();
    }
    insertAtPosition(data, pos) {
        let length = this.getLength();
        if (pos < 1 || pos > length + 1) {
            console.log("Invalid Positon");
            return;
        }
        if (pos == 1) {
            this.insertAtHead(data);
            return;
        }
        if (pos == length + 1) {
            this.insertAtTail(data);
            return;
        }
        const newNode = new Node(data);
        let temp = this.head
        let count = 1;
        while (count < pos - 1) {
            temp = temp.next;
            count++;

        }
        newNode.next = temp.next;
        temp.next = newNode;
        this.printLinkedList();
    }
    getLength() {
        let count = 0;
        let temp = this.head;
        while (temp != null) {
            count++;
            temp = temp.next;
        }
        return count
    }
   printLinkedList() {
        let temp = this.head;
        let listStr = "";
        while (temp != null) {
            listStr += temp.data + " -> ";
            temp = temp.next;
        }
        listStr += "null";
        console.log(listStr);
    }
}

let list = new SinglyLinkedList();


list.insertAtHead(10);
list.insertAtTail(20);
list.insertAtPosition(15, 2);
list.insertAtPosition(5, 1);
list.insertAtPosition(25, 5);
list.insertAtPosition(30, 7);  // Should print "Invalid Position