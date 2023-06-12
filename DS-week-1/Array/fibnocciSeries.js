// function fibonacciSeries(n) {
//     var series = [0, 1]; // Initialize the series with first two numbers: 0 and 1
    
//     for (var i = 2; i < n; i++) {
//       var nextNum = series[i - 1] + series[i - 2]; // Calculate the next number by summing up the last two numbers
//       series.push(nextNum); // Add the next number to the series
//     }
    
//     return series;
//   }
  
//   // Example usage
//   var n = 10; // Generate Fibonacci series up to     the 10th number
//   var result = fibonacciSeries(n);
  
//   console.log(result); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  

// var fib = function(n) {
//     if(n==0){
//         return 0
//     }
//     else if(n==1){
//         return 1
//     }else{
//           var series=[0,1]
//       for(i=2;i< n;i++){
//           var nextNum=series[i-1]+series[i-2];
//           series.push(nextNum)
//       }
//       return series[n-1]+series[n-2];
//     }
//   }
  
//   var n=0
//   var result = fib(n)
//   console.log(result);


function fibnocci(num){
    let series=[0,1]
    for (let i = 2; i < num; i++){
        let nextVal=series[i-1]+series[i-2];
        series.push(nextVal)       
    }
    return series
}

console.log(fibnocci(10))
// console.log(fibnocci(4))
// console.log(fibnocci(5))