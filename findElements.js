function findElements(arr,target){

    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return true
        }
    }

    return false
}

console.log(findElements( [2, 5, 7, 9],7))
console.log(findElements( [2, 5, 7, 9],4))
console.log(findElements( [10, 20, 30],10))
