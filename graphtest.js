// // class Graph{
// //     constructor(){
// //         this.map=new Map()
// //     }

// //     addvertex(data){
// //         if(!this.map.has(data)){
// //             this.map.set(data,[])
// //         }
// //     }

// //     insert(vertex,edge,isBidirectional){
// //         this.addvertex(vertex)
// //         this.addvertex(edge)
// //         this.map.get(vertex).push(edge)
// //         if(isBidirectional){
// //             this.map.get(edge).push(vertex)
// //         }
// //     }

// //     display(){
// //         for (const [key,values] of this.map.entries()) {
// //             console.log(`${key}:${values.join(' ')}`);
// //         }
// //     }

// //     dfs(startVertex){
// //         const stack=[]
// //         const visited=new Set()
// //         stack.push(startVertex)
// //         visited.add(startVertex)
// //         while (stack.length>0){
// //             const vertex=stack.pop()
// //             console.log(vertex)
// //             const edges=this.map.get(vertex)
// //             for (const edge of edges) {
// //                 if(!visited.has(edge)){ 
// //                     stack.push(edge)
// //                     visited.add(edge)
// //                 }
// //             }
// //         }
// //     }

// //     bfs(startVertex){
// //         const queue=[]
// //         const visited=new Set()
// //         queue.push(startVertex)
// //         visited.add(startVertex)
// //         while (queue.length>0) {
// //             const vertex=queue.shift()
// //             console.log(vertex);
// //             const edges=this.map.get(vertex)
// //             for (const edge of edges) {
// //                 if(!visited.has(edge)){ 
// //                     queue.push(edge)
// //                     visited.add(edge)
// //                 }
// //             }
// //         }
// //     }

// //     hasEdge(vertex,edge){
// //         if (this.map.has(vertex)) {
// //             const edges = this.map.get(vertex);
// //             console.log(edges);
// //             return edges.includes(edge);
// //           }
// //           return false;
// //     }

// //     removeVertex(vertex){
// //         if(this.map.has(vertex)){
// //             this.map.delete(vertex)
// //             // for (const [key,values] of this.map.entries()) {
// //             //     const index=values.indexOf(vertex)
// //             //     if(index!=-1){
// //             //         values.splice(index,1)
// //             //     }
// //             // }
// //             console.log(`vertex ${vertex} is removed`);
// //         }
// //     }

// //     removeEdge(vertex,edge){
// //         if(this.map.has(vertex)){
// //             const edges=this.map.get(vertex)
// //             const index=edges.indexOf(edge)  
// //             if(index!=-1){
// //                 edges.splice(index,1)
// //                 console.log(`Edge between '${vertex}' and '${edge}' removed.`);
// //             }
// //         }
// //     }
// // }


// // const graph=new Graph()

// // graph.insert("A", "B", false);
// // graph.insert("A", "D", false);
// // graph.insert("A", "C", false);
// // graph.insert("B", "D", false);
// // graph.insert("C", "D", false);
// // graph.insert("C", "E", false);
// // graph.insert("D", "E", false);


// // // graph.insert("A", "B", false);
// // // graph.insert("A", "C", false);
// // // graph.insert("B", "D", false);
// // // graph.insert("C", "E", false);
// // // graph.insert("C", "D", false);
// // // graph.insert("D", "A", false);
// // // graph.insert("D", "E", false);




// // graph.display()
// // // graph.dfs('A')
// // // graph.bfs('A')

// // // console.log(graph.hasEdge('A','D'));

// // // graph.removeVertex("A")
// // graph.removeEdge("A","C")
// // graph.display()


// class Graph{
//     constructor(){
//         this.map=new Map()
//     }

//     addVertex(data){
//         if(!this.map.has(data)){
//             this.map.set(data,[])
//         }
//     }

//     insertVertex(vertex,edge,isBidirectional){
//         this.addVertex(vertex)
//         this.addVertex(edge)
//         this.map.get(vertex).push(edge)
//         if(isBidirectional){
//            this.map.get(edge).push(vertex) 
//         }
//     }

//     display(){
//         for (const [key,values] of this.map.entries()) {
//             console.log(`${key}:${values.join(' ')}`);
//         }
//     }

//     dfs(startVertex){
//         const stack=[]
//         const visited=new Set()
//         stack.push(startVertex)
//         visited.add(startVertex)

//         while (stack.length>0) {
//             const vertex=stack.pop()
//             console.log(vertex)
//             const edges=this.map.get(vertex)
//             for (const edge of edges) {
//                 if(!visited.has(edge)){
//                     stack.push(edge)
//                     visited.add(edge)
//                 }
//             }
//         }
//     }

//     removeVertex(vertex){
//         if(this.map.has(vertex)){
//             this.map.delete(vertex)

//             for (const [key,value] of this.map.entries()) {
//                const index=value.indexOf(vertex)
//                 if(index!=-1){
//                     value.splice(index,1)
//                 }
//             }
//         }
//     }   

//     hasEdge(vertex,edge){
//         if(this.map.has(vertex)){
//             const edges=this.map.has(vertex)
//             return edges.includes(edge)
//         }
//         return false
//     }
// }

// const graph=new Graph()

// graph.insertVertex("A","C",true)
// graph.insertVertex("A","B",true)
// graph.insertVertex("B","D",true)
// graph.insertVertex("D","A",true)

// graph.display()
// // console.log(graph.map);
// // graph.dfs("A")

// // graph.removeVertex('A')
// // graph.display()

// graph.hasEdge()


class Graph{
    constructor(){
        this.map=new Map()
    }

    addVertex(data){
        if(!this.map.has(data)){
            this.map.set(data,[])
        }
    }

    insert(vertex,edge,isBidirectional){
        this.addVertex(vertex)
        this.addVertex(edge)

        this.map.get(vertex).push(edge)
        if(isBidirectional){
            this.map.get(edge).push(vertex)
        }
    }

    display(){
        for (const [key,value] of this.map.entries()) {
            console.log(`${key} : ${value.join(" ")}`);
        }
    }

    dfs(startVertex){
        const stack=[]
        const visited=new Set()

        stack.push(startVertex)
        visited.add(startVertex)

        while (stack.length>0) {
            const vertex=stack.pop()
            console.log(vertex)
            const edges=this.map.get(vertex)
            for (const edge of edges) {
                if(!visited.has(edge)){
                    stack.push(edge)
                    visited.add(edge)
                }
            }
        }
    }
}
 

const graph=new Graph()

graph.insert("A", "B", true);
graph.insert("A", "D", true);
graph.insert("A", "C", true);
graph.insert("B", "D", true);
graph.insert("C", "D", true);
graph.insert("C", "E", true);
graph.insert("D", "E", true);

graph.display()

graph.dfs("A")
// console.log(graph.map);