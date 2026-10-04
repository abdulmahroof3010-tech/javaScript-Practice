function countPositive(arr){

    let count=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            count++
        }
    }
    return count
}

console.log(countPositive([2, -5, 7, 0, -3, 4]))
console.log(countPositive([-1, -5, 0, -2]))
console.log(countPositive( [1, 2, 3, 4, 5]));
console.log(countPositive([]))

