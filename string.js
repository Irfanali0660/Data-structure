function string(str) {
    return str.split('').reverse().join('')
}

console.log(string('hello'));

function stringfor(str) {
let reverse=''
for (let i = str.length - 1; i >= 0; i--) {
    reverse += str.charAt(i)
}
return reverse
}

console.log(stringfor('hello'));