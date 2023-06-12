

function selectionsort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
           if(array[i]>array[j]){
            let temp=array[i]
            array[i]=array[j]
            array[j]=temp
           }
        }
    }   
    return array
}

// console.log(selectionsort([2,1,3,4,-5,5]));

function bubblesort(array) {
    let swapped
    do {
        swapped=false
        for (let i = 0; i < array.length; i++) {
            if(array[i]>array[i+1]){
                let temp=array[i]
                array[i]=array[i+1]
                array[i+1]=temp
                swapped=true
            }
        }
    } while (swapped);
    return array
}

// console.log(bubblesort([2,1,3,4,5,-2]));

function insersionsort(array) {
    for (let i = 1; i < array.length; i++) {
        let number=array[i]
        let j=i-1
        while (j>=0 && array[j]>number) {
            array[j+1]=array[j]
            j-=1
        }
        array[j+1]=number
    }
    return array
}

console.log(insersionsort([2,1,4,3,5,-6]));