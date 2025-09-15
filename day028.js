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
    containsDuplicate(data) {
        let temp=this.head;
        while(temp!=null){
            if(temp.data==data){
                return true;
            }
            temp=temp.next;
        }
        return false;
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
        if(this.containsDuplicate(data)){
            console.log("Duplicate Entry Not Allowed");
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

list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(4);
list.insertAtTail(5);
// inserting 3 at position 3
list.insertAtPosition(3, 3); //  output 1 -> 2 -> 3 -> 4 -> 5 -> null
