// largest value

function largest(array) {
    let large=0
    for (let i = 0; i < array.length-1; i++) {
        if(large<array[i]){
            large=array[i]
        }        
    }
    return large
}

// console.log(largest([2,4,5,6,3,4,45,4,]));

// smallest value

function smallest(array) {
    let small=Infinity
    for (let i = 0; i < array.length-1; i++) {
        if(small>array[i]){
            small=array[i]
        }        
    }
    return small
}

// console.log(smallest([2,4,5,6,3,4,45,4,]));

// unique element
function unique(array){
  let arr=[]
  for (let i = 0; i < array.length; i++) {
      let isunique=true
        for (let j = 0; j < array.length; j++) {
          if(array[i]==array[j] && i!=j){
              isunique=false
              break
          }
        }  
        if(isunique){
          arr.push(array[i])
        }
    }
    return arr
}

console.log(unique([1, 2, 2, 1, 3,4,5,5,6]));

// 