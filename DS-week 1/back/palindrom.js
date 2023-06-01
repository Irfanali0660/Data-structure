function isPalindrome(str) {
    // Base case: empty string or single character is a palindrome
    if (str.length <= 1) {
      return true;
    }
  
    // Check if the first and last characters are equal
    if (str[0] === str[str.length - 1]) {
      // Recursively check the substring without the first and last characters
      return isPalindrome(str.substring(1, str.length - 1));
    }
  
    // If the first and last characters are not equal, it's not a palindrome
    return false;
  }

// console.log(isPalindrome("radar"));  // Output: true
// console.log(isPalindrome("hello"));  // Output: false


function isPalindrome(str) {
    if(str.length<=1){
        return true
    }
    if(str[0]==str[str.length-1]){
        return isPalindrome(str.slice(1,-1))
    }
    return false
  }

// console.log(isPalindrome("radar"));  // Output: true
// console.log(isPalindrome("hello"));  // Output: false

function isPalindromefor(str) {
   for (let i = 0; i < str.length/2; i++) {
        if(str[i]!=str[str.length-i-1]){
            return false
        }    
   }
   return true
  }

console.log(isPalindromefor("radar"));  // Output: true
console.log(isPalindromefor("hello"));  // Output: false


