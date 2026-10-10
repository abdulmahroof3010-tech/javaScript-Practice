function arrayOfGreater(nums,target){

    let greater=[];

    for(let i=0;i<nums.length;i++){
        if(nums[i]>target){
            greater.push(nums[i])
        }
    }

    return  greater


}

console.log(arrayOfGreater([2, 8, 4, 10, 3, 12],5))
console.log(arrayOfGreater([1, 2, 3], 10))
console.log(arrayOfGreater([5, 7, 5, 9], 5))
console.log(arrayOfGreater([], 5))

