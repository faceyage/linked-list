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
    } else {
      //list is not empty so make node the new tail
      this.tail.next = node;
      this.tail = node;
    }
  }

  //add item to start of the list
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;

    //if tail is empty. head and tail is same
    if (this.tail === null) this.tail = node;
  }

  //removes item from end of the list
  pop() {
    //head and tail same list has one element so remove them first
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    let curr = this.head;
    //run until curr is node before tail
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
    let count = 0;

    while (curr != null) {
      count++;
      curr = curr.next;
    }
    return count;
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

    while (curr !== null) {
      if (curr.value === value) return true;
      curr = curr.next;
    }

    return false;
  }

  //returns index of given value. returns -1 if value not exist
  find(value) {
    let curr = this.head;
    let i = 0;

    while (curr !== null) {
      if (value === curr.value) return i;
      curr = curr.next;
      i++;
    }

    return -1;
  }

  //insert node to the given index
  //returns true if successfully added false if not
  insertAt(value, index) {
    //if index is 0 add directly
    if (index === 0) {
      this.prepend(value);
      return true;
    }

    const node = new Node(value);
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

  //removes node at given index. returns removed value.
  //returns -1 if index is out of range
  removeAt(index) {
    //if index is 0 remove first element
    if (index === 0) {
      const removedValue = this.head.value;
      this.head = this.head.next;
      return removedValue;
    }

    const previous = this.at(index - 1);
    if (previous === null || previous.next === null) {
      //index out of range
      return -1;
    }
    const node = previous.next; //node to remove
    previous.next = node.next;

    return node.value;
  }

  //returns string representation of list
  toString() {
    let str = "";

    let curr = this.head;
    while (curr !== null) {
      str += `(${curr.value}) -> `;
      curr = curr.next;
    }
    str += "null";
    return str;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);

console.log(linkedList.removeAt(50));
console.log(linkedList.toString());
