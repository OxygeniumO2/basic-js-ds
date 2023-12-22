const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.start = null;
    this.back = null;
  }

  getUnderlyingList() {
    return this.start;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.back === null) {
      this.start = newNode;
      this.back = newNode;
    }
    else {
      this.back.next = newNode;
      this.back = newNode;
    }
  }

  dequeue() {
    const removedValue = this.start.value;

    this.start = this.start.next;

    return removedValue;
  }
}

module.exports = {
  Queue
};
