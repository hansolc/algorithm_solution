class MinHeap {
  constructor() {
    this.heap = [null];
  }

  _swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  push({ node, value }) {
    this.heap.push({ node, value });
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);

    while (parentIdx !== 0 && this.heap[parentIdx].value > value) {
      this._swap(currentIdx, parentIdx);

      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  pop() {
    if (this.heap.length <= 1) return;
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();
    let currentIdx = 1;

    while (true) {
      const leftIdx = currentIdx * 2;
      const rightIdx = currentIdx * 2 + 1;
      let smallestIdx = currentIdx;

      if (
        leftIdx < this.heap.length &&
        this.heap[leftIdx].value < this.heap[smallestIdx].value
      ) {
        smallestIdx = leftIdx;
      }

      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx].value < this.heap[smallestIdx].value
      ) {
        smallestIdx = rightIdx;
      }

      if (smallestIdx === currentIdx) break;

      this._swap(currentIdx, smallestIdx);
      currentIdx = smallestIdx;
    }

    return returnValue;
  }
}
