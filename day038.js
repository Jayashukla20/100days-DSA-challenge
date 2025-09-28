class ActionNode {
    constructor(action) {
        this.action = action;
        this.next = null;
        this.prev = null;
    }
}

class ActionHistory {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null; // tracks the present action
    }

    // 1. Insert Action at End
    insertAction(action) {
        const newNode = new ActionNode(action);

        // Clear redo history if current not at tail
        if (this.current && this.current !== this.tail) {
            let node = this.current.next;
            while (node) {
                let nextNode = node.next;
                node.prev = node.next = null;
                node = nextNode;
            }
            this.current.next = null;
            this.tail = this.current;
        }

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.current = newNode;
    }

    // 2. Undo
    undo() {
        if (!this.current) {
            console.log("No actions to undo");
            return;
        }
        this.current = this.current.prev;
        if (!this.current) {
            console.log("State: (empty)");
        } else {
            console.log(this.current.action);
        }
    }

    // 3. Redo
    redo() {
        if (!this.current) {
            if (this.head) {
                this.current = this.head;
                console.log(this.current.action);
            } else {
                console.log("No actions to redo");
            }
            return;
        }
        if (!this.current.next) {
            console.log("No actions to redo");
            return;
        }
        this.current = this.current.next;
        console.log(this.current.action);
    }

    // 4. Delete Last Action
    deleteLastAction() {
        if (!this.tail) {
            console.log("History is empty");
            return;
        }
        if (this.head === this.tail) {
            this.head = this.tail = this.current = null;
            return;
        }
        let removed = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        if (this.current === removed) {
            this.current = this.tail;
        }
    }

    // 5. Show History Forward
    showHistoryForward() {
        let node = this.head;
        let list = [];
        while (node) {
            list.push(node.action);
            node = node.next;
        }
        console.log(list.length > 0 ? list.join(" → ") : "(empty)");
    }

    // 6. Show History Backward
    showHistoryBackward() {
        let node = this.tail;
        let list = [];
        while (node) {
            list.push(node.action);
            node = node.prev;
        }
        console.log(list.length > 0 ? list.join(" → ") : "(empty)");
    }
}

// Example usage
const history = new ActionHistory();
history.insertAction("Type A");
history.insertAction("Type B");
history.insertAction("Type C");
history.undo();             // Type B
history.redo();             // Type C
history.deleteLastAction(); // remove "Type C"
history.showHistoryForward();  // Type A → Type B
history.showHistoryBackward(); // Type B → Type A
