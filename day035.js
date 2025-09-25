class Node {
    constructor(data) {
        this.data = data;  // Use passed data
        this.next = null;
        this.prev = null;
    }
}

class PhotoGallery {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addPhotoAtEnd(photo) {
        const newNode = new Node(photo);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    addPhotoAtBeginning(photo) {
        const newNode = new Node(photo);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    viewPhotosForward() {
        let temp = this.head;
        let galleryStr = "Forward: ";
        while (temp != null) {
            galleryStr += temp.data;
            if (temp.next != null) {
                galleryStr += " -> ";
            }
            temp = temp.next;
        }
        console.log(galleryStr);
    }

    viewPhotosBackward() {
        let temp = this.tail;
        let galleryStr = "Backward: ";
        while (temp != null) {
            galleryStr += temp.data;
            if (temp.prev != null) {
                galleryStr += " -> ";
            }
            temp = temp.prev;
        }
        console.log(galleryStr);
    }
}

// Example usage:
const myGallery = new PhotoGallery();
myGallery.addPhotoAtEnd("photo1.jpg");
myGallery.addPhotoAtEnd("photo2.jpg");
myGallery.addPhotoAtBeginning("photo0.jpg");
myGallery.viewPhotosForward();  // Output: Forward: photo0.jpg -> photo1.jpg -> photo2.jpg
myGallery.viewPhotosBackward(); // Output: Backward: photo2.jpg -> photo1.jpg -> photo0.jpg
