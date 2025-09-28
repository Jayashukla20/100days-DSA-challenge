class TweetNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class TweetFeed {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 1. Post Tweet (Insert at Head)
    postTweet(tweet) {
        const newNode = new TweetNode(tweet);
        if (this.head == null) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // 2. Delete Oldest Tweet (Delete at Tail)
    deleteOldestTweet() {
        if (this.tail == null) {
            console.log("No tweets to delete");
            return;
        }
        if (this.head === this.tail) {
            this.head = this.tail = null;
            return;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    // 3. Delete Tweet at Index (0-based)
    deleteAtIndex(position) {
        if (this.head == null) {
            console.log("No tweets to delete");
            return;
        }
        if (position === 0) {
            if (this.head === this.tail) {
                this.head = this.tail = null;
                return;
            }
            this.head = this.head.next;
            this.head.prev = null;
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
            this.tail = temp.prev; // last node removed
        }
        if (temp.prev != null) {
            temp.prev.next = temp.next;
        }
    }

    // 4. Show Feed Forward (newest → oldest)
    showFeedForward() {
        let temp = this.head;
        let result = [];
        while (temp != null) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log(result.length > 0 ? result.join(" → ") : "(empty)");
    }

    // 5. Show Feed Backward (oldest → newest)
    showFeedBackward() {
        let temp = this.tail;
        let result = [];
        while (temp != null) {
            result.push(temp.data);
            temp = temp.prev;
        }
        console.log(result.length > 0 ? result.join(" → ") : "(empty)");
    }
}

// Example usage for Day 40:
const feed = new TweetFeed();
feed.postTweet("Hello");
feed.postTweet("DSA Day 40");
feed.postTweet("Linked Lists are fun!");
feed.showFeedForward();    // Linked Lists are fun! → DSA Day 40 → Hello
feed.deleteAtIndex(1);
feed.showFeedForward();    // Linked Lists are fun! → Hello
feed.deleteOldestTweet();
feed.showFeedForward();    // Linked Lists are fun!
feed.showFeedBackward();   // Linked Lists are fun!
