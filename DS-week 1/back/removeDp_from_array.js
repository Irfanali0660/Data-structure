function duplicate(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i+1; j < array.length; j++) {
        if(array[i]===array[j]){
            for (let k = j; k < array.length; k++) {
                array[k]=array[k+1]
            }
            j--
            array.length--
        }
      } 
    }
    return array
}

console.log(duplicate([1, 2,2,2,2,2,2,2 ,3, 2, 1, 1, 4, 5, 4, 2, 5,5]));

// function duplicate(array) {
//     for (let i = 0; i < Math.floor(array.length/2); i++) {
//       temp=array[i]
//       array[i]=array[array.length-i-1]
//       array[array.length-i-1]=temp
//     }
//     return array
// }


// console.log(duplicate([1,2,3,4,5,6,7,8,9]));

