function selection(array) {
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

console.log(selection([4,2,3,5,6,7,-2,-5]));


function selection(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallestIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallestIndex]) {
                smallestIndex = j;
            }
        }
        if (smallestIndex !== i) {
            [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
        }
    }
    return arr;
}

const array = [2,3,1,4,-9,5]        
const select = selection(array)
console.log(select);