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

console.log(bubblesort([-2,4,2,-4,6,7,2,1]));