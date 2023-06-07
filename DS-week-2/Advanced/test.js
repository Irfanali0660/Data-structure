
// class Node {
//     constructor(data) {
//        this.value = data;
//        this.next = null;
//     }
//   }
  
//   var head = null
  
//   function addNode(value) {
//     var temp = new Node(value);
//     if(head == null) {
//     head = temp;
//     }
//     else{
//        var current = head;
//        while (current.next != null)    	{
//           current = current.next;
//        }
//        current.next = temp;
//     }
//   }
  
//   function print(head) {
//     var temp = head;
//     var ll = "";
//     while (temp.next != null) {
//        ll += temp.value + " -> "
//        temp = temp.next;
//     }
//     ll += temp.value + " -> null"; 
//     console.log(ll)
//   }
  
//   function partitionLast(first , last) {
//     if (first == last || first == null || last == null)	{
//        return first
//     }
//     var prev_pivot = first;
//     var cur= first;
//     var pivot = last.value;
    
//     while (first != last) {
//        if (first.value < pivot) {
//           var temp = cur.value;
//           cur.value = first.value;
//           first.value = temp;
//           cur = cur.next;
//         }
//        first = first.next;
//     }
    
//     var temp = cur.value;
//     cur.value = pivot;
//     last.value = temp;
    
//     return prev_pivot
//   }
//   function quickSort(first, last) {

//     var prev_pivot = partitionLast(first, last);

//     if (prev_pivot != null && prev_pivot == first){
//        quickSort(prev_pivot.next, last);
//     }

//     else if (prev_pivot != null && prev_pivot.next != null)	{
//        quickSort(prev_pivot.next.next, end);
//     }
//   }

//   addNode(30);
//   addNode(3);
//   addNode(4);
//   addNode(20);
//   addNode(5);
//   var end = head;
//   while (end.next != null) {
//     end = end.next;
//   }
//   console.log("Linked List before sorting");
//   print(head);
//   quickSort(head, end);
//   console.log("Linked List after sorting");
//   print(head);

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class quickSortLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    append(value){
        const node =new Node(value)
        if(this.size==0){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }

    print(){
        if(this.size==0){
            return null
        }

        let cur=this.head
        let values=''
        while (cur) {
            values+=`${cur.value} `
            cur=cur.next
        }
        console.log(values);
    }

    partition(first,last){
        if (first == last || first == null || last == null)	{
            return first
         }

         var prev_pivot=first
         var cur=first
         var pivot=last.value

         while (first!=last) {
            if(first.value<pivot){
                var temp=cur.value
                cur.value=first.value
                first.value=temp
                cur=cur.next
            }
            first=first.next
         }

         var temp=cur.value
         cur.value=last.value
         last.value=temp


         return prev_pivot
    }

    quicksort(first,last){
        if(first==null || first==last  || first==last.next){
            return
        }
        var prev_pivot=this.partition(first,last)

        if(prev_pivot!=null && prev_pivot==first){
            this.quicksort(prev_pivot.next,last)
        } else if (prev_pivot != null && prev_pivot.next != null)	{
            quickSort(prev_pivot.next.next, end);
         }
    }
}

const quick=new quickSortLinkedList()


quick.append(1)
quick.append(2)
quick.append(4)
quick.append(3)
quick.append(52)
quick.append(12)

quick.print()
quick.quicksort(quick.head,quick.tail)
quick.print()
