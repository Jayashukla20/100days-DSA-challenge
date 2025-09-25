class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }   
}
class playList {
    constructor() {
        this.head = null;
    }
    addSongAtEnd(song) {
        const newNode = new Node(song);
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
    addSongAtBeginning(song) {
        const newNode = new Node(song);
        newNode.next = this.head;
        this.head = newNode;
    }
    deleteSongByName(song) {
        if (this.head == null) {
            console.log("No songs to delete");
            return;
        }
        if (this.head.data === song) {
            this.head = this.head.next;
            return;
        }
        let temp = this.head;
        while (temp.next != null && temp.next.data !== song) {
            temp = temp.next;
        }
        if (temp.next == null) {
            console.log("Song not found");
            return;
        }
        temp.next = temp.next.next;
    }
    deleteSongByPosition(position) {
        if (this.head == null || position < 1) {
            console.log("No songs to delete or invalid position");
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
    printPlaylist() {
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
// example usage
const myPlaylist = new playList();
myPlaylist.addSongAtEnd("Shape of You");
myPlaylist.addSongAtEnd("Blinding Lights");
myPlaylist.addSongAtBeginning("Levitating");
myPlaylist.printPlaylist();
myPlaylist.deleteSongByName("Blinding Lights");
myPlaylist.printPlaylist();
myPlaylist.deleteSongByPosition(2);
myPlaylist.printPlaylist();