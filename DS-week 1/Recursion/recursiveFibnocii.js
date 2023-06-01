function recursive(n){
    if(n<2){
        return n
    }
    return recursive(n-1)+recursive(n-2)
}

console.log(recursive(7))

// n=7
