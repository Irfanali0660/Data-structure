function printarray(array) {
     print(array,0)
}

function print(array,index) {
    if(index==array.length){
        return null
    }else{
        console.log(array[index])
    }
    print(array,index+1)
}

printarray([1,4,5,6,7,8])