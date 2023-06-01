
function prime(num){
    if(num<2){
        return false
    }else{
        for (let i = 2; i < num; i++) {
           if(num%i==0){
            return false
            // break;
           }
        }
        return true
    }
}
console.log(prime(1));  // false
console.log(prime(5));  // true
console.log(prime(4));  // false