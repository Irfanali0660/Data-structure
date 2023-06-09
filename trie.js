class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children.has(char)) {
          currentNode.children.set(char, new TrieNode());
        }
        currentNode = currentNode.children.get(char);
      }
      currentNode.isEndOfWord = true;
    }
  
    search(word) {
      let currentNode = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
  
        if (!currentNode.children.has(char)) {
          return false;
        }
  
        currentNode = currentNode.children.get(char);
      }
  
      return currentNode.isEndOfWord;
    }
  
    startsWith(prefix) {
      let currentNode = this.root;
  
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
  
        if (!currentNode.children.has(char)) {
          return false;
        }
  
        currentNode = currentNode.children.get(char);
      }
  
      return true;
    }
  }
  
  // Usage example
  const trie = new Trie();
  
  trie.insert("apple");
  trie.insert("banana");
  trie.insert("orange");
  trie.insert("op");

  
  console.log(trie.search("apple")); // Output: true
  console.log(trie.search("banana")); // Output: true
  console.log(trie.search("orange")); // Output: true
  console.log(trie.search("grape")); // Output: false
  
  console.log(trie.startsWith("app")); // Output: true
  console.log(trie.startsWith("ban")); // Output: true
  console.log(trie.startsWith("ora")); // Output: true
  console.log(trie.startsWith("gr")); // Output: false
  console.log(trie.startsWith('op'));
  
  console.log(trie.root);