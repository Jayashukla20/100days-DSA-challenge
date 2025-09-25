class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class TaskManager {
    constructor() {
        this.head = null;
    }
    addTaskAtEnd(name) {
        const newNode = new Node(name);
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
    }
    addTaskAtBeginning(name) {
        const newNode = new Node(name);
        newNode.next = this.head;
        this.head = newNode;
    }
    deleteTaskByName(name) {
        if (this.head == null) {
            console.log("No tasks to delete");
            return;
        }
        if (this.head.data === name) {
            this.head = this.head.next;
            return;
        }   
        let temp = this.head;
        while (temp.next != null && temp.next.data !== name) {
            temp = temp.next;
        }
        if (temp.next == null) {
            console.log("Task not found");
            return;
        }
        temp.next = temp.next.next;
    }
    deleteTaskByPosition(position) {
        if (this.head == null || position < 1) {
            console.log("No tasks to delete or invalid position");
            return;
        }
        if (position === 1) {
            this.head = this.head.next;
            return;
        }
        let temp = this.head;
        let count = 1;
        while (temp.next != null && count < position - 1) {
            temp = temp.next;
            count++;
        }
        if (temp.next == null) {
            console.log("Position out of bounds");
            return;
        }
        temp.next = temp.next.next;
    }
    ShowTasks() {
        let temp = this.head;
        let result = '';
        while (temp != null) {
            result += temp.data;    
            if (temp.next != null) {
                result += ' → ';
            }
            temp = temp.next;
        }
        console.log(result);
    }
}
// Example Usage
const taskManager = new TaskManager();
taskManager.addTaskAtEnd("Finish Homework");
taskManager.addTaskAtEnd("Buy Groceries");
taskManager.addTaskAtBeginning("Morning Exercise");
taskManager.ShowTasks();  //Finish Homework→ Buy Groceries → Morning Exercise
taskManager.deleteTaskByName("Buy Groceries");
taskManager.ShowTasks(); // Morning Exercise → Finish Homework
taskManager.deleteTaskByPosition(2);
taskManager.ShowTasks(); // Morning Exercise