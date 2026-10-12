function secondLargest(nums){

    let largest=-Infinity;
    let secondLargest=-Infinity;

    for(let i=0;i<nums.length;i++){
        if(largest<nums[i]){
            secondLargest=largest
            largest=nums[i];
        }else if(nums[i]<largest && secondLargest<nums[i]){
            secondLargest=nums[i]

        
        }

        

        
    }

    if (secondLargest === -Infinity) {
    return -1;
}

    return secondLargest

   

     


}
console.log(secondLargest( [10, 5, 8, 20, 15]))
console.log(secondLargest( [5, 5, 3]))
console.log(secondLargest( [1, 2, 3, 4]))
console.log(secondLargest( [5, 5, 5]))
console.log(secondLargest( [-10, -5, -2, -8]))
console.log(secondLargest( []))

