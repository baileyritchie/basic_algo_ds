// linkedlists 

class LinkedListNode{
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  prepend(value) {
    let newNode = new LinkedListNode(value,this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this.head;
  }
  append(value) {
    let newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.tail;
    }
    let currentTail = this.tail;
    currentTail.next = newNode;
    this.tail = newNode;
    return this.tail;
  }
  delete(value) {
    let deletedNode = null;
    if (this.head === null) {
      return null; // list is empty
    }
    let currentNode = this.head;
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          // matches
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
        
      }
    }
    // check if the desired deleted node is the tail node
    if (this.tail.value === value) {
      this.tail = currentNode;
    }
    return deletedNode;
  }
  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
    return deletedTail;
  }
  deleteHead() {
    
    if (!this.head) {
      return null;
    } 
    let deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }
  find(obj) {
    let {value,callback} = obj;
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while(currentNode) {
      if(callback && callback(currentNode.value)) {
        return currentNode;
      }
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null
  }
  toArray() {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }
  toString(callback) {
    return this.toArray().map((node) => node.toString(callback)).toString();
  }
}

let ll = new LinkedList();
ll.prepend(11);
ll.prepend(7);
ll.prepend(5);
ll.prepend(3);

ll.toString((val) => console.log(val));

module.exports = {
  LinkedList,
  LinkedListNode
}

