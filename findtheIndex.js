function findTheIndex(arr,target){

    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }

    return -1


}

console.log(findTheIndex( [10, 20, 30, 40],30))
console.log(findTheIndex( [5, 8, 3, 8, 10],8))
console.log(findTheIndex( [2, 4, 6],9))
console.log(findTheIndex( [],5))
console.log(findTheIndex( [5],5))
console.log(findTheIndex( [5,5,5],5))
console.log(findTheIndex([10, 20, 30], 10))



