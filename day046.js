class NetworkNode {
    constructor(name) {
        this.name = name;
        this.next = null;
    }
}

class TokenRingNetwork {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 1. AddNode → Insert a new computer/node at end
    addNode(name) {
        const newNode = new NetworkNode(name);

        if (this.head === null) {
            this.head = this.tail = newNode;
            newNode.next = this.head; // circular
        } else {
            this.tail.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
        }
    }

    // 2. ShowNetwork → Traverse once around the ring
    showNetwork() {
        if (this.head === null) {
            console.log("No nodes in the network");
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

    // 3. PassToken(k) → simulate passing token k times
    passToken(k) {
        if (this.head === null) {
            console.log("No nodes in the network to pass token");
            return;
        }

        let current = this.head;

        for (let i = 0; i < k; i++) {
            console.log(`Token at: ${current.name}`);
            current = current.next;
        }
    }
}

// Example Usage
const network = new TokenRingNetwork();
network.addNode("ComputerA");
network.addNode("ComputerB");
network.addNode("ComputerC");

network.showNetwork();
// Expected: ComputerA -> ComputerB -> ComputerC

network.passToken(6);
// Expected:
// Token at: ComputerA
// Token at: ComputerB
// Token at: ComputerC
// Token at: ComputerA
// Token at: ComputerB
// Token at: ComputerC
