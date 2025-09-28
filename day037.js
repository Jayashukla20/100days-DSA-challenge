class SongNode {
    constructor(songName) {
        this.songName = songName;
        this.next = null;
        this.prev = null;
    }
}

class MusicPlaylist {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 1. Add Song at Head
    addAtHead(song) {
        const newNode = new SongNode(song);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // 2. Add Song at Tail
    addAtTail(song) {
        const newNode = new SongNode(song);
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // 3. Add Song at Index
    addAtIndex(index, song) {
        if (index === 0) {
            this.addAtHead(song);
            return;
        }
        let temp = this.head;
        let count = 0;
        while (temp && count < index - 1) {
            temp = temp.next;
            count++;
        }
        if (!temp) {
            console.log("Index out of bounds");
            return;
        }
        const newNode = new SongNode(song);
        newNode.next = temp.next;
        newNode.prev = temp;
        if (temp.next) {
            temp.next.prev = newNode;
        } else {
            this.tail = newNode;
        }
        temp.next = newNode;
    }

    // 4. Delete Song at Head
    deleteAtHead() {
        if (!this.head) return;
        if (this.head === this.tail) {
            this.head = this.tail = null;
            return;
        }
        this.head = this.head.next;
        this.head.prev = null;
    }

    // 5. Delete Song at Tail
    deleteAtTail() {
        if (!this.tail) return;
        if (this.head === this.tail) {
            this.head = this.tail = null;
            return;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    // 6. Delete Song at Index
    deleteAtIndex(index) {
        if (index === 0) {
            this.deleteAtHead();
            return;
        }
        let temp = this.head;
        let count = 0;
        while (temp && count < index) {
            temp = temp.next;
            count++;
        }
        if (!temp) {
            console.log("Index out of bounds");
            return;
        }
        if (temp.next) {
            temp.next.prev = temp.prev;
        } else {
            this.tail = temp.prev;
        }
        if (temp.prev) {
            temp.prev.next = temp.next;
        }
    }

    // 7. Show Playlist Forward
    showForward() {
        let node = this.head;
        let list = [];
        while (node) {
            list.push(node.songName);
            node = node.next;
        }
        console.log(list.join(" → "));
    }

    // 8. Show Playlist Backward
    showBackward() {
        let node = this.tail;
        let list = [];
        while (node) {
            list.push(node.songName);
            node = node.prev;
        }
        console.log(list.join(" → "));
    }
}

// Example usage
const playlist = new MusicPlaylist();
playlist.addAtHead("SongA");
playlist.addAtTail("SongB");
playlist.addAtTail("SongC");
playlist.addAtIndex(1, "SongX");
playlist.showForward();     // SongA → SongX → SongB → SongC
playlist.deleteAtIndex(2);
playlist.showForward();     // SongA → SongX → SongC
playlist.showBackward();    // SongC → SongX → SongA
playlist.deleteAtHead();
playlist.deleteAtTail();
playlist.showForward();     // SongX
