class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export class LinkedList {

    constructor() {
        this.head = null;
    }

    size() {
        let many = 0;
        let node = this.head;

        while(node) {
            node = node.next;
            many++;
        }

        return many;

    }

    clear() {
        this.head = null;
    }

    add(item) {
        if(!this.head) {
            this.head = new Node(item);
            return this.head.data;
        }
        
        let node = this.head;

        while(node.next) {
            node = node.next;
        }

        node.next = new Node(item);
        return node.next.data;

    }

    exists(item) {
        let node = this.head;

        while(node) {
            if(node.data === item)
                return true;

            node = node.next;
        }

        return false;
    }

    get(index) {
        let node = this.head;
        let count = 0;

        while(node) {
            if(count === index)
                return node.data;

            count++;
            node = node.next;
        }

        return null;
    }

    search(item) {
        let node = this.head;
        let count = 0;

        while(node) {
            if(node.data === item)
                return count;
            
            count++;
            node = node.next;
        }

        return null;

    }

    remove(index) {
        if(!this.head || 
            index >= this.size() ||
            index < 0) {
            return null;
        }

        if(index == 0) {
            let output = this.head.data;
            this.head = this.head.next;
            return output;
        }

        let node = this.head;
        let count = 0;

        while(node) {
            if(count === index - 1) {
                let out = node.next.data;
                node.next = node.next.next;
                return out;
            }
            count++;
            node = node.next;
        }

        return null;

    }

}

