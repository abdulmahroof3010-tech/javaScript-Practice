function arraySum(arr){
    let sum=0;

    for(let i = 0 ;i <arr.length;i++){
        sum+=arr[i]

    }

    return sum

}

console.log(arraySum([2,5,7,3]))
console.log(arraySum([10,-2,4]))