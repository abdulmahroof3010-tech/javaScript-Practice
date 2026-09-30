function largestNumber(arr){
 
    let largest=arr[0];

    for(let i=1;i<arr.length;i++){
    
        if(largest<arr[i]){
            largest=arr[i]
        }
        
    }

    return largest


}

console.log(largestNumber( [3, 7, 2, 9, 4]))
console.log(largestNumber( [-5, -2, -10, -1]))

