function power2(num){
   if(num<1){
    return false
   }else{
    for (let i = 1; i <= num; i*=2) {
    if(i===num){
        return true
    }        
    }
    return false
   }
}
console.log(power2(63));


function power2w(num){
    if(num<1){
     return false
    }else{
     while (num>1) {
        if(num%2!=0){
            return false
        }
        num/=2;
     }
     return true
    }
 }
 console.log(power2w(64));