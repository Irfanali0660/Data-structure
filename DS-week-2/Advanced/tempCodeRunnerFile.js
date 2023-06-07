// class to provide structure to the node 
class Node {
  constructor(data) {
     this.value = data;
     this.next = null;
  }
}

// defining the head of the linked list 
var head = null

// function to add a new node in a linked list 
function addNode(value) {
  var temp = new Node(value);
  if(head == null) {
  head = temp;
  }
  else{
     var current = head;
     while (current.next != null)    	{
        current = current.next;
     }
     current.next = temp;
  }
}

// function to print all the elements of the linked list 
function print(head) {
  var temp = head;
  var ll = "";
  while (temp.next != null) {
     ll += temp.value + " -> "
     temp = temp.next;
  }
  ll += temp.value + " -> null"; 
  console.log(ll)
}

// function for partition of the linked list 
function partitionLast(first , last) {
  if (first == last || first == null || last == null)	{
     return first
  }
  var prev_pivot = first;
  var cur= first;
  var pivot = last.value;
  
  // traversing one node before the last 
  
  // as end is the pivot 
  while (first != last) {
     if (first.value < pivot) {
        prev_pivot = cur;
        var temp = cur.value;
        cur.value = first.value;
        first.value = temp;
        cur = cur.next;
      }
     first = first.next;
  }
  
  // swapping the positions
  var temp = cur.value;
  cur.value = pivot;
  last.value = temp;
  
  // as current is now pivot so return previous one 
  return prev_pivot
}
function quickSort(first, last) {
  // base condition 
  if (first == null || first == last || first == last.next){
     return; 
  }
  
  // split list and partition recurse
  var prev_pivot = partitionLast(first, last);
  quickSort(first, prev_pivot);
  
  // if pivot is moved to the start make both of them same 
  
  // which means we have to pick the new pivot 
  if (prev_pivot != null && prev_pivot == first){
     quickSort(prev_pivot.next, last);
  }
  
  // if pivot is in between of the list,
  
  // start from next of pivot,
  
  // since we have pivot_prev, so we move two nodes
  else if (prev_pivot != null && prev_pivot.next != null)	{
     quickSort(prev_pivot.next.next, end);
  }
}

// creating the linked list 
addNode(1);
addNode(2);
addNode(4)
addNode(3);
addNode(52);

var end = head;
while (end.next != null) {
  end = end.next;
}
console.log("Linked List before sorting");
print(head);
quickSort(head, end);
console.log("Linked List after sorting");
print(head);