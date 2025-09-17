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
    insertAtEnd(data) {
        const newNode = new Node(data)
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next != null) {
            current = current.next
        }
        current.next = newNode;
    }
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    deleteFormBeginning() {
        if (this.head == null) {
            console.log("List is empty");
            return
        }
        this.head = this.head.next
    }
    deleteFormEnd() {
        if (this.head == null) {
            console.log("List is empty");
            return
        }
        if(this.head.next==null){
            this.head=null;
            return
        }
        let current=this.head;
        while(current.next.next!=null){
            current=current.next;
        }
        current.next=null;
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
list.insertAtEnd(10);         // List: 10
list.insertAtEnd(20);         // List: 10 -> 20
list.insertAtBeginning(5);    // List: 5 -> 10 -> 20
list.deleteFormEnd();         // List: 5 -> 10
list.deleteFormBeginning();   // List: 10
list.printList();             // Output: 10
