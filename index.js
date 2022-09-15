class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //add item to end of the list
    append(value) {
        const node = new Node(value);
        //check if list is empty
        if (this.tail === null) {
            this.head = node;
            this.tail = node;
        }
        else { //list is not empty so make node the new tail
            this.tail.next = node;
            this.tail = node;
        }
    }

    //add item to start of the list
    prepend(value) {
        const node = new Node(value);
        if (this.head) {
            const oldHead = this.head;
            this.head = node;
            this.head.next = oldHead;
        }
        //list is empty
        else {
            this.head = node;
            this.tail = node;
        }
    }

    //removes item from end of the list
    pop() {
        //head and tail same list has one element
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        let curr = this.head;
        while (curr.next !== this.tail) {
            curr = curr.next;
        }
        //current is now node before tail;
        this.tail = curr;
        this.tail.next = null;
    }

    //returns size of the list
    size() {
        let curr = this.head;
        let size = 0;

        while (curr != null) {
            size++;
            curr = curr.next;
        }
        return size;
    }

    //returns node at given index. returns null if not exist.
    at(index) {
        let currIndex = 0;
        let curr = this.head;

        while (currIndex !== index && curr !== null) {
            currIndex++;
            curr = curr.next;
        }
        return curr;
    }

    //returns true if list contains the given value false otherwise
    contains(value) {
        let curr = this.head;

        while(curr !== null) {
            if (curr.value === value) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    //returns index of given value. returns -1 if value not exist
    find(value) {
        let curr = this.head;
        let i = 0;

        while (curr !== null) {
            if(value === curr.value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }
    
    //insert node to the given index
    //returns true if successfully added false if not
    insertAt(value, index) {
        //if index is 0 we don't need to find the element before given index
        //so add directly to the start of the list with prepend function.
        if (index === 0) {
            this.prepend(value);
            return true;
        }

        const node = new Node(value)

        let curr = this.head;
        let i = 0;
        

        while (curr !== null) {
            //check if curr is the element before the given index
            if (i === index - 1) {
                node.next = curr.next;
                curr.next = node;
                return true;
            }
            curr = curr.next;
            i++;
        }
        return false;
    }

    //removes node at given index.
    //returns false if index out of range
    removeAt(index) {
        //if index is 0 then remove first element
        if (index === 0) {
            this.head = this.head.next;
            return true;
        }
        let curr = this.head;
        let previous = null;

        let i = 0;
        while (curr !== null ) {
            if (i === index) {
                previous.next = curr.next;
                curr = null;
                return true;
            }
            previous = curr;
            curr = curr.next;
            i++;
        }        
        return false;
    }

    //returns string representation of list
    toString() {
        let str = "";

        let curr = this.head;
        while(curr !== null) {
            str += `(${curr.value}) -> `;
            curr = curr.next;
        }
        str += "null";
        return str;
    }
}

class Node {
    constructor(value=null, next=null) {
        this.value = value;
        this.next = next;
    }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);

console.log(linkedList.toString())
