// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
  
//       if (arr[mid] === target) {
//         return mid; // Target found, return the index
//       } else if (arr[mid] < target) {
//         left = mid + 1; // Adjust left pointer
//       } else {
//         right = mid - 1; // Adjust right pointer
//       }
//     }
  
//     return -1; // Target not found
//   }
  
//   // Example usage
//   const sortedArray = [2, 5,5, 8, 12, 16, 23, 38, 56, 72, 91];
//   const target = 5;
//   const index = binarySearch(sortedArray, target);
  
//   if (index !== -1) {
//     console.log("Element found at index", index);
//   } else {
//     console.log("Element not found");
//   }
  

function binary(arr,val){
    let left=0
    let right=arr.length-1
    while ( left<=right) {
      let middle=Math.floor((left+right)/2)

      if(arr[middle]==val){
        return middle
      }
      else if(val<arr[middle]){
        right=middle-1
      }else{
        left=middle+1
      }
    }
    return -1
}

console.log(binary([1,2,3,4,5,6,7,8,9],1));


