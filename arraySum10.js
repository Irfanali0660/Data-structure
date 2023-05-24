    function result(arr) {
    for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if(arr[i]+arr[j]==10){
            return new Array(arr[i],arr[j])
        }
    }    
    }
        return new Array("no value")
    }   
    console.log(result([6,5,4,3,9,0]));

    // O(n2) Time
    // o(1)  Space