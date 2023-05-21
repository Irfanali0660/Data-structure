
function factorial(num) {
    let pro =1
    for (let i = 1; i <= num; i++) {
        pro=pro*i
    }
    return pro
}

console.log(factorial(10));