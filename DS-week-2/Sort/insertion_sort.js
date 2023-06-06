function insertion(array) {
    for (let i = 1; i < array.length; i++) {
        let numberToinsert=array[i]
        let j=i-1
        while (j>=0 && array[j]>numberToinsert) {
            array[j+1]=array[j]
            j=j-1
        }
        array[j+1]=numberToinsert
    }
    return array
}
console.log(insertion([-2,3,5,6,6,7,-8]));