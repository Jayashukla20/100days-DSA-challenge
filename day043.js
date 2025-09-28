class TaskNode {
    constructor(task) {
        this.task = task;
        this.next = null;
    }
}

class RoundRobinScheduler {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 1. Add Task at End
    addTaskEnd(task) {
        const newNode = new TaskNode(task);

        if (this.head === null) {
            this.head = this.tail = newNode;
            newNode.next = this.head; // circular link
        } else {
            this.tail.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
        }
    }

    // 2. Add Task at Beginning
    addTaskBeginning(task) {
        const newNode = new TaskNode(task);

        if (this.head === null) {
            this.head = this.tail = newNode;
            newNode.next = this.head;
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.head = newNode;
        }
    }

    // 3. Display tasks once (one full cycle)
    displayTasks() {
        if (this.head === null) {
            console.log("No tasks in scheduler");
            return;
        }

        let result = [];
        let current = this.head;

        do {
            result.push(current.task);
            current = current.next;
        } while (current !== this.head);

        console.log(result.join(" -> "));
    }

    // 4. Simulate one round of execution
    simulateRound() {
        if (this.head === null) {
            console.log("No tasks to execute");
            return;
        }

        let current = this.head;

        do {
            console.log(`Executing: ${current.task}`);
            current = current.next;
        } while (current !== this.head);
    }
}

// Example usage
const scheduler = new RoundRobinScheduler();
scheduler.addTaskEnd("Task1");
scheduler.addTaskEnd("Task2");
scheduler.addTaskBeginning("Task3");

scheduler.displayTasks();  
// Expected: Task3 -> Task1 -> Task2

scheduler.simulateRound();
// Expected execution order:
// Executing: Task3
// Executing: Task1
// Executing: Task2
