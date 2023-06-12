function linear(array,val) {
    for (let i = 0; i < array.length; i++) {
        if(array[i]==val){
            return i
        }
    }
    return -1
}
// console.log(linear([2,1,3,45,6,7,8],33));

function binary(array,val) {
    let left=0
    let right=array.length-1
    
    while (left<=right) {
        let middle=Math.floor((left+right)/2)
        if(array[middle]==val){
            return middle
        }else if(val<array[middle]){
            right=middle-1
        }else{
            left=middle+1
        }
    }
    return -1
}

// console.log(binary([1,2,3,4,5,6,7,8,9],32));


function recursivebinary(array,val) {
    return search(array,val,0,array.length-1)
}

function search(array,val,left,right) {
    if(left>right){
        return -1
    }
    let mid=Math.floor((left+right)/2)
    if(array[mid]==val){
        return mid
    }else if(val<array[mid]){
        return search(array,val,left,mid-1)
    }else{
        return search(array,val,mid+1,right)
    }
}

// console.log(recursivebinary([1,2,3,4,5,6,7,8,9],7));

function reverse(array) {
    for (let i = 0; i < Math.floor(array.length/2); i++) {  
        temp=array[i]
        array[i]=array[array.length-1-i]
        array[array.length-1-i]=temp
    }
    return array
}

// console.log(reverse([1,2,3,4,5,6,7,8]));

function duplicate(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[i]==array[j]){
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

// console.log(duplicate([1,2,3,4,4,4,5,6,7,8,5,6,7]));

function factorial(val) {
    let n=1
    for (let i = 1; i <=val; i++) {
        n=n*i
    }
    return n
}

// console.log(factorial(5));

function recursivefactorial(val) {
    if(val==0){
        return 1
    }
    return val*recursivefactorial(val-1)
}

// console.log(recursivefactorial(5));

function fibnoci(val) {
    let fib=[0,1]
    for (let i = 2; i < val; i++){ 
        let value=fib[i-1]+fib[i-2]
        fib.push(value)
    }
    return fib
}

// console.log(fibnoci(10));

function recursivefibnoci(val) {    
  if(val<=1){
    return val
  }else{
      return recursivefibnoci(val-1)+recursivefibnoci(val-2)
  }
}

// console.log(recursivefibnoci(3));
function power2(num) {
    if(num<=0){
        return null
    }else{
        while (num>1) {
            if(num%2!=0){
                return false
            }
            num=num/2
        }
        return true
    }
}

// console.log(power2(8));

function power2(num) {
    if(num<=1){
       return true
    }else{
        if(num%2==0){
            return power2(num/2)
        }else{
            return false
        }
    }
}

// console.log(power2(32));

function palindrom(str){
    for (let i = 0; i < Math.floor(str.length/2); i++) {    
        if(str[i]!=str[str.length-1-i]){
            return false
        }
    }
    return true
}
// console.log(palindrom('malayalam'));


function array(array){
    print(array,0)
}

function print(array,index){
    if(array.length==index){
        return null
    }else{
        console.log(array[index]);
    }
    print(array,index+1)
}
// array([1,2,3,4,5,6,7,8,9])

