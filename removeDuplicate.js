function removeDublicate(nums){

    let position=1;

    for(let i=1;i<nums.length;i++){
        if(nums[i] !==nums[i-1]){
            
            nums[position]=nums[i];
            
            position++

        }
        
       
    }

    return position
   

}

console.log(removeDublicate([1, 1, 2]))
console.log(removeDublicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
// console.log(removeDublicate([1, 1, 2]))
