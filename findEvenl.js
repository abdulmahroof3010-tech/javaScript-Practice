function evenNumber(arr){
    let count=0;
    
    for(let i=0 ;i<arr.length;i++){
        if(arr[i]%2===0){
            count++
        }
    }

    return count
}

console.log(evenNumber([1, 2, 3, 4, 6]))
console.log(evenNumber( [7, 11, 13]))
console.log(evenNumber([2, 8, 5, 10, 3, 12]))
