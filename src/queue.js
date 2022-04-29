const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
    this.queue = {value: null, next: null}
  }

  getUnderlyingList() {
    return this.queue
  }

  enqueue(value) {
    if (this.queue.value === null) {
      this.queue.value = value
      return
    }

    if (this.queue.next === null) {
      this.queue.next = {value: value, next: null}
      return
    } 

    let current = this.queue
    while (current.next) {
      current = current.next
      if (current.next === null) {
        current.next = {value: value, next: null}
        break
      }
    }
  }

  dequeue() {
    const temp = this.queue.value;
    this.queue = this.queue.next;
    return temp
  }
}

module.exports = {
  Queue
};
