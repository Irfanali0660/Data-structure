class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function getTail(node) {
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }
  
  function partition(start, end) {
    const pivot = end.data;
    let i = start;
    for (let j = start; j !== end; j = j.next) {
      if (j.data < pivot) {
        swapData(i, j);
        i = i.next;
      }
    }
    swapData(i, end);
    return i;
  }
  
  function swapData(node1, node2) {
    const temp = node1.data;
    node1.data = node2.data;
    node2.data = temp;
  }
  
  function quickSortLinkedList(head, tail) {
    if (head === tail || head === null || tail === null) {
      return head;
    }
    
    let pivotPrev = null;
    let pivot = head;
    let current = head;
  
    while (head !== tail){
      if (head.data > pivot.data)   {
        if (pivotPrev === null) {
          let temp = head.next;
          head.next = pivot.next;
          pivot.next = temp;
          pivotPrev = pivot;
          pivot = head.next;
          head = temp;
        } else {
          let temp = head.next;
          head.next = pivot.next;
          pivot.next = temp;
          pivotPrev = pivotPrev.next;
          pivot = pivot.next;
          head = temp;
        }
      } else {
        if (pivot === head) {
          pivotPrev = head;
        }
        pivot = pivot.next;
        head = head.next;
      }
    }
  
    if (pivotPrev !== null) {
      pivotPrev.next = null;
    }
  
    let left = quickSortLinkedList(current, pivotPrev);
    let right = quickSortLinkedList(pivot.next, tail);
  
    if (left !== null) {
      let leftTail = getTail(left);
      leftTail.next = pivot;
      return left;
    } else {
      return pivot;
    }
  }
  
  function printList(head) {
    let current = head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  
  // Example usage:
  const head = new Node(5);
  head.next = new Node(3);
  head.next.next = new Node(7);
  head.next.next.next = new Node(2);
  head.next.next.next.next = new Node(1);
  
  console.log("Original list:");
  printList(head);
  
  const tail = getTail(head);
  const sortedHead = quickSortLinkedList(head, tail);
  
  console.log("Sorted list:");
  printList(sortedHead);
  