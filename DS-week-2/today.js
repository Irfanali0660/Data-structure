// class Hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hashkey(key){
//         let total=0
//         for (let i = 0; i < key.length; i++) {
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }

//     set(key,value){
//         let index=this.hashkey(key)

//         let bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             const samekeyItem=bucket.find((item)=>item[0]===key)
//             if(samekeyItem){
//                 samekeyItem[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index=this.hashkey(key)

//         let bucket=this.table[index]
//         if(bucket){
//             let samekeyItem=bucket.find((item)=>item[0]===key)
//             if(samekeyItem){
//                 return samekeyItem[1]
//             }
//         }
//         return undefined
//     }

//     display(){
//         for (let i = 0; i < this.table.length; i++) {
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }

//     remove(key){
//         let index=this.hashkey(key)
//         let bucket=this.table[index]
//         if(bucket){
//             let samekeyItem=bucket.find((item)=>item[0]===key)
//             if(samekeyItem){
//                 bucket.splice(bucket.indexOf(samekeyItem),1)
//             }
//         }
//     }
// }

// const hast=new Hashtable(30)

// hast.set('name','India')
// hast.set('enam','England')
// hast.set('age',33)

// console.log(hast.get('enam'));
// hast.display()
// hast.remove('age')
// hast.display()


// bubble

function bubblesort(array) {
    
    let swapped
    do {
        swapped=false
        for (let i = 0; i < array.length; i++) {
            if(array[i]>array[i+1]){
                temp=array[i]
                array[i]=array[i+1]
                array[i+1]=temp
                swapped=true
            }
        }
    } while (swapped);
    return array
}

// console.log(bubblesort([2,3,1,4,-9,5,]));


function insertionsort(array) {
    for (let i = 1; i < array.length; i++) {
        let number=array[i]
        j=i-1

        while (j>=0 && array[j]>number) {
            array[j+1]=array[j]
            j-=1
        }
        array[j+1]=number
    }   
    return array
}

// console.log(insertionsort([2,3,1,4,-9,5,]));

function quickSort(array) {
    if(array.length<=1){
        return array
    }
    let left=[]
    let right=[]
    let pivot=array[array.length-1]
    for (let i = 0; i < array.length-1; i++) {
        if(array[i]<pivot){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}

// console.log(quickSort([2,3,1,4,-9,5,]));

function mergesort(array) {
    
    if(array.length<=1){
        return array
    }
    let middle=Math.floor(array.length/2)
    let left=array.slice(0,middle)
    let right=array.slice(middle)

    return merge(mergesort(left),mergesort(right))
}

function merge(left,right) {
    let sortarr=[]

    while (left.length && right.length) {
        if(left[0]<=right[0]){
            sortarr.push(left.shift())
        }else{
            sortarr.push(right.shift())
        }
    }
    return [...sortarr,...left,...right]
}


// console.log(mergesort([2,3,1,4,-9,5,]));

function mergesort1(array) {
    if(array.length<=1){
        return array
    }

    let middle=Math.floor(array.length/2)
    let left=array.slice(0,middle)
    let right=array.slice(middle)
    return merge1(mergesort(left),mergesort1(right))
}

function merge1(left,right) {
    let sortarr=[]
    while (left.length && right.length) {
        if(left[0]<=right[0]){
            sortarr.push(left.shift())
        }else{
            sortarr.push(right.shift()) 
        }
    }
    return [...sortarr,...left,...right]
}
console.log(mergesort1([2,3,1,4,-9,5]));


