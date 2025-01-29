// Class approach
class Node {
  // Set value of value and nextNode to null by default
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  // Add constructor
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Append a new node with the given value to the end of the list
  append(value) {
    const newNode = new Node(value);
    // If list is empty, set head and tail to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, link the current tail to the new node
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // If the list is empty, set both head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // Return the size (total number of nodes) in the list
  size() {
    return this.length;
  }

  // Return the first node in the list (head)
  head() {
    return this.head;
  }

  // Return the last node in the list (tail)
  tail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || this.length <= index) {
      return null; // If the index is out of bounds
    }
    let currentNode = this.head;
    let currentIndex = 0;

    // Traverse the list to the given index
    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    // Return the node at the given index
    return currentNode;
  }

  //
  // Remove the last element from the list
  pop() {
    // If the list is empty return null
    if (this.head === null) {
      return null;
    }
    // If there is only one node, set head and tail to null and decrement the length.
    if (this.length === 1) {
      const removeNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removeNode;
    }
    // Otherwise, traverse the list to find the second-to-last node.
    // lastNode is an instance of Node, and it does not have head or tail properties.
    // Instead, you need to remove lastNode by updating the nextNode of the second-to-last node.

    const lastNode = this.at(this.length - 1);
    const secondToLastNode = this.at(this.length - 2);

    // Remove the last node by updating tail and disconnecting it
    secondToLastNode.nextNode = null;
    this.tail = secondToLastNode;
    this.length--;

    return lastNode;
  }

  // Returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let currentNode = this.head;

    // 🚫 currentIndex and allNodes are unnecessary.
    // •	You don’t need to track the index manually (currentIndex).
    // •	You don’t need to store this.length in allNodes.
    // •	The loop already stops when currentNode is null, making currentIndex < allNodes redundant.
    // let currentIndex = 0;
    // let allNodes = this.length;

    // Traverse the list to the given index
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode; // Move to the next node
      //currentIndex++;
    }
    return false;
  }

  // Returns the index of the node containing value, or null if not found
  find(value) {
    // contains(value) is a method inside the LinkedList class, so you must call it using this.contains(value) instead of just contains(value).
    if (this.contains(value) === false) {
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    // Traverse the list to the given index
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentNode = currentNode.nextNode; // Move to the next node
      currentIndex++;
    }
  }

  // Represents your LinkedList objects as strings, so you can print them out and preview them in the console
  toString() {
    let currentNode = this.head;
    let values = ""; // Initialize as an empty string

    // Traverse the list and format the output string
    while (currentNode !== null) {
      values += `( ${currentNode.value} ) -> `; // Format each node
      currentNode = currentNode.nextNode; // Move to the next node
    }
    values += "null";

    return values;
  }
}

//
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("hamster");
list.append("horse");
list.append("fish");
list.append("octapus");

console.log(list.toString());
