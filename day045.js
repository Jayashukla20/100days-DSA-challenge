class PrinterNode {
    constructor(name) {
        this.name = name;
        this.next = null;
    }
}

class PrinterQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 1. Add Printer at End
    addPrinter(name) {
        const newNode = new PrinterNode(name);

        if (this.head === null) {
            this.head = this.tail = newNode;
            newNode.next = this.head; // circular link
        } else {
            this.tail.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
        }
    }

    // 2. Show Printers (one full cycle)
    showPrinters() {
        if (this.head === null) {
            console.log("No printers in the queue");
            return;
        }

        let result = [];
        let current = this.head;

        do {
            result.push(current.name);
            current = current.next;
        } while (current !== this.head);

        console.log(result.join(" -> "));
    }

    // 3. Assign Jobs (k jobs in round-robin fashion)
    assignJobs(k) {
        if (this.head === null) {
            console.log("No printers available");
            return;
        }

        let current = this.head;

        for (let i = 0; i < k; i++) {
            console.log(`Job assigned to: ${current.name}`);
            current = current.next; // move to next printer
        }
    }
}

// Example usage
const pq = new PrinterQueue();
pq.addPrinter("Printer1");
pq.addPrinter("Printer2");
pq.addPrinter("Printer3");

pq.showPrinters();
// Expected: Printer1 -> Printer2 -> Printer3

pq.assignJobs(7);
// Expected:
// Job assigned to: Printer1
// Job assigned to: Printer2
// Job assigned to: Printer3
// Job assigned to: Printer1
// Job assigned to: Printer2
// Job assigned to: Printer3
// Job assigned to: Printer1
