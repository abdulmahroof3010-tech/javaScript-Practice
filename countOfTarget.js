function countOfTarget(arr,target){

    let count=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            count++
        }
    }

    return count

}

console.log(countOfTarget([2, 5, 2, 7, 2],2))
console.log(countOfTarget([1, 2, 3, 4],5))
console.log(countOfTarget([7, 7, 7, 7],7))
