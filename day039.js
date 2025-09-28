class TabNode {
    constructor(tabName) {
        this.tabName = tabName;
        this.next = null;
        this.prev = null;
    }
}

class BrowserTabs {
    constructor() {
        this.head = null;
        this.tail = null;
        this.currentTab = null; // Pointer to track the current tab
    }

    // 1. Open New Tab at End
    openTabEnd(tabName) {
        const newNode = new TabNode(tabName);
        if (this.head == null) {
            this.head = this.tail = newNode;
            this.currentTab = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.currentTab = newNode;
        }
    }

    // 2. Open New Tab at a given position (0-based)
    openTabAt(position, tabName) {
        const newNode = new TabNode(tabName);
        if (position === 0) {
            if (this.head == null) {
                this.head = this.tail = newNode;
            } else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
            this.currentTab = newNode;
            return;
        }

        let temp = this.head;
        let count = 0;
        while (temp != null && count < position - 1) {
            temp = temp.next;
            count++;
        }

        if (temp == null) {
            console.log("Position out of bounds");
            return;
        }

        newNode.next = temp.next;
        newNode.prev = temp;
        if (temp.next != null) {
            temp.next.prev = newNode;
        } else {
            this.tail = newNode;
        }
        temp.next = newNode;
        this.currentTab = newNode;
    }

    // 3. Close Tab at Position (0-based)
    closeTabAt(position) {
        if (this.head == null) {
            console.log("No tabs to close");
            return;
        }

        if (position === 0) {
            let removed = this.head;
            if (this.head === this.tail) {
                this.head = this.tail = this.currentTab = null;
                return;
            }
            this.head = this.head.next;
            this.head.prev = null;
            if (this.currentTab === removed) {
                this.currentTab = this.head;
            }
            return;
        }

        let temp = this.head;
        let count = 0;
        while (temp != null && count < position) {
            temp = temp.next;
            count++;
        }

        if (temp == null) {
            console.log("Position out of bounds");
            return;
        }

        if (temp.next != null) {
            temp.next.prev = temp.prev;
        } else {
            this.tail = temp.prev;
        }
        if (temp.prev != null) {
            temp.prev.next = temp.next;
        }

        if (this.currentTab === temp) {
            this.currentTab = temp.next ? temp.next : temp.prev;
        }
    }

    // 4. Move Next Tab
    moveToNextTab() {
        if (this.currentTab && this.currentTab.next) {
            this.currentTab = this.currentTab.next;
            console.log(`Switched to next tab: ${this.currentTab.tabName}`);
        } else {
            console.log("No next tab available");
        }
    }

    // 5. Move Previous Tab
    moveToPrevTab() {
        if (this.currentTab && this.currentTab.prev) {
            this.currentTab = this.currentTab.prev;
            console.log(`Switched to previous tab: ${this.currentTab.tabName}`);
        } else {
            console.log("No previous tab available");
        }
    }

    // 6. Show All Tabs Forward
    showTabsForward() {
        let node = this.head;
        let list = [];
        while (node) {
            list.push(node.tabName);
            node = node.next;
        }
        console.log(list.join(" → "));
    }

    // 7. Show All Tabs Backward
    showTabsBackward() {
        let node = this.tail;
        let list = [];
        while (node) {
            list.push(node.tabName);
            node = node.prev;
        }
        console.log(list.join(" → "));
    }

    showCurrentTab() {
        if (this.currentTab) {
            console.log(`Current tab: ${this.currentTab.tabName}`);
        } else {
            console.log("No current tab");
        }
    }
}

// Example usage (Day 39 requirements)
const browser = new BrowserTabs();
browser.openTabEnd("Google");
browser.openTabEnd("YouTube");
browser.openTabEnd("GitHub");
browser.openTabAt(1, "LinkedIn");
browser.showTabsForward();   // Google → LinkedIn → YouTube → GitHub
browser.closeTabAt(2);
browser.showTabsForward();   // Google → LinkedIn → GitHub
browser.moveToNextTab();     // Switched to next tab: LinkedIn
browser.moveToPrevTab();     // Switched to previous tab: Google
browser.showTabsBackward();  // GitHub → LinkedIn → Google
