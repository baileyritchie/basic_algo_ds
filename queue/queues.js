// FIFO - first in first out ordering
// where the first element added to the queue iis removed
import {LinkedListNode,LinkedList} from '../linked_lists/linked_lists';

class Queue {
  constructor() {
    this.linkedlist = new LinkedList();
  }
  enqueue(value) {
    this.linkedlist.append(value);
  }
  dequeue() {
    const removedHead = this.linkedlist.deleteHead();
    return removedHead ? removedHead.value : null;
  }
  peek() {
    if (!this.linkedlist.head) {
      return null;
    }
    return this.linkedlist.head.value;
  }
  isEmpty() {
    return !this.linkedlist.head;
  }
  toString(callback) {
    return this.linkedlist.toString(callback);
  }
}