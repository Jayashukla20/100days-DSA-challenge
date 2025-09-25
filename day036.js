class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class PlaylistManager {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addSongAtHead(song) {
        const newNode = new Node(song);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    addSongAtEnd(song) {
        const newNode = new Node(song);
        if (this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    addAtIndex(index, song) {
        if (index < 0) {
            console.log("Invalid index");
            return;
        }
        if (index === 0) {
            this.addSongAtHead(song);
            return;
        }
        let temp = this.head;
        let count = 0;
        while (temp != null && count < index - 1) {
            temp = temp.next;
            count++;
        }
        if (temp == null) {
            console.log("Index out of bounds");
            return;
        }
        const newNode = new Node(song);
        let nextNode = temp.next;
        newNode.next = nextNode;
        newNode.prev = temp;
        temp.next = newNode;
        if (nextNode != null) {
            nextNode.prev = newNode;
        } else {
            // Inserted at the end, so update tail
            this.tail = newNode;
        }
    }

    viewPlaylistForward() {
        let temp = this.head;
        let playlistStr = "Playlist (Forward): ";
        while (temp != null) {
            playlistStr += temp.data;
            if (temp.next != null) {
                playlistStr += " -> ";
            }
            temp = temp.next;
        }
        console.log(playlistStr);
    }

    viewPlaylistBackward() {
        let temp = this.tail;
        let playlistStr = "Playlist (Backward): ";
        while (temp != null) {
            playlistStr += temp.data;
            if (temp.prev != null) {
                playlistStr += " -> ";
            }
            temp = temp.prev;
        }
        console.log(playlistStr);
    }
}

// Example Usage:
const myPlaylist = new PlaylistManager();
myPlaylist.addSongAtEnd("Song A");
myPlaylist.addSongAtHead("Song B");
myPlaylist.addAtIndex(1, "Song C");
myPlaylist.viewPlaylistForward();  // Playlist (Forward): Song B -> Song C -> Song A
myPlaylist.viewPlaylistBackward(); // Playlist (Backward): Song A -> Song C -> Song B
