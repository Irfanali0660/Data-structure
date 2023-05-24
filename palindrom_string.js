function string(str) {
    for (let i = 0; i < (str.length-1)/2; i++) {
        console.log(str[i]);
        if(str[i]!=str[str.length-1-i]){
            return 'Not palindrome'
        }
    }
    return "palindrome"
}

console.log(string("malayalam"));