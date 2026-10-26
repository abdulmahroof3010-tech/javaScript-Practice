function moveNegative(nums){
    let position=0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]<0){
            let temp=nums[i];

            for(let j=i;j>position;j--){
                nums[j]=nums[j-1];
                
            }
            nums[position]=temp;
            position++
        }
       

    }
    return nums

}


console.log(moveNegative([1, -2, 3, -4, 5, -6]))
console.log(moveNegative([3, -1, 0, -5, 2, -8]))
console.log(moveNegative([1, 2, 3, 4]))

                         