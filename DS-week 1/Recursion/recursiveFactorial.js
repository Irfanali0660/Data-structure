function recursive(n){
    if(n==0){
        return 1
    }
    return recursive(n-1)*n
}

console.log(recursive(3))

// n=7
