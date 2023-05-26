// function string(str) {
//     return str.split('').reverse().join('')
// }

// console.log(string('hello'));

// function stringfor(str) {
// let reverse=''
// for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str.charAt(i)
// }
// return reverse
// }

// console.log(stringfor('hello'));

// var reverseString = function(s) {
//     for(let i=0;i<=Math.floor((s.length-1)/2);i++){
//         temp=s[i]
//         s[i]=s[s.length-1]
//         s[s.length-1]=temp
//      }
//      return s
// };

// console.log(reverseString(["h",'e','l','l','o']));

// var singleNumber = function(nums) {
//     console.log(nums);
//     for(let i=0;i<nums.length-1;i++){
       
//         let flag=0;
//         for(let j=i+1;j<nums.length-1;j++){
//             console.log(nums[i],nums[j]);
//             if(nums[i]==nums[j]){
//                 flag++
//             }
//         }
//         console.log(flag);
//         if(flag==0){
//             return nums[i]
//         }
//     }
// };

// console.log(singleNumber([4,1,2,1,2]));


w