class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class BrowseHistory {
    constructor() {
        this.head = null;
        this.current = null; // Pointer to the current page
    }
    visit(url) {
        const newNode = new Node(url);
        if (this.head == null) {
            this.head = newNode;
            this.current = newNode;
            return;
        }
        // #move to end and append
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
        this.current = newNode; // Move current to the new page
    }
    back(){
        if (this.current == this.head || this.head == null) {
            console.log("No previous page");
            return;
        }
        let temp = this.head;
        while (temp.next != this.current) {
            temp = temp.next;
        }
        this.current = temp;
    }
    forward() {
        if (this.current == null || this.current.next == null) {
            console.log("No forward page");
            current=current.next;
            return;
        }
        this.current = this.current.next;
    }
    showCurrent() {
        if (this.current == null) {
            console.log("No pages visited");
            return;
        }
        console.log("Current Page: " + this.current.data);
    }
}


// Example Usage
const history = new BrowseHistory();
history.visit("google.com");
history.visit("github.com");
history.visit("stackoverflow.com");
history.showCurrent();  // Current Page: stackoverflow.com
history.back();
history.showCurrent();  // Current Page: github.com
history.back();
history.showCurrent();  // Current Page: google.com
history.forward();
history.showCurrent();  // Current Page: github.com