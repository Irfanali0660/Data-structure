class LinkedList {
    constructor() {
      this.list = [22,33,44];
    }
  
    // Method to append a value at the end of the linked list
    append(data) {
      this.list.push(data);
    }
  
    // Method to prepend a value at the beginning of the linked list
    prepend(data) {
      this.list.unshift(data);
    }
  
    // Method to insert a value at a specific position in the linked list
    insertAt(data, position) {
      if (position === 0) {
        this.prepend(data);
      } else if (position >= this.list.length) {
        this.append(data);
      } else {
        this.list.splice(position, 0, data);
      }
    }
  
    // Method to remove a value from the linked list
    remove(data) {
      const index = this.list.indexOf(data);
      if (index !== -1) {
        this.list.splice(index, 1);
      }
    }
  
    // Method to display the linked list
    display() {
      console.log(this.list);
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  
  linkedList.append(10);
  linkedList.append(20);
  linkedList.append(30);
  linkedList.prepend(5);
  linkedList.insertAt(15, 2);
  linkedList.remove(20);
  linkedList.display();
  