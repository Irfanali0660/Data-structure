class TrieNode{
    constructor(){
        this.children=new Map()
        this.EndNode='*'
    }
}


class Trie{
    constructor(){
        this.root=new TrieNode()    
    }

    insert(word){
        let currentNode=this.root
        for (let i = 0; i < word.length; i++) {
            const char=word[i]
            if(!currentNode.children.has(char)){
                currentNode.children.set(char,new TrieNode())
            }
            currentNode=currentNode.children.get(char)
        }
        currentNode.EndNode="*"
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

const trie = new Trie();
  
trie.insert("apple");
trie.insert("banana");
trie.insert("orange");
trie.insert("op");


console.log(trie.root);