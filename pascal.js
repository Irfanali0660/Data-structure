function pascal(num) {
    let array=[]
    if(num==0){
        return null
    }else{
        for (let j = 1; j <=num; j++) {
            let pascalarray=[]
            for (let i = 0; i < j; i++) {
                if(i==j-1 || i==0){
                    pascalarray.push(1)
                }else{
                        pascalarray.push(array[j-2][i-1]+array[j-2][i])
                }
            }
            array.push(pascalarray)
        }
    }
    return array
}

console.log(pascal(6));