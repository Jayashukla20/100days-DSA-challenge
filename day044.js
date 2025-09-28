class SongNode {
    constructor(song) {
        this.song = song;
        this.next = null;
    }
}

class MusicPlaylist {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 1. Add Song at End
    addSongEnd(song) {
        const newNode = new SongNode(song);

        if (this.head === null) {
            this.head = this.tail = newNode;
            newNode.next = this.head; // circular link
        } else {
            this.tail.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
        }
    }

    // 2. Add Song at Beginning
    addSongBeginning(song) {
        const newNode = new SongNode(song);

        if (this.head === null) {
            this.head = this.tail = newNode;
            newNode.next = this.head;
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.head = newNode;
        }
    }

    // 3. Show Playlist (one cycle only)
    showPlaylist() {
        if (this.head === null) {
            console.log("Playlist is empty");
            return;
        }

        let result = [];
        let current = this.head;

        do {
            result.push(current.song);
            current = current.next;
        } while (current !== this.head);

        console.log(result.join(" -> "));
    }

    // 4. Play k songs in loop
    playSongs(k) {
        if (this.head === null) {
            console.log("No songs to play");
            return;
        }

        let current = this.head;

        for (let i = 0; i < k; i++) {
            console.log(`Playing: ${current.song}`);
            current = current.next;
        }
    }
}

// Example usage:
const playlist = new MusicPlaylist();
playlist.addSongEnd("Shape of You");
playlist.addSongEnd("Believer");
playlist.addSongBeginning("Senorita");

playlist.showPlaylist();
// Expected: Senorita -> Shape of You -> Believer

playlist.playSongs(5);
// Expected looped playback:
// Playing: Senorita
// Playing: Shape of You
// Playing: Believer
// Playing: Senorita
// Playing: Shape of You
