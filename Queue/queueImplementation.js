class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
  printQueue() {
    let queueString = "";
    for (var i = 0; i < this.size(); i++) {
      queueString += this.queue[i] + ",";
    }
    console.log("Queue: " + queueString);
  }
  front() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }
}

const queueue = new Queue();

queueue.enqueue(6);
queueue.enqueue(600);

queueue.enqueue(6000);

queueue.enqueue(6566);

console.log(queueue.printQueue());
