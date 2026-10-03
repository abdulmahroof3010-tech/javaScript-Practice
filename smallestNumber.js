function smallestNumber(arr){
    let smallest=arr[0];

    for(let i=1;i<arr.length;i++){
        if(smallest>arr[i]){
            
            smallest=arr[i]
        }
    }

    return smallest

}

console.log(smallestNumber([5, 2, 8, 1, 9]))
console.log(smallestNumber([3,0,5,6,3,2,0]))
console.log(smallestNumber([-3, -8, -2, -10]))
