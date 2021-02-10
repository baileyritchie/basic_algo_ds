// stacks  use LIFO -last in, first out ordering 
// stacks are linear data structures (elements form a sequence)

import {LinkedList, LinkedListNode} from '../linked_lists/linked_lists';

class Stack {
  constructor() {
    this.linkedlist = new LinkedList();
  }
  push(value) {
    this.linkedlist.prepend(value);
  }
  pop() {
    let deletedHead = this.linkedlist.deleteHead();
    return deletedHead ? deletedHead.value : null;
  }
  peek() {
    if (this.isEmpty()) {
      // stack is empty there is noothiing to peek
      return null;
    }
    return this.linkedlist.head.value;
  }
  isEmpty() {
    return !this.linkedlist.head;
  }
  toArray() {
    return this.linkedlist.toArray().reverse().map((llNode) => llNode.value);
  }
  toString() {
    return this.linkedList.toString(callback);
  }
}