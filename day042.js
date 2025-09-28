class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SortedCircularList {
    constructor() {
        this.head = null;
    }

    // Insert into sorted circular list
    insert(insertVal) {
        const newNode = new Node(insertVal);

        // 1. Empty list case
        if (this.head === null) {
            this.head = newNode;
            newNode.next = newNode; // circular self-loop
            return;
        }

        let current = this.head;

        while (true) {
            // Case 1: Insert between two nodes in sorted order
            if (current.val <= insertVal && insertVal <= current.next.val) {
                break;
            }

            // Case 2: Wrap-around point (max to min)
            if (current.val > current.next.val) {
                if (insertVal >= current.val || insertVal <= current.next.val) {
                    break;
                }
            }

            current = current.next;

            // If we looped back to head, just insert anywhere
            if (current === this.head) break;
        }

        // Insert newNode after current
        newNode.next = current.next;
        current.next = newNode;
    }

    // Traverse from head (1 full cycle)
    traverse() {
        if (this.head === null) {
            console.log("(empty)");
            return;
        }

        let result = [];
        let current = this.head;

        do {
            result.push(current.val);
            current = current.next;
        } while (current !== this.head);

        console.log(result.join(" → "));
    }
}

// Example usage
const cll = new SortedCircularList();
cll.insert(1);
cll.insert(3);
cll.insert(4);

// Current list: 1 → 3 → 4 → 1
cll.traverse();

cll.insert(2); // Insert into sorted position
cll.traverse(); // Expected: 1 → 2 → 3 → 4 → 1
