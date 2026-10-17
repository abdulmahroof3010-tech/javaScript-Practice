function moveZero(nums){

    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]===0  && nums[j]!==0){
    //             let temp=nums[i];
    //             nums[i]=nums[j];
    //             nums[j]=temp
                
    //         }
    //     }
    // }

    let position=0;

    for(let i=0;i<nums.length;i++){

        if(nums[i] !==0){
            if(i !==position){
            let temp=nums[i];
            nums[i]=nums[position];
            nums[position]=temp;

            }
            position++

        }
    }

    return nums

    

}

console.log(moveZero([0, 1, 0, 3, 12]))
console.log(moveZero([0, 0, 1]))
console.log(moveZero([1, 2, 3]))
console.log(moveZero([0, -1, 0, 3, -12]))
