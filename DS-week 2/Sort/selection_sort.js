function selection(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[i]>array[j]){
                temp=array[i]
                array[i]=array[j]
                array[j]=temp
            }
        }
    }
    return array
}

console.log(selection([4,2,3,5,6,7,-2,-5]));