class Graph {
    constructor() {
      this.map = new Map();
    }
 
    addVertex(data) {
      if (!this.map.has(data)) {
        this.map.set(data, [])
      }
    }
   
    insert(vertex, edge, isBidirectional) {
      this.addVertex(vertex);
      this.addVertex(edge); 
      this.map.get(vertex).push(edge);
      if (isBidirectional) {
        this.map.get(edge).push(vertex);
      }
    }
 
    display() {
      for (let [key, values] of this.map.entries()) {
        console.log(`${key}: ${values.join(" ")}`);
      }
    }

    dfs(startVertex) {
        // Create a stack to track visited vertices
        const stack = [];
        // Create a set to track visited vertices
        const visited = new Set();
        // Push the starting vertex to the stack
        stack.push(startVertex);
        // Mark the starting vertex as visited
        visited.add(startVertex);
    
        // Process vertices in the stack until it's empty
        while (stack.length > 0) {
          // Pop a vertex from the stack
          const vertex = stack.pop();
          console.log(vertex);
    
          // Get the adjacent vertices
          const edges = this.map.get(vertex);
          for (let edge of edges) {
            // Push unvisited adjacent vertices to the stack
            if (!visited.has(edge)) {
              stack.push(edge);
              visited.add(edge);  
            }
          }
        }
      }
    
    bfs(startVertex) {
        // Create a queue to track visited vertices
        const queue = [];
        // Create a set to track visited vertices
        const visited = new Set();
        // Enqueue the starting vertex
        queue.push(startVertex);
        // Mark the starting vertex as visited
        visited.add(startVertex);   
        // Process vertices in the queue until it's empty
        while (queue.length > 0) {
          // Dequeue a vertex
          const vertex = queue.shift();
          console.log(vertex);
    
          // Get the adjacent vertices
          const edges = this.map.get(vertex);
          for (let edge of edges) {
            // Enqueue unvisited adjacent vertices
            if (!visited.has(edge)) {
              queue.push(edge);
              visited.add(edge);
            }
          }
        }
      }

      hasEdge(vertex, edge) {
        if (this.map.has(vertex)) {
          const edges = this.map.get(vertex);
          return edges.includes(edge);
        }
        return false;
      }

      removeVertex(vertex) {
        if (this.map.has(vertex)) {
          this.map.delete(vertex);
          // Remove the vertex from all adjacency lists
          for (let [key, values] of this.map.entries()) {
            const index = values.indexOf(vertex);
            if (index !== -1) {
              values.splice(index, 1);
            }
          }
          console.log(`Vertex '${vertex}' removed.`);
        } else {
          console.log(`Vertex '${vertex}' not found.`);
        }
      }
      
      removeEdge(vertex, edge) { 
        if (this.map.has(vertex)) {
          const edges = this.map.get(vertex);
          const index = edges.indexOf(edge);
          if (index !== -1) {
            edges.splice(index, 1);
            console.log(`Edge between '${vertex}' and '${edge}' removed.`);
          } else {
            console.log(`No edge found between '${vertex}' and '${edge}'.`);
          }
        } else {
          console.log(`Vertex '${vertex}' not found.`);
        }
      }
  }


  // Create a new instance of the Graph class
const graph = new Graph();

// Add vertices to the graph
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

// Insert edges between vertices
graph.insert("A", "B", true);
graph.insert("A", "D", true);
graph.insert("A", "C", true);
graph.insert("B", "D", true);
graph.insert("C", "D", true);
graph.insert("C", "E", true);
graph.insert("D", "E", true);


// Display the graph
graph.display();
// console.log("BFS traversal:");
// graph.bfs("A");

// // Perform DFS traversal starting from vertex 'A'
// console.log("DFS traversal:");
// graph.dfs("A");

// console.log(graph.hasEdge('A','E'));

// graph.removeEdge('A','C')



// graph.display()